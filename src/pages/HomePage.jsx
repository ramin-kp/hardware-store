import React, { Fragment, useEffect, useState } from "react";
import Main from "../components/Main";
import api from "../services/api";
import CategoryBox from "../components/CategoryBox";
import Footer from "../components/Layout/Footer";
import SpecialProducts from "../components/SpecialProducts";
import CustomPc from "../components/CustomPc";
import GamerBox from "../components/ReadyPcs";
import StoreSection from "../components/StoreSection";
import GamingSetupsSection from "../components/GamingSetupsSection";
import LatestEventsSection from "../components/LatestEventsSection";

function HomePage() {
  const [categorys, setCategorys] = useState([]);
  const [specialProducts, setSpecialProducts] = useState([]);
  const [readyPcs, setReadyPcs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetch = await api.get("/menus");
      setCategorys(fetch);
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      const fetch = await api.get("/specialProducts");
      setSpecialProducts(fetch);
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      const fetch = await api.get("/readyPcs");
      setReadyPcs(fetch);
    };
    fetchData();
  }, []);
  return (
    <main>
      <Main />
      {/* category's */}
      {categorys.length ? (
        <div className="grid grid-cols-6 gap-0 mt-2">
          {categorys.map((item) => (
            <Fragment key={item.id}>
              <CategoryBox {...item} />
            </Fragment>
          ))}
        </div>
      ) : (
        <h1>loading...</h1>
      )}
      {/* specialProducts */}
      <div className="container">
        <div className="text-center mt-[90px]">
          <div className="mb-14">
            <h1 className="font-Dana-Bold text-2xl/10">محصولات ویژه</h1>
            <p className="w-[440px] mx-auto text-lg/relaxed">
              پرفروش ترین محصولات از برند های محبوب و برتر دنیا و با کیفیت مناسب
              در فروشگاه سخت افزار
            </p>
          </div>
          <div className="grid grid-cols-4 gap-y-5">
            {specialProducts ? (
              <>
                {specialProducts.map((item) => (
                  <Fragment key={item.id}>
                    <SpecialProducts {...item} />
                  </Fragment>
                ))}
              </>
            ) : (
              <h1>loading ...</h1>
            )}
          </div>
        </div>
        <CustomPc />
        <GamerBox data={readyPcs} />
        <StoreSection />
      </div>
      <GamingSetupsSection />
      <div className="container">
        <LatestEventsSection />
      </div>
      <Footer />
    </main>
  );
}

export default HomePage;
