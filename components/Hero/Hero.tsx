import { getHeroData } from "@/sanity/lib/api";
import Image from "next/image";
import ProfileLinks from "./ProfileLinks";
import { urlFor } from "@/sanity/lib/image";

export default async function Hero() {
  const hero = await getHeroData();

  const name = hero?.name || "Somadina Eze";
  const currentCompanyName = hero?.current_company?.company_name || "VerveAR";
  const currentCompanyUrl =
    hero?.current_company?.company_url || "https://www.vervear.com";
  // const profileImageUrl = hero?.imageUrl || "/profile.jpeg";
  const profileImageUrl = hero?.profileImage
    ? urlFor(hero?.profileImage).sharpen(20).url()
    : "/profile.jpeg";

  return (
    <section
      id="hero"
      className="divbg col-span-12 gap-1 md:gap-2 flex flex-col items-center"
    >
      <div className="flex flex-col items-center min-w-[100px] md:min-w-[200px] lg:min-w-[30px]">
        <div
          id="profile_image_div"
          className="rounded-full overflow-hidden w-[50px] h-[50px] md:w-[220px] md:h-[220px] mb-1 md:mb-2"
        >
          <Image src={profileImageUrl} width={220} height={220} alt={name} />
        </div>
        <h1 className="myh1">{name}</h1>
      </div>

      <h2 className="myh2 text-center">
        Full Stack Engineer currently shipping features at{" "}
        <span className="text-blue">
          <a href={currentCompanyUrl} target="_blank">
            {currentCompanyName}
          </a>
        </span>
      </h2>
      <ProfileLinks />
    </section>
  );
}
