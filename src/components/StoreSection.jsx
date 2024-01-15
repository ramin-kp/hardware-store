import React from "react";
import { Link } from "react-router-dom";

function StoreSection() {
  return (
    <section className="store-section__bg mt-20">
      <div className="flex items-center justify-between gap-x-20">
        <div className="grow shrink-0">
          <img
            src="/image/content/black-electronics-pc.png"
            alt="black-electronics-pc"
          />
        </div>
        <div className="w-2/3 pl-[200px]">
          <h2 className="font-Dana-UltraLight text-5xl">سرعت بالا</h2>
          <h1 className="my-4 font-Dana-Bold text-4xl">
            با خیال راحت بازی کنید
          </h1>
          <p className="text-white/80">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
            در شصت و سه درصد گذشته، حال و آینده شناخت.
          </p>
          <Link
            to="/store"
            className="inline-block px-2.5 py-2 mt-5 bg-indigo-500 hover:bg-indigo-600  transition-all duration-200"
          >
            فروشگاه
          </Link>
        </div>
      </div>
    </section>
  );
}

export default StoreSection;
