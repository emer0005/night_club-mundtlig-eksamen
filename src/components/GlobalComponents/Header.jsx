"use client";
import Image from "next/image";
import { IoIosMenu } from "react-icons/io";
import { ImCross } from "react-icons/im";
import Link from "next/link";
import { useEffect } from "react";
import { textSplitTargets } from "@/app/textSplit.js";
import { isHover } from "@/app/textSplit.js";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  useEffect(() => {
    textSplitTargets("[data-split]");
    isHover();
  }, []);

  return (
    <header className="relative border_line sticky top-0 z-50 bg-black ">
      <div className="absolute inset-0 pointer-events-none">
        <div className="corner-triangle-left" />
        <div className="corner-triangle-right" />
      </div>
      <div className="mx-auto max-w-[80rem] flex justify-between items-center py-2 px-10 relative">
        <Link href={"/"}>
          <Image src="/assets/Logo.png" width={184} height={45} alt="logo" />
        </Link>

        <nav>
          <div id="menu" popover="auto" className="menu-wrapper">
            <button popoverTarget="menu" className="menu-btn close-btn">
              <ImCross className="text-white w-8 h-8" />
            </button>

            <ul className="container">
              <li className={`${pathname === "/" ? "active" : ""}`}>
                <Link href="/" data-split>
                  Home
                </Link>
              </li>
              <li className={`${pathname === "/Events" ? "active" : ""}`}>
                <Link href="/Events" data-split>
                  Events
                </Link>
              </li>
              <li className={`${pathname === "/BookTable" ? "active" : ""}`}>
                <Link href="/BookTable" data-split>
                  Book table
                </Link>
              </li>
              <li className={`${pathname === "/ContactUs" ? "active" : ""}`}>
                <Link href="/ContactUs" data-split>
                  Contact us
                </Link>
              </li>
              <div className="animate"></div>
            </ul>
          </div>

          <button popoverTarget="menu" popoverTargetaction="toggle" className="menu-btn open-btn">
            <IoIosMenu className="text-white w-12 h-12" />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
