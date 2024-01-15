import React from "react";
import { Link } from "react-router-dom";

function ReadyPcsBox(props) {
  const { name, price, infos, special } = props;
  return (
    <div className="hover:-translate-y-5 transition-all duration-500">
      <h1 className="my-8 text-center font-bold text-xl">{name}</h1>
      <div
        className={`relative p-5 border-2 ${
          special ? "border-indigo-500" : "border-white/60"
        }  overflow-hidden`}
      >
        {special && (
          <span className="absolute -left-14 top-3 -rotate-45 inline-block w-[150px]  bg-red-500 text-white text-center">
            ویژه
          </span>
        )}
        <h2 className="py-5 text-center font-bold text-2xl">
          {price.toLocaleString()} تومان
        </h2>
        <div className="flex flex-col child:py-5 divide-y divide-white/30 text-center">
          {infos.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <div className="flex-center w-full pt-2 border-t border-white/30">
          <Link
            to="#"
            className="inline-block px-2.5 py-2 mt-5 bg-indigo-500 hover:bg-indigo-600  transition-all duration-200"
          >
            خرید کنید
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ReadyPcsBox;
