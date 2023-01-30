import React from "react";

function Link({ alt, name, url, Icon }) {
  return (
    <li className="bg-[#fffa] rounded-[10em] p-[1em] my-[1.4em] mx-0 shadow-custom">
      <a
        href={url}
        alt={alt}
        target="_blank"
        rel="nofollow noopener noreferrer"
        className="flex flex-row items-center justify-center gap-[0.5em] text-black"
      >
        <Icon />

        {name}
      </a>
    </li>
  );
}

export default Link;
