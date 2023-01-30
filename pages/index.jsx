/* eslint-disable @next/next/no-sync-scripts */
import Header from "@/components/Header";
import GithubIcon from "@/components/icons/GithubIcon";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import MaltIcon from "@/components/icons/MaltIcon";
import WebsiteIcon from "@/components/icons/WebsiteIcon";
import Link from "@/components/Link";
import Seo from "@/components/Seo";
import Head from "next/head";
import Script from "next/script";

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
      <div className="min-h-screen" id="vanta">
        <Script
          id="vanta"
          dangerouslySetInnerHTML={{
            __html: `
          VANTA.NET({
            el: "#vanta",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 300.00,
            minWidth: 300.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0xf7f7f7,
            backgroundAlpha: 0.00,
            points: 8.00,
            maxDistance: 21.00,
            spacing: 18.00          
          })
                        `,
          }}
        />
        <Head>
          <title>Quentin Da Silva | Liens</title>
          <link rel="icon" href="/favicon.ico" />
          <Seo />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js"></script>
        </Head>

        <Header />
        <ul className="box-border list-none my-0 mx-auto p-[2em] max-w-[480px]">
          {links.map((link) => (
            <Link key={link.name} {...link} />
          ))}
        </ul>
      </div>
    </>
  );
}
