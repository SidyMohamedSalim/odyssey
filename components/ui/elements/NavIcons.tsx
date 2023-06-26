import { BedDouble } from "lucide-react";
import React from "react";

const NavIcons = () => {
  return (
    <div className="flex justify-between px-3 py-3 border border-black rounded-lg shadow-md items-center  my-4 hover:bg-slate-900 hover:text-white">
      <h1 className="mr-28 font-medium text-sm">Hotels</h1>
      <div>
        <BedDouble />
      </div>
    </div>
  );
};

export default NavIcons;
