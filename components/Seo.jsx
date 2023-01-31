import React from "react";

function Seo() {
  const title = "Quentin Da Silva | Liens";
  const description = "Retrouvez tous les liens de mes réseaux.";
  const url = "https://links.quentin-dasilva.fr/";
  const banner = "https://links.quentin-dasilva.fr/imgs/banner.png";

  return (
    <>
      <meta name="description" content={description} />

      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={banner} />

      <meta name="twitter:card" content="summary" />
      <meta property="twitter:domain" content={url} />
      <meta property="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={banner} />

      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    </>
  );
}

export default Seo;
