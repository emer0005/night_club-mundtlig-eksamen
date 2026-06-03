"use client";
import Image from "next/image";
import NewsContainer from "./NewsContainer";
import PostContainer from "./PostContainer";
import SocialContainer from "./SocialContainer";
const Footer = () => {
  return (
    <section className="footer_bg">
      <div className="mt-[7rem] max-w-[80rem] mx-auto p-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="space-y-8">
          <Image className="mx-auto lg:mx-0" src="/assets/icon/Logo_main.svg" alt="logo" width={183} height={43} />

          <div className="text-center lg:text-left">
            <h4>Location</h4>
            <h5>Kompagnistræde 278</h5>
            <h5>1265 København K</h5>
          </div>

          <div className="text-center lg:text-left">
            <h4>Opening Hours</h4>
            <h5>WED - THU 10:30 PM TO 3 AM</h5>
            <h5>SAT - SUN: 11 PM TO 5 AM</h5>
          </div>
        </div>

        <div className="hidden lg:block">
          <h3 style={{ color: "var(--color-surface-highlight-primary)" }}>News</h3>
          <NewsContainer />
        </div>

        <div className="hidden lg:block">
          <h3 style={{ color: "var(--color-surface-highlight-primary)" }}>Recent posts</h3>
          <PostContainer />
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:justify-between mt-[7rem]">
        <SocialContainer />
        <p className="text-center md:text-center md:order-first md:self-end mt-[5rem]">Night Club - All Rights Reserved</p>
        <p className="text-center md:text-right md:self-end mt-[1rem]">Copyright © NightClub</p>
      </div>
      </div>
    </section>
  );
};

export default Footer;
