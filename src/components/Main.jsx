import React, { useRef } from "react";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Main() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 50)}s`;
  };
  return (
    <div className="flex flex-col">
      <Header />
      <div className="w-full h-screen">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className=" w-full swiper-content swiper-bg"
        >
          <SwiperSlide>
            <div className="flex items-start justify-between h-full mx-[250px]">
              <div className="h-full scale-135 -translate-y-[95px]">
                <img
                  src="/image/content/mainbord.png"
                  alt=""
                  className=" h-full  object-cover"
                  data-aos="fade-left"
                  data-aos-duration="2000"
                />
              </div>

              <div
                className="flex flex-col items-center justify-center w-[600px] h-full grow"
                data-aos="fade-up"
                data-aos-delay="900"
                data-aos-duration="2000"
              >
                <h1 className="w-full font-Dana-UltraLight text-white text-center text-7xl tracking-[.25em] leading-tight">
                  Asus Rog
                </h1>
                <h1 className="w-full font-bold text-white text-center text-7xl leading-tight">
                  MAXIMUMS IX
                </h1>
                <p className="w-full text-center line-clamp-2 leading-normal">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Autem iste iusto, velit, laborum ratione possimus assumenda
                  quia blanditiis suscipit consequatur odit aperiam temporibus
                  quae architecto sint ducimus hic illum. Asperiores.
                </p>
                <div className="flex-center gap-x-5 mt-2.5">
                  <button className="inline-flex justify-center items-center px-4 py-3 bg-indigo-500 hover:bg-indigo-600 text-white duration-100 font-bold text-sm">
                    خرید محصول
                  </button>
                  <h1 className="text-2xl">20,000,000 تومان</h1>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-start justify-between h-full">
              <div
                className="flex flex-col items-end justify-center grow w-[800px] h-full "
                data-aos="fade-up"
                data-aos-delay="900"
                data-aos-duration="2000"
              >
                <h1 className="w-full font-Dana-UltraLight text-white text-left text-7xl tracking-[.25em] leading-tight">
                  Tensor Corse
                </h1>
                <h1 className="w-full font-bold text-white text-left text-7xl leading-tight">
                  NVIDIA TITAN V
                </h1>
                <p className="w-3/4 text-left line-clamp-2 leading-normal">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Autem iste iusto, velit, laborum ratione possimus assumenda
                  quia blanditiis suscipit consequatur odit aperiam temporibus
                  quae architecto sint ducimus hic illum. Asperiores.
                </p>
                <div className="flex-center gap-x-5 mt-2.5 overflow-hidden">
                  <button className="inline-flex justify-center items-center px-4 py-3 bg-indigo-500 hover:bg-indigo-600 text-white duration-100 font-bold text-sm">
                    خرید محصول
                  </button>
                  <h1 className="text-2xl">95,000,000 تومان</h1>
                </div>
              </div>
              <div className="h-full scale-110 -translate-y-[45px] -translate-x-[50px]">
                <img
                  src="/image/content/pc-2.png"
                  alt=""
                  className="h-full object-cover"
                  data-aos="fade-right"
                  data-aos-duration="2000"
                />
              </div>
            </div>
          </SwiperSlide>

          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </div>
      <Footer />
    </div>
  );
}

export default Main;
