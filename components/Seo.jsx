import React from "react";

function Seo() {
  return (
    <>
      <meta
        name="description"
        content="Retrouvez tous les liens de mes réseaux."
      />

      <meta property="og:url" content="https://links.quentin-dasilva.fr/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Quentin Da Silva | Liens" />
      <meta
        property="og:description"
        content="Retrouvez tous les liens de mes réseaux."
      />
      {/*       <meta
        property="og:image"
        content="https://links.corentin-thomas.fr/card.png"
      /> */}

      <meta name="twitter:card" content="summary" />
      <meta property="twitter:domain" content="links.quentin-dasilva.fr" />
      <meta
        property="twitter:url"
        content="https://links.quentin-dasilva.fr/"
      />
      <meta name="twitter:title" content="Quentin Da Silva | Liens" />
      <meta
        name="twitter:description"
        content="Retrouvez tous les liens de mes réseaux."
      />
      {/*       <meta
        name="twitter:image"
        content="https://links.corentin-thomas.fr/card.png"
      /> */}
    </>
  );
}

export default Seo;
