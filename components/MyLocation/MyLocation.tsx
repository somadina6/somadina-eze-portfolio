import { globeIcon } from "@/public/icons/globeIcon";
import React from "react";

const MyLocation = () => {
  return (
    <section className="divbg col-span-12 md:col-span-4 row-span-1 md:row-span-1 gap-1 md:gap-2 items-center flex flex-col ">
      {globeIcon}
      <h2 className="myh2 text-center">
        Based in Saint John, New Brunswick, Canada
      </h2>
    </section>
  );
};

export default MyLocation;
