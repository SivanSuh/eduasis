import FlashCard from "@/component/FlashCard";
import { RootState } from "@/store/store";
import Link from "next/link";
import { useSelector } from "react-redux";

const FlashCardPage = () => {
  const { content } = useSelector((state: RootState) => state.flashCard);

  return (
    <main>
      <Link href="/">Return Home</Link>
      <nav>
        <h2>Flash Card Page</h2>
      </nav>
      <div></div>
      {content.map((item) => (
        <FlashCard content={item} />
      ))}
    </main>
  );
};
export default FlashCardPage;
