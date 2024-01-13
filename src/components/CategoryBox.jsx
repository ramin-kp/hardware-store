import React from "react";
import { Link } from "react-router-dom";

function CategoryBox(props) {
  const { text, image, slug, quantity } = props;
  return (
    <Link
      to={`category/${slug}`}
      className="relative inline-block w-[300px] h-[495px] overflow-hidden group "
    >
      <img
        src={image}
        alt={text}
        className=" w-full h-full hover:scale-110 transition-all duration-500"
      />
      <span className="absolute bottom-5 right-5 group-hover:bottom-12  inline-block text-white font-Dana-Medium text-xl transition-all duration-600">
        {text}
      </span>
      <span className="absolute opacity-0 group-hover:opacity-100 -bottom-6 right-5 group-hover:bottom-5 group-hover:right-5 inline-block text-white/80 font-Dana text-base transition-all duration-600">
       {quantity} محصول 
      </span>
    </Link>
  );
}

export default CategoryBox;
