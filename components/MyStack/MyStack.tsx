import { myStack } from "@/constants/mystack";
import Image from "next/image";
import "./mystack.styles.css";

const MyStack = () => {
  return (
    <section className="divbg col-span-12 gap-1 md:gap-2 flex flex-col ">
      <h2 className="myh1 uppercase md:capitalize font-bold text-center lg:text-[23px]">
        My Stack
      </h2>
      <ul className="w-full flex gap-4 md:gap-6 flex-wrap items-center justify-center p-1">
        {myStack.map(({ name, icon }, index) => (
          <li
            key={name}
            className={`flex flex-col items-center flex-initial gap-1 md:gap-2 relative group img-container img-${index}`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="relative flex flex-col items-center">
              <span className="img1 hover:scale-125 transition">
                <Image src={icon} width={50} height={50} alt={name} />
              </span>
              <p className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full opacity-0 group-hover:opacity-100 transition-opacity bg-white text-black text-xs md:text-sm p-1 rounded shadow-md">
                {name}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MyStack;
