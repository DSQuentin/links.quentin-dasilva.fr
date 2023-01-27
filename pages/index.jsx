import Head from "next/head";
import Components from "@/components/Components";
import Seo from "@/components/Seo";
import Link from "@/components/Link";
import WebsiteIcon from "@/components/icons/WebsiteIcon";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import MaltIcon from "@/components/icons/MaltIcon";
import GithubIcon from "@/components/icons/GithubIcon";

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
      <div className="min-h-screen bg-gray-200">
        <Head>
          <title>Quentin Da Silva | Liens</title>
          <link rel="icon" href="/favicon.ico" />
          <Seo />
        </Head>
        <ul className="list-none">
          {links.map((link) => (
            <Link key={link.name} {...link} />
          ))}
        </ul>
        <Components />
      </div>
    </>
  );
}
