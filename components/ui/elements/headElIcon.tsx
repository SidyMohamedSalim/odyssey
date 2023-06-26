import { Heart } from "lucide-react";
import React from "react";

const HeadElIcon = () => {
  return (
    <div className="flex cursor-pointer items-center px-5 py-3 rounded-3xl hover:bg-slate-100">
      <Heart className="hover:mr-4 mr-2" />
      <h1>Voyages</h1>
    </div>
  );
};

export default HeadElIcon;
