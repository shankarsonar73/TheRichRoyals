import React from "react";
import Section from "./Section";
import { socials } from "../constants";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">

      <div className="container text-lg sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
          <h3>Contact Us</h3>
          <p className="text-white">Email: <a href="mailto:therichroyals@gmail.com" className="text-white">therichroyals@gmail.com</a></p>
          <p className="text-white">Phone: <a href="tel:+918668417664" className="text-white">+91-86684-17664</a></p>
        </div>

      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
          <p className="caption text-n-4 lg:block">
        The Rich Royals Founder & CEO  <a href="https://www.instagram.com/smit.bagul/" class="tex-n-4 text-white"> Sumit Bagul</a> <br />
        © Copyright TheRichRoyals.com 2022 | Design by  
        <a href="https://www.spotlightfreelance.me/" class="tex-n-4 text-white"> Spotlight Freelance</a>
        </p>


        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
            >
              <img src={item.iconUrl} width={16} height={16} alt={item.title} />
            </a>
          ))}
        </ul>
      </div>
      

    </Section>
  );
};

export default Footer;
