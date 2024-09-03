"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";

export default function Sidebar() {
  const path = usePathname();

  return (
    <aside className="sm:hidden">
      <div className="fixed bottom-0 left-0 right-0 top-0 h-full w-full bg-overlay z-10"></div>
      <div className="px-5 py-8 bg-white w-1/2 absolute top-0 bottom-0 right-0 z-20">
        <div className="flex justify-end pb-4">
            <AiOutlineClose className="cursor-pointer" color="red" />
        </div>
        <div className="flex flex-col gap-y-5">
          <ul className="flex flex-col gap-y-2 md:gap-x-4">
            <li>
              <Link
                className={
                  path === "/services"
                    ? " font-medium text-[#219AAD]"
                    : "text-black font-normal"
                }
                href={"/services"}
              >
                services
              </Link>
            </li>
            <li>
              <Link
                className={
                  path === "/about"
                    ? " font-medium text-[#219AAD]"
                    : "text-black font-normal hover:cursor-pointer"
                }
                href={"/about"}
              >
                about
              </Link>
            </li>
            <li>
              <Link
                className={
                  path === "/contact"
                    ? " font-medium text-[#219AAD]"
                    : "text-black font-normal"
                }
                href={"/contact"}
              >
                contact
              </Link>
            </li>
          </ul>

          <button className="flex py-2 px-3 bg-[#219AAD] text-white opacity-90 hover:opacity-100 transition ease-in-out justify-center text-sm">
            Download Partner Plan
          </button>
        </div>
      </div>
    </aside>
  );
}
