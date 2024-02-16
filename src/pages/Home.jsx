import React from "react";
import Header from "../Components/Header";
import DailyInfoCard from "../Components/DailyInfoCard";
import style from "../style/Home.module.css";
import RoomInfoCard from "../Components/RoomInfoCard";
import { AiOutlinePlus } from "react-icons/ai";
import { BsGrid3X3Gap } from "react-icons/bs";

function Home() {
  return (
    <>
      <Header />
      <div className={style.home_container}>
        <DailyInfoCard />
        <RoomInfoCard />
      </div>
      <div className={style.action_btn}>
        <button>
          <AiOutlinePlus />
          Start a room
        </button>
        <button>
          <BsGrid3X3Gap />
        </button>
      </div>
    </>
  );
}

export default Home;
