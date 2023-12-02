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
  const [open, setOpen] = useState<boolean>(false);
  const [select, setSelect] = useState<string | undefined>("");
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const modalRef = useRef<HTMLInputElement>(null);
  const dispatch = AppDispatch();
  const { translateValue } = useSelector((state: RootState) => state);

  useEffect(() => {}, [select]);

  const punctutaion = /[.,\/#!$%\^&\*;:{}=\-_`~()\?]/g; // for punctutaion  example . , ?

  const handleMouseUp = async (event: any) => {
    setSelect(window.getSelection()?.toString());
    const data = window.getSelection()?.toString()?.replace(punctutaion, " ");
    setOpen(true);
    setPosition({
      x: event.clientX - 440,
      y: event.clientY,
    });
    if (event.detail == 2 || data) {
      await dispatch(
        postApi({
          q: data,
          target: "tr",
        })
      );
    }
  };

  useOnClickOutside(modalRef, () => setOpen(false));

  const newValues = select?.replace(punctutaion, " ").trim().split(" "); // select sentence or word

  const comparePlus = newValues?.length > 1;
  const compareMinus = newValues?.length == 1;
  const addFlashCard = () => {
    if (comparePlus) {
      dispatch(
        addCard({
          en: select?.replace(punctutaion, " "),
          tr: translateValue?.[0]?.translatedText,
        })
      );
      setOpen(false);
      setSelect("");
    } else {
      dispatch(
        addKnowCard({
          en: select?.replace(punctutaion, " "),
          tr: translateValue?.[0]?.translatedText,
        })
      );
      setOpen(false);
      setSelect("");
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
      <h2 className="text-center my-2">
        Gri border çevresine tıklayınca popup kapanıyor :D
      </h2>
      <div ref={modalRef} className="max-w-max mx-auto border-2">
        <p
          //ref={modalRef}
          onMouseUp={handleMouseUp}
          className="border-[purple] border-2 p-2  max-w-3xl mx-auto"
        >
          The App Router works in a new directory named app. The app directory
          works alongside the pages directory to allow for incremental adoption.
          This allows you to opt some routes of your application into the new
          behavior while keeping other routes in the pages directory for
          previous behavior. If your application uses the pages directory,
          please also see the Pages Router documentation.
        </p>

        {select && (
          <Popup open={open} close={() => setOpen(false)} position={position}>
            <div className="flex flex-col items-center gap-3 p-2">
              <p>{select?.replace(punctutaion, " ")}</p>

              <p className="text-black">{translateValue?.[0].translatedText}</p>
              <Button
                disabled={!comparePlus}
                title="Add To FlashCar"
                onClick={addFlashCard}
              />
              <Button
                disabled={!compareMinus}
                title="Know"
                onClick={addFlashCard}
              />
            </div>
          </Popup>
        )}
      </div>
    </Layout>
  );
}
