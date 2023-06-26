import Image from "next/image";
import React from "react";

type blocAProps = {
  title: string;
  image: string;
};
const BlocA = ({ title, image }: blocAProps) => {
  return (
    <div className="bg-red-500 relative  my-4">
      <div className="opacity-90">
        <Image
          src={image}
          alt=""
          className="w-64 h-64"
          width={600}
          height={600}
        />
        <h1 className="absolute  w-full z-10 font-extrabold bg text-xl  bottom-0 p-2 text-white before:w-full before:h-9 before:bg-black before:absolute before:left-0 before:opacity-30 before:-z-10">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default BlocA;
