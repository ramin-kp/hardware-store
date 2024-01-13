import React, { Fragment, useEffect, useState } from "react";
import Main from "../components/Main";
import api from "../services/api";
import CategoryBox from "../components/CategoryBox";
import Footer from "../components/Layout/Footer";

function HomePage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const fetch = await api.get("/menus");
      setData(fetch);
    };
    fetchData();
  }, []);
  console.log(data);
  return (
    <main>
      <Main />
      {/* category's */}
      {data.length ? (
        <div className="grid grid-cols-6 gap-0 mt-2">
          {data.map((item) => (
            <Fragment key={item.id}>
              <CategoryBox {...item} />
            </Fragment>
          ))}
        </div>
      ) : (
        <h1>loading...</h1>
      )}
      <Footer />
    </main>
  );
}

export default HomePage;
