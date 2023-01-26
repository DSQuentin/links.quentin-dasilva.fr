import Head from "next/head";
import Components from "@/components/Components";
import Seo from "@/components/Seo";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-gray-200">
        <Head>
          <title>Quentin Da Silva | Liens</title>
          <link rel="icon" href="/favicon.ico" />
          <Seo />
        </Head>
        <Components />
      </div>
    </>
  );
}
