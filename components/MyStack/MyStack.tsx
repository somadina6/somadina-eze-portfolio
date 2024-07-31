import { myStack } from "@/constants/mystack";
import Image from "next/image";
const MyStack = () => {
  return (
    <section className="divbg col-span-12 md:col-span-6 row-span-2 md:row-span-3 gap-1 md:gap-2 flex flex-col ">
      <h2 className="myh2 uppercase md:capitalize font-bold">My Stack</h2>
      <ul className="w-full flex gap-4 md:gap-6 flex-wrap items-center justify-center p-1">
        {myStack.map(({ name, icon }) => (
          <li key={name} className="flex flex-col items-center flex-initial">
            <span className="img1 hover:scale-125 transition">
              <Image src={icon} width={50} height={50} alt={name} />
            </span>
            <p className="hidden md:block text-sm md:text-lg">{name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MyStack;
