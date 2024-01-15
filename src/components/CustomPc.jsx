import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

// import required modules
import { EffectCube, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
function CustomPc() {
  return (
    <section className="flex items-center justify-between gap-x-12 mt-10 pl-11">
      <div className="text-start">
        <h1 className=" font-Dana-Bold text-6xl">سیستم خودت رو بساز</h1>
        <p className="font-Dana text-xl/10 mt-12">
          در این بخش میتونید سیستم کاستوم و مورد نظری که میخواهید رو با انواع
          برند ها کاستومایز کنید
        </p>
        <div className="flex items-center justify-between mt-12">
          <div className="flex items-center justify-between gap-5">
            <img src="/image/content/ram.png" alt="ram" />
            <div>
              <h4 className="font-bold text-lg">10+ inch GPU</h4>
              <p className="text-base">Mauris blandit aliquet</p>
            </div>
          </div>
          <div className="flex items-center justify-between gap-5">
            <img src="/image/content/ram.png" alt="ram" />
            <div>
              <h4 className="font-bold text-lg">8 RAM SLOTS</h4>
              <p className="text-base">Cras ultricies ligula sed</p>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <Link className="inline-block bg-indigo-500 hover:bg-indigo-600 px-5 py-3 ml-5 transition-all duration-200">
            مرحله بعدی
          </Link>
          <Link className="inline-block border-2 border-white/60 hover:border-white px-5 py-3 transition-all duration-200">
            انتخاب کیس
          </Link>
        </div>
      </div>
      <div className="w-[584px] h-[586px]">
        <Swiper
          effect={"cube"}
          grabCursor={true}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          modules={[EffectCube, Pagination]}
          loop={true}
          loopPreventsSliding={true}
          className="mySwiper w-full h-full"
        >
          <SwiperSlide>
            <img src="/image/content/custom-1.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/image/content/custom-2.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/image/content/custom-3.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/image/content/custom-4.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/image/content/custom-5.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/image/content/custom-6.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/image/content/custom-7.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/image/content/custom-8.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/image/content/custom-9.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/image/content/custom-10.png" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default CustomPc;
