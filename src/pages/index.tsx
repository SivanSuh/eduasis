import Avatar from "@/component/Avatar";
import Button from "@/component/Button";
import { useRef, useState } from "react";
import Popup from "@/component/Popup";
import { AppDispatch } from "@/store/store";
import { addCard } from "@/store/slices/flashCardSlice";
import Link from "next/link";
import Layout from "@/component/Layout";
import { useOnClickOutside } from "@/hook/useClickOutSide";

export default function Home() {
  const [select, setSelect] = useState<string | undefined>("");
  const [open, setOpen] = useState<boolean>(false);
  const dispatch = AppDispatch();
  const modalRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const handleMouseUp = (event: any) => {
    console.log("evemt", event);
    console.log(
      "window.getSelection().anchorNode.data => ",
      window.getSelection()?.toString()
    );
    setSelect(window.getSelection()?.toString());
    setOpen(true);

    setPosition({
      x: event.clientX - 193,
      y: event.clientY,
    });
  };

  const closePopup = () => {
    setOpen(false);
  };
  useOnClickOutside(modalRef, closePopup);
  const punctutaion = /[.,\/#!$%\^&\*;:{}=\-_`~()\?]/g;
  return (
    <Layout title="Home Page">
      <div className="flex justify-between items-center p-3">
        <figure className="flex items-center gap-4 my-3">
          <Avatar image="https://eduasis.io/eduasis-logo-white-text.svg" />
          <strong>Reading</strong>
        </figure>
        <Link href="/flash-card" className="hover:underline">
          Card List
        </Link>
      </div>

      <p
        ref={modalRef}
        onMouseUp={handleMouseUp}
        className="border-[purple] border-2 p-2  max-w-4xl mx-auto"
      >
        The App Router works in a new directory named app. The app directory
        works alongside the pages directory to allow for incremental adoption.
        This allows you to opt some routes of your application into the new
        behavior while keeping other routes in the pages directory for previous
        behavior. If your application uses the pages directory, please also see
        the Pages Router documentation.
      </p>

      {select ? (
        <Popup open={open} close={setOpen} position={position}>
          <div className="flex flex-col items-center gap-3 p-2">
            {select.replace(punctutaion, " ")}
            <Button
              title="Add To FlashCar"
              onClick={() =>
                dispatch(addCard(select.replace(punctutaion, " ")))
              }
            />
            <Button title="Know" />
          </div>
        </Popup>
      ) : null}
    </Layout>
  );
}
