import Image from "next/image";

export default function ContactEmail() {
  return (
    <section
      id="contact"
      className="divbg col-span-6 md:col-span-4 row-span-1 md:row-span-1 flex flex-col items-center gap-1 "
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
        className="bg-blue rounded-full md:rounded-3xl px-2 md:px-3 py-1 md:py-2 flex items-center text-center text-sm justify-center md:text-lg hover:opacity-90 mt-2"
      >
        <p className="hidden md:block">Contact Me</p>
        <span className="flex md:hidden w-[20px] h-[20px] items-center justify-center">
          <Image
            src="/icons/message.png"
            width={48}
            height={48}
            alt="message icon"
          />
        </span>
      </a>
    </section>
  );
}
