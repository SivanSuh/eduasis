import FlashCard from "@/component/FlashCard";
import Layout from "@/component/Layout";
import { RootState } from "@/store/store";
import Link from "next/link";
import { useSelector } from "react-redux";

const FlashCardPage = () => {
  const { content } = useSelector((state: RootState) => state.flashCard);

  return (
    <Layout title="Flash Card Page">
      <Link href="/" className="hover:underline">
        Return Home
      </Link>
      <div></div>
      {content.map((item) => (
        <FlashCard content={item} />
      ))}
    </Layout>
  );
};
export default FlashCardPage;
