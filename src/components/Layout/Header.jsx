import React from "react";
import { Link } from "react-router-dom";
import SvgIcons from "../assets/SvgIcons";

function Header() {
  return (
    <header>
      <div className="flex items-center justify-between mx-[53px] mt-2.5 child:text-sm">
        <ul className="flex flex-row-reverse items-center divide-x divide-white/25 child:px-2.5">
          <li>FREE SHIPPING FOR ALL ORDERS OF $150</li>
          <Link to="#">سوالات متداول</Link>
          <Link to="#">تماس با ما</Link>
          <Link to="#">خبرنامه</Link>
        </ul>
        <div className="flex flex-row-reverse items-center divide-x px-4">
          <ul className="flex flex-row-reverse items-center child:px-2.5 divide-x">
            <Link to="#">سوالات متداول</Link>
            <Link to="#">تماس با ما</Link>
            <Link to="#">خبرنامه</Link>
          </ul>
          <div className="flex items-center gap-x-2.5 px-4">
            <span>
              <img src="/image/content/Facebook.png" alt="" />
            </span>
            <span>
              <img src="/image/content/Twitter.png" alt="" />
            </span>
            <span>
              <img src="/image/content/Pinterest.png" alt="" />
            </span>
            <span>
              <img src="/image/content/Linkedin.png" alt="" />
            </span>
            <span>
              <img src="/image/content/Telegram.png" alt="" />
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-between mx-[53px] mt-11">
        <div className="flex items-start gap-x-1">
          <p className="font-Dana-Bold text-xl">HardwareStore</p>
          <img src="/image/content/logo.png" alt="logo" className="w-6 h-6" />
        </div>
        <div>
          <ul className="flex items-center gap-x-5 child:flex child:items-center child:gap-x-0.5 hover:child:text-white/80 font-Dana-Bold text-xs">
            <li>
              <Link to="#">خانه</Link>
            </li>
            <li>
              <Link to="#">بلاگ</Link>
              <svg className="w-2 h-2 text-white">
                <use href="#chevron-down"></use>
              </svg>
            </li>
            <li>
              <Link to="#">صفحات</Link>
              <svg className="w-2 h-2 text-white">
                <use href="#chevron-down"></use>
              </svg>
            </li>
            <li>
              <Link to="#">فروشگاه</Link>
              <svg className="w-2 h-2 text-white">
                <use href="#chevron-down"></use>
              </svg>
            </li>
          </ul>
        </div>
        <ul className="flex items-center gap-x-5 text-sm hover:child:cursor-pointer text-white hover:child:text-white/80">
          <li className="font-Dana-Bold">ورود / ثبت نام</li>
          <li>
            <svg className="w-5 h-5">
              <use href="#search"></use>
            </svg>
          </li>
          <li>
            <svg className="w-5 h-5 text-white">
              <use href="#comparison"></use>
            </svg>
          </li>
          <li>
            <svg className="w-5 h-5 text-white">
              <use href="#heart"></use>
            </svg>
          </li>
          <li>
            <svg className="w-5 h-5 text-white">
              <use href="#shopping-cart"></use>
            </svg>
          </li>
        </ul>
        <SvgIcons />
      </div>
    </header>
  );
}

export default Header;
