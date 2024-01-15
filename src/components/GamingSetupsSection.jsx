import React from "react";

function GamingSetupsSection() {
  return (
    <section className="mt-20 text-center space-y-5">
      <h2 className="font-Dana-UltraLight text-base text-white/80">
        قدرت بیش از اندازه
      </h2>
      <h1 className="font-Dana-Bold text-4xl">ستاپ های گیمینگ</h1>
      <p className="text-white/80">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است.
      </p>
      <div className="grid grid-cols-4">
        <img src="/image/content/setup-2.jpg" alt="setup-pc" />
        <img src="/image/content/setup-3.jpg" alt="setup-pc" />
        <img src="/image/content/setup-4.jpg" alt="setup-pc" />
        <img src="/image/content/setup-5.jpg" alt="setup-pc" />
        <img src="/image/content/setup-6.jpg" alt="setup-pc" />
        <img src="/image/content/setup-7.jpg" alt="setup-pc" />
        <img src="/image/content/setup-8.jpg" alt="setup-pc" />
        <img src="/image/content/setup-9.jpg" alt="setup-pc" />
      </div>
    </section>
  );
}

export default GamingSetupsSection;
