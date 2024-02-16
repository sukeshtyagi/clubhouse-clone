import React from "react";
import Header from "../Components/Header";
import DailyInfoCard from "../Components/DailyInfoCard";
import style from "../style/Home.module.css";
import RoomInfoCard from "../Components/RoomInfoCard";

function Home() {
  return (
    <>
      <Header />
      <div className={style.home_container}>
        <DailyInfoCard />
        <RoomInfoCard />
      </div>
    </>
  );
}

export default Home;
