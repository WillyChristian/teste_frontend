import React from "react";
import Button from "./Button";
import Chart from "./Chart";
const Home = () => {
  return (
    <div
      class="min-h-screen bg-gray-100 antialiased p-6"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "start",
      }}
    >
      <Button />
      <Chart />
    </div>
  );
};
export default Home;
