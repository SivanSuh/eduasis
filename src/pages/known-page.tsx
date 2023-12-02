import FlashCard from "@/component/FlashCard";
import Layout from "@/component/Layout";
import { RootState } from "@/store/store";
import Link from "next/link";
import { useSelector } from "react-redux";

const KnownPage = () => {
  const { known } = useSelector((state: RootState) => state);
  return (
    <Layout title="Known Word Page">
      <Link href="/" className="hover:underline">
        Return Home
      </Link>
      <h2 className="m-2 text-center text-2xl">Bilinen Kelimeler</h2>
      <div className="flex flex-wrap justify-center items-center">
        {known.map((item: any) => (
          <FlashCard content={item} text={item} />
        ))}
      </div>
    </Layout>
  );
};

export default KnownPage;
