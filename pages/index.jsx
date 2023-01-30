import Header from "@/components/Header";
import GithubIcon from "@/components/icons/GithubIcon";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import MaltIcon from "@/components/icons/MaltIcon";
import WebsiteIcon from "@/components/icons/WebsiteIcon";
import Link from "@/components/Link";
import Seo from "@/components/Seo";
import Head from "next/head";

export default function Home() {
  const links = [
    {
      name: "Mon site web",
      alt: "Mon site web",
      url: "https://quentin-dasilva.fr",
      Icon: WebsiteIcon,
    },
    {
      name: "LinkedIn",
      alt: "LinkedIn",
      url: "https://www.linkedin.com/in/quentin-da-silva-a02428237/",
      Icon: LinkedinIcon,
    },
    {
      name: "Malt",
      alt: "Malt",
      url: "https://www.malt.fr/profile/quentindasilva1",
      Icon: MaltIcon,
    },
    {
      name: "GitHub",
      alt: "GitHub",
      url: "https://github.com/DSQuentin",
      Icon: GithubIcon,
    },
  ];

  return (
    <>
      <div className="min-h-screen ">
        <Head>
          <title>Quentin Da Silva | Liens</title>
          <link rel="icon" href="/favicon.ico" />
          <Seo />
        </Head>
        <Header />
        <div className="max-w-2xl px-4 mx-auto sm:px-6 lg:px-24">
          <div className="py-6 space-y-4">
            {links.map((link) => (
              <Link key={link.name} {...link} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
