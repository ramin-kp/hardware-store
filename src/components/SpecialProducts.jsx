import React from "react";
import { Link } from "react-router-dom";

function SpecialProducts(props) {
  console.log(props);
  const { name, image, price, slug, offs } = props;
  return (
    <div className="w-[293px] group">
      <div className="relative overflow-hidden">
        {/* lef-box */}
        <div className="absolute -left-8 group-hover:left-2 top-2  child:my-3 bg-black w-10 text-white transition-all duration-500">
          <div className="rel6tiv6 child:hover:opacity-100 cursor-pointer">
            <svg className="w-7 h-7 mx-auto text-white hover:text-white/80">
              <use href="#comparison"></use>
            </svg>
            <span className="inline-block absolute top-0 left-12 px-2 py-1 bg-black/50 opacity-0 text-sm transition-all duration-500 card-before">
              مقایسه
            </span>
          </div>
          <div className="relative child:hover:opacity-100 cursor-pointer">
            <svg className="w-6 h-6 mx-auto text-white hover:text-white/80">
              <use href="#search"></use>
            </svg>
            <span className="inline-block absolute top-0 left-12 px-2 py-1 bg-black/50 opacity-0 text-sm transition-all duration-500 card-before">
              جستجو
            </span>
          </div>
          <div className="relative child:hover:opacity-100 cursor-pointer">
            <svg className="w-6 h-6 mx-auto text-white hover:text-white/80">
              <use href="#heart"></use>
            </svg>
            <span className="inline-block absolute top-0 left-12 w-[200px] px-2 py-1 bg-black/50 text-sm opacity-0 transition-all duration-500 card-before">
              افزودن به علاقه مندی ها
            </span>
          </div>
        </div>
        <Link to={`products/${slug}`}>
          {offs && (
            <span className="absolute top-2 right-2 flex-center w-12 h-12 rounded-full bg-indigo-600 text-white">
              {offs}
            </span>
          )}
          <img src={image} alt={name} />
          {/* bottom-box */}
          <div className="absolute bottom-0 left-0 w-full h-10 pt-2 bg-indigo-500/75 opacity-0  translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 text-white/80 transition-all duration-300 overflow-hidden">
            <span className="inline-block hover:-translate-y-10 transition-all duration-500 group">
              افزودن به سبد خرید
              <span className="inline-block w-full mx-auto translate-y-5 transition-all duration-500">
                <svg className="w-5 h-5 text-white mx-auto ">
                  <use href="#shopping-cart"></use>
                </svg>
              </span>
            </span>
          </div>
        </Link>
      </div>
      <Link to={`products/${slug}`} className=" child:py-2.5">
        <h4 className="font-Dana-Medium text-base">{name}</h4>
        <span className="text-indigo-500 text-sm">
          {price.toLocaleString()}
          تومان
        </span>
      </Link>
    </div>
  );
}

export default SpecialProducts;
