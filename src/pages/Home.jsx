import React from "react";
import { Link } from "react-router-dom";
import menu from "../images/menu.svg";
import avatar from "../images/avatar.png";

export default function Home() {
  return (
    <div>
      <nav>
        <div className="p-5 text-right flex items-center justify-end md:hidden">
          <img src={menu} alt="menu" />
        </div>

        <div className="hidden md:flex items-center justify-end pt-[27px] pb-[27px] pr-[60px] gap-[33px] text-xl font-medium">
          <Link to="/works">Works</Link>
          <Link to="/works">Blog</Link>
          <Link to="/works">Contact</Link>
        </div>
      </nav>

      <div className="md:px-[148px]">
        <section className="mt-6 flex flex-col items-center justify-between md:flex-row-reverse md:mt-[93px] pb-[58px] md:pb-[71px]">
          <div className="">
            <img className="md:w-[243px] md:h-[243px]" src={avatar} alt="" />
          </div>

          <div className="pt-6 flex flex-col items-center md:items-start md:max-w-[510px]">
            <p className="text-[32px] font-bold leading-10 text-dark text-center pl-[32px] pr-[32px] md:text-left md:p-0 md:text-[44px] md:leading-[60px] md:w-[506px]">
              Hi, I am John,
              <br />
              Creative Technologist
            </p>
            <p className="text-base text-dark max-w-max text-center px-6 mt-[21px] md:text-left md:px-0 md:mt-10">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
            <a
              className="mt-[27px] font-medium bg-primary text-xl rounded-sm px-[21px] py-[9px] text-white md:mt-[38px]"
              href=""
            >
              Download Resume
            </a>
          </div>
        </section>

        <section className="border border-black bg-[#EDF7FA]">
          <div className="flex items-center justify-center md:justify-between">
            <p className="h-[60px] flex items-center justify-center text-[18px] leading-[60px]">Recent posts</p>
            <a className="hidden md:flex text-secondary" href="">
              View all
            </a>
          </div>

          <div className="px-[11px] md:px-0">
            <div className="bg-white rounded pl-[19px] pt-[21px]">
              <p className="text-[22px] leading-[30px] md:leading-normal font-bold md:text-[26px]">Making a design system from scratch</p>
              <div className="mt-[13px] md:mt-[17px] flex text-[16px]">
                <p className="mr-6">12 Feb 2000</p>
                <p className="mr-6">|</p>
                <p>Design, Pattern</p>
              </div>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>

            <div className="bg-white">
              <p>Creating pixel perfect icons in Figma</p>
              <div>
                <p>12 Feb 2000</p>
                <p>|</p>
                <p>Figma, Icon Design</p>
              </div>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
