import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

function LatestEventsSection({ data }) {
  console.log(data);
  return (
    <section className="mt-20 text-center space-y-5">
      <h2 className="font-Dana-UltraLight text-base text-white/80">
        بیشتر بدانید
      </h2>
      <h1 className="font-Dana-Bold text-4xl">آخرین رویدادها</h1>
      <p className="text-white/80">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است.
      </p>
      <div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          // pagination={{
          //   clickable: true,
          // }}
          navigation={true}
          modules={[Pagination]}
          className="mySwiper"
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <Link to={`/blogs/${item.slug}`}>
                <div className="relative overflow-hidden group">
                  <span className="absolute right-2 top-2 inline-block p-2 text-center font-Dana-Medium text-lg bg-black">
                    {item.createdAt}
                  </span>
                  <img
                    src={`/image/content/${item.image}`}
                    alt={item.title}
                    className="w-full h-[278px] group-hover:scale-110 transition-all duration-500 "
                  />
                  <span className="opacity-0 absolute inset-0 w-full h-full bg-black/30 group-hover:opacity-100 transition-all duration-500"></span>
                </div>
                <h1 className="my-5 font-Dana-Bold text-2xl text-center">
                  {item.title}
                </h1>
                <span>{item.userId.name}</span>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default LatestEventsSection;
