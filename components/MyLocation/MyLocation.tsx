import Image from "next/image";
import React from "react";

const MyLocation = () => {
  return (
    <section className="divbg col-span-6 md:col-span-4 row-span-1 md:row-span-1 gap-1 items-center flex flex-col ">
      <div className="img1">
        <Image
          src="/icons/globeIcon.svg"
          width={50}
          height={50}
          alt="globe icon"
        />
      </div>
      <h2 className="myh2 text-center">
        Based in Saint John, New Brunswick, Canada
      </h2>
    </section>
  );
};

export default MyLocation;
