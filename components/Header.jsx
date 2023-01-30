import Image from "next/image";
import React from "react";

function Header() {
  return (
    <header className="mt-4 text-center flex flex-col items-center">
      <Image
        src="https://www.quentin-dasilva.fr/assets/img/testimonials/1.jpg"
        alt=""
        height={200}
        width={200}
        className="rounded-full h-[6em] w-[6em] border border-white shadow-custom"
      />
      <h1 className="inline-block text-[0.8em] font-bold rounded-[1em] bg-[#00000036] px-[0.6em] py-[0.3em] mt-2 text-white border border-[#fffa]">
        Quentin DA SILVA
      </h1>
    </header>
  );
}

export default Header;
