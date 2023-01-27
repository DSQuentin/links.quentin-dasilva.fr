import React from "react";

function Link({ alt, name, url, Icon }) {
  return (
    <div className="flex flex-col justify-center">
      <a
        href={url}
        alt={alt}
        target="_blank"
        rel="nofollow noopener noreferrer"
        className="flex items-center bg-white justify-center w-full p-4 text-xl rounded-lg cursor-pointer hover:backdrop-opacity-80 transition duration-300 ease-in-out transform  hover:-translate-y-0.5 hover:scale-102"
      >
        <div className="mr-4">
          <Icon />
        </div>

        {name}
      </a>
    </div>
  );
}

export default Link;
