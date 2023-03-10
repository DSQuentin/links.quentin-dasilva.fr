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
            gyroControls: true,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0xae71eb,
            backgroundAlpha: 0.00,
            points: 16.00,
            maxDistance: 18.00,
            spacing: 18.00          
          })
                        `,
          }}
        />

        <Script id="main">
          {`
        setTimeout(() => {
            const main = document.querySelector('main');
            main.style.opacity = 1;
            main.style.filter = 'blur(0)';
        }, 1000);
              `}
        </Script>

        <Head>
          <title>Quentin Da Silva | Liens</title>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="https://links.quentin-dasilva.fr/imgs/favicons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="https://links.quentin-dasilva.fr/imgs/favicons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="https://links.quentin-dasilva.fr/imgs/favicons/favicon-16x16.png"
          />
          <link
            rel="manifest"
            href="https://links.quentin-dasilva.fr/imgs/favicons/site.webmanifest"
          />
          <link
            rel="mask-icon"
            href="https://links.quentin-dasilva.fr/imgs/favicons/safari-pinned-tab.svg"
            color="#5bbad5"
          />
          <link
            rel="shortcut icon"
            href="https://links.quentin-dasilva.fr/imgs/favicons/favicon.ico"
          />
          <meta name="msapplication-TileColor" content="#0b022d" />
          <meta
            name="msapplication-config"
            content="https://links.quentin-dasilva.fr/imgs/favicons/browserconfig.xml"
          />
          <meta name="theme-color" content="#0b022d" />
          <Seo />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js"></script>
        </Head>

        <main>
          <Header />
          <ul className="box-border list-none my-0 mx-auto p-[2em] max-w-[480px]">
            {links.map((link) => (
              <Link key={link.name} {...link} />
            ))}
          </ul>
        </main>
      </div>
    </>
  );
}
