import FlashCard from "@/component/FlashCard";
import FlashCardProps from "@/component/FlashCard/props";
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
      <div className="flex flex-wrap justify-center items-center">
        {content?.map((item: any) => {
          return <FlashCard content={item} text={item} key={item} />;
        })}
      </div>
    </Layout>
  );
};
export default FlashCardPage;
