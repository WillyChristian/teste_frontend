import React, { useEffect, useState } from "react";
import * as d3 from "d3";

const Chart = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("http://localhost:1337/productionTable/find")
      .then((res) => res.json())
      .then((data) => setData(data));
  });

  const showContent = () => {
    const product_id = data.map((item) => {
      return item.productId;
    });
  };

  return (
    <div className="w-full min-h-screen bg-gray-400 flex-col align-center justify-center">
      <button
        className="m-2 p-2 bg-red-900 text-gray-300 font-medium border-2 rounded-md"
        onClick={() => showContent()}
      >
        Show Content
      </button>
      <svg>{/* AQUI VAI O GRÁFICO */}</svg>
    </div>
  );
};
export default Chart;
