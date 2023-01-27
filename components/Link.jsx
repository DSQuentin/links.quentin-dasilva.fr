import React from "react";

function Link({ alt, name, url, Icon }) {
  return (
    <li className="flex flex-col my-2">
      <a
        href={url}
        target="_blank"
        rel="nofollow noopener noreferrer"
        className="flex justify-center items-center p-4 space-x-4 text-gray-700 bg-white rounded-lg shadow-sm hover:bg-gray-50 max-w-md"
      >
        <Icon />

        {name}
      </a>
    </li>
  );
}

export default Link;
