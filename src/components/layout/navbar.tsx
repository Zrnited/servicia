"use client";
import Image from "next/image";
import Link from "next/link";
import headerLogo from "../../assets/images/header_logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { usePathname } from "next/navigation";

export default function Page() {
  const path = usePathname();
  console.log(path);

  return (
    <header className="bg-[#E3F2F4] p-3">
      <nav className="flex flex-row justify-between items-center md:justify-around">
        <div className="sm:flex sm:flex-row sm:gap-x-5 items-center md:gap-x-10">
          <Image
            src={headerLogo}
            alt="header-logo"
            priority
            className="w-[120px] md:w-[150px]"
          />
          {/* hidden in mobile mode */}
          <ul className="hidden sm:flex flex-row gap-x-2 md:gap-x-4">
            <li>
              <Link className={path === "/services" ? " font-medium text-[#219AAD]" : "text-black font-normal"} href={"/services"}>
                services
              </Link>
            </li>
            <li>
              <Link className={path === "/about" ? " font-medium text-[#219AAD]" : "text-black font-normal"} href={"/about"}>about</Link>
            </li>
            <li>
              <Link className={path === "/contact" ? " font-medium text-[#219AAD]" : "text-black font-normal"} href={"/contact"}>contact</Link>
            </li>
          </ul>
        </div>

        {/* hidden in mobile mode */}
        <button className="hidden sm:flex py-2 px-3 bg-[#219AAD] text-white opacity-90 hover:opacity-100 transition ease-in-out justify-center md:text-sm lg:w-[193px]">
          Download Partner Plan
        </button>

        {/* hidden leaving mobile mode */}
        <div className="flex sm:hidden">
          <button className="text-lg">
            <GiHamburgerMenu />
          </button>
        </div>
      </nav>
    </header>
  );
}
