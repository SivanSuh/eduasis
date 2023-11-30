import Avatar from "@/component/Avatar";
import Button from "@/component/Button";
import { useState } from "react";
import Popup from "@/component/Popup";
import { AppDispatch } from "@/store/store";
import { addCard } from "@/store/slices/flashCardSlice";
import Link from "next/link";

export default function Home() {
  const [select, setSelect] = useState<string | undefined>("");
  const [open, setOpen] = useState<boolean>(false);
  const dispatch = AppDispatch();

  const handleMouseUp = () => {
    console.log(
      "window.getSelection().anchorNode.data => ",
      window.getSelection()?.toString()
    );
    setSelect(window.getSelection()?.toString());
    setOpen(true);
  };

  return (
    <main className={`flex  flex-col items-start p-24 `}>
      <figure className="flex items-center gap-4 my-3">
        <Avatar image="https://eduasis.io/eduasis-logo-white-text.svg" />
        <strong>Reading</strong>
      </figure>
      <Link href="/flash-card">Card List</Link>

      <p onMouseUp={handleMouseUp}>
        The App Router works in a new directory named app. The app directory
        works alongside the pages directory to allow for incremental adoption.
        This allows you to opt some routes of your application into the new
        behavior while keeping other routes in the pages directory for previous
        behavior. If your application uses the pages directory, please also see
        the Pages Router documentation.
      </p>
      {select && (
        <Popup open={open}>
          <div className="flex flex-col items-center gap-3 p-2">
            {select}
            <Button
              title="Add To FlashCar"
              onClick={() => dispatch(addCard(select))}
            />
            <Button title="Know" />
          </div>
        </Popup>
      )}
    </main>
  );
}
