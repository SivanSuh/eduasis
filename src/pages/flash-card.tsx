import FlashCard from "@/component/FlashCard";
import Layout from "@/component/Layout";
import { RootState } from "@/store/store";
import Link from "next/link";
import { useSelector } from "react-redux";

const FlashCardPage = () => {
  const { content } = useSelector((state: RootState) => state);

  console.clear();
  console.log("content", content);
  return (
    <Layout title="Flash Card Page">
      <Link href="/" className="hover:underline m-4">
        Return Home
      </Link>
      <h2 className="m-2 text-center text-2xl">FlashCard Listesi</h2>
      <div className="flex flex-wrap">
        {content?.map((item) => (
          <FlashCard content={item} text={item} />
        ))}
      </div>
    </Layout>
  );
};
export default FlashCardPage;
