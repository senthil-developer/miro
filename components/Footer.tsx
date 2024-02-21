import InfiniteScroll from "./InfiniteScroll";
import Link from "next/link";
import Image from "next/image";

import { IoIosMail, IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import { ReactElement } from "react";

type linksTypes = {
  title: string;
  link: string;
  logo: ReactElement;
}[];

const FooterMainPage = () => {
  const links: linksTypes = [
    {
      title: "github",
      link: "https://github.com/senthil-developer/miro",
      logo: <IoLogoGithub size={40} color="black" />,
    },
    {
      title: "linkedin",
      link: "https://linkedin.com/in/senthil-developer",
      logo: <IoLogoLinkedin size={40} className="rounded-lg text-blue-600" />,
    },
    {
      title: "Email",
      link: "mailto:senthildeveloper4@gmail.com",
      logo: <IoIosMail size={40} />,
    },
  ];
  return (
    <>
      <h3 className="text-[36px]">Join our 60M+ users today</h3>
      <p className="text-lg">
        Join thousands of teams collaborating and doing their best work on Miro.
      </p>
      <InfiniteScroll />
      <div>
        <div className="flex-center gap-5">
          {links.map((link) => (
            <Link href={link.link} key={link.title} target="_blank">
              {link.logo}
            </Link>
          ))}
        </div>
        <p className="text-center mt-3">
          &copy; 2024 Miro. All rights reserved.
        </p>
      </div>
    </>
  );
};
export default FooterMainPage;
