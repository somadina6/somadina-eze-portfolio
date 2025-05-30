import Image from "next/image";

export default function ContactEmail() {
  return (
    <section
      id="contact"
      className="divbg col-span-12 flex flex-col items-center gap-1 mt-4"
    >
      <div className="img1">
        <Image
          src="/icons/projectIcon.svg"
          width={50}
          height={50}
          alt="project icon"
        />
      </div>
      <h2 className="myh2 text-center">Have a project in mind?</h2>
      <a
        href="mailto:somadina6@gmail.com"
        className="bg-blue rounded-full md:rounded-lg px-2 py-1 md:px-4 md:py-2 flex items-center text-center text-sm justify-center md:text-lg hover:opacity-90 mt-2"
      >
        <p className="hidden md:block">Contact Me</p>
        <span className="flex md:hidden w-[20px] h-[20px] items-center justify-center">
          <Image
            src="/icons/email1.png"
            width={48}
            height={48}
            alt="message icon"
          />
        </span>
      </a>
    </section>
  );
}
