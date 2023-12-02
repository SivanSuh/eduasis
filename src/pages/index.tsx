import Avatar from "@/component/Avatar";
import Button from "@/component/Button";
import { useEffect, useRef, useState } from "react";
import Popup from "@/component/Popup";
import { AppDispatch, RootState } from "@/store/store";
import { addCard, addKnowCard, postApi } from "@/store/slices/flashCardSlice";
import Link from "next/link";
import Layout from "@/component/Layout";
import { useOnClickOutside } from "@/hook/useClickOutSide";
import { useSelector } from "react-redux";

export default function Home() {
  const [select, setSelect] = useState<string | undefined>("");
  const [open, setOpen] = useState<boolean>(false);
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const modalRef = useRef<HTMLDivElement>(null);
  const dispatch = AppDispatch();
  const { translateValue } = useSelector((state: RootState) => state);

  useEffect(() => {}, [select]);
  const handleMouseUp = async (event: any) => {
    setSelect(window.getSelection()?.toString());
    setOpen(true);

    setPosition({
      x: event.clientX - 193,
      y: event.clientY,
    });
    (await select) &&
      dispatch(
        postApi({
          q: select?.replace(punctutaion, " "),
          target: "tr",
        })
      );
  };

  const closePopup = () => {
    setOpen(false);
  };
  useOnClickOutside(modalRef, closePopup);
  const punctutaion = /[.,\/#!$%\^&\*;:{}=\-_`~()\?]/g; // for punctutaion  example . , ?

  const newValues = select?.replace(punctutaion, " ").trim().split(" ");

  console.log(
    "select?.replace(punctutaion,)",
    select?.replace(punctutaion, " ")
  );
  const addFlashCard = () => {
    if (newValues?.length > 1) {
      dispatch(addCard(select?.replace(punctutaion, " ")));
    } else {
      dispatch(addKnowCard(select?.replace(punctutaion, " ")));
    }
  };

  return (
    <Layout title="Home Page">
      <div className="flex justify-between items-center p-3">
        <figure className="flex items-center gap-4 my-3">
          <Avatar image="https://eduasis.io/eduasis-logo-white-text.svg" />
          <strong>Reading</strong>
        </figure>
        <Link href="/flash-card" className="hover:underline">
          Flash Card List
        </Link>
        <Link href="/known-page" className="hover:underline mx-2">
          Known Word List
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
            <br />
            {translateValue?.[0].translatedText}
            <Button title="Add To FlashCar" onClick={addFlashCard} />
            <Button title="Know" onClick={addFlashCard} />
          </div>
        </Popup>
      ) : null}
    </Layout>
  );
}
