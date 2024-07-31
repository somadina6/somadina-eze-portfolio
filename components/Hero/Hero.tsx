import { getHeroData } from "@/sanity/lib/api";
import Image from "next/image";
import ProfileLinks from "./ProfileLinks";

export default async function Hero() {
  const hero = await getHeroData();

  const name = hero?.name || "Somadina Eze";
  const currentCompanyName = hero?.current_company?.company_name || "VerveAR";
  const currentCompanyUrl =
    hero?.current_company?.company_url || "https://www.vervear.com";
  const profileImageUrl = hero?.imageUrl || "/profile.jpeg";
  const profileLinks = hero?.socialLinks;

  return (
    <section
      id="hero"
      className="divbg col-span-12 md:col-span-8 row-span-2 md:row-span-2 gap-1 md:gap-2 items-center "
    >
      <div className="flex flex-col items-center min-w-[100px] md:min-w-[200px] lg:min-w-[30px]">
        <div
          id="profile_image_div"
          className="rounded-full overflow-hidden w-[50px] h-[50px] md:w-[160px] md:h-[160px] mb-1 md:mb-2"
        >
          <Image src={profileImageUrl} width={160} height={160} alt={name} />
        </div>
        <ProfileLinks profileLinks={profileLinks} />
        <h1 className="myh1">{name}</h1>
      </div>

      <h2 className="myh2 lg:flex-[1]">
        I am a Full Stack Engineer currently shipping features at{" "}
        <span className="text-blue">
          <a href={currentCompanyUrl} target="_blank">
            {currentCompanyName}.
          </a>
        </span>
      </h2>
    </section>
  );
}
