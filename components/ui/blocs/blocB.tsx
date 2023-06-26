import { Heart } from "lucide-react";
import Image from "next/image";
import React from "react";

const BlocB = () => {
  return (
    <div className="relative mx-3 w-64 my-4">
      <div className="absolute top-2 right-2 text-xl flex items-center justify-center bg-white px-2 w-8 h-8 rounded-full ">
        <Heart />
      </div>
      {/* images */}

      <div>
        <Image
          src="/photo2.jpg"
          alt=""
          className="w-64 h-64"
          width={600}
          height={600}
        />
      </div>
      <div>
        <h1 className="font-semibold hover:decoration-black hover:underline leading-5 ">
          Visite historique d&apos;une journée à Meknès Volubilis et Moulay
          Idriss
        </h1>
        {/* Notes */}
        <div className="flex">
          {/* avis */}
          <div className="flex justify-evenly gap-1 text-sm">
            <p>⭐</p>
            <p>⭐</p>
            <p>⭐</p>
            <p>⭐</p>
            <p>⭐</p>
          </div>
          {/* Nombre de personnes qui ont noter */}
          <p className="mx-2 font-light">109</p>
        </div>
        {/* Prix */}
        <div>
          <p className="font-medium">á partir de 321 MAD par adulte</p>
        </div>
      </div>
    </div>
  );
};

export default BlocB;
