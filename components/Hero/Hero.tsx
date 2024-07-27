import { getHeroData } from "@/sanity/lib/api";
import Image from "next/image";

export default async function Hero() {
  const hero = await getHeroData();

  const name = hero?.name || "Somadina Eze";
  const bio = hero?.bio;
  const profileImageUrl = hero?.imageUrl || "/profile.jpeg";

  return (
    <section
      id="hero"
      className="divbg col-span-12 md:col-span-8 row-span-1 md:row-span-2 gap-2 lg:gap-5 items-center "
    >
      <div className="flex flex-col items-center min-w-[100px] md:min-w-[200px] lg:min-w-[30px]">
        <div
          id="profile_image_div"
          className="rounded-full overflow-hidden w-[40px] h-[40px] md:w-[100px] md:h-[100px] mb-1 md:mb-2"
        >
          <Image src={profileImageUrl} width={150} height={150} alt={name} />
        </div>
        <h1 className="text-lg md:text-2xl lg:text-5xl font-[500]">{name}</h1>
      </div>

      <h2 className="myh2 lg:flex-[1] mt-2">
        I am a Full Stack Engineer currently shipping features at{" "}
        <span className="text-blue">
          <a href="https://www.vervear.com" target="_blank">
            VerveAR.
          </a>
        </span>
      </h2>
    </section>
  );
}
