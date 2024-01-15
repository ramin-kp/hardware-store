import React from "react";
import ReadyPcsBox from "./ReadyPcsBox";

function GamerBox({ data }) {
  console.log(data);

  return (
    <section className="mt-10">
      <div className="text-center space-y-5">
        <p className="text-base text-white/60">مثل یه حرفه ای بازی کن!</p>
        <h1 className="font-Dana-Bold text-5xl">کیس های آماده</h1>
        <span className="inline-block text-base text-white/60">
          کامپیوتر های آماده کاستوم شده برای گیمر های سایت
        </span>
      </div>
      <div className="grid grid-cols-4 gap-x-5">
        {data.length ? (
          data.map((item) => <ReadyPcsBox key={item.id} {...item} />)
        ) : (
          <>
            <h1>loading</h1>
          </>
        )}
      </div>
    </section>
  );
}

export default GamerBox;
