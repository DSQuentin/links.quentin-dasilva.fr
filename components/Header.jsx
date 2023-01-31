import Image from "next/image";
import React from "react";

function Header() {
  return (
    <header className="mt-6 text-center flex flex-col items-center">
      {/*       <Image
        src="https://www.quentin-dasilva.fr/assets/img/testimonials/1.jpg"
        alt="background space"
        height={200}
        width={200}
        className="rounded-full lg:h-[12em] lg:w-[12em] h-[6em] w-[6em] border border-white shadow-custom"
      /> */}
      <h1 className="inline-block lg:text-3xl text-xl font-bold rounded-[1em] bg-[#000000b0] px-[0.6em] py-[0.3em] mt-2 text-white border border-[#fffa]">
        Quentin Da Silva
      </h1>
      <h2 className="inline-block text-[0.8em] font-semibold text-white mt-2">
        Mes réseaux
      </h2>
    </header>
  );
}

export default Header;
