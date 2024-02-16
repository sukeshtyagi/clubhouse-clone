import React, { useState } from "react";
import Header from "../Components/Header";
import DailyInfoCard from "../Components/DailyInfoCard";
import style from "../style/Home.module.css";
import RoomInfoCard from "../Components/RoomInfoCard";
import { AiOutlinePlus } from "react-icons/ai";
import { BsGrid3X3Gap } from "react-icons/bs";
import data from "../data/roomCard.json";
import BottomSheet from "../Components/BottomSheet";

function Home() {
  const [itemsVisible, setItemsVisible] = useState(true);
  const [sheetVisible, setSheetVisible] = useState(false);
  const [sheetCreateRoom, setSheetCreateRoom] = useState(false);
  const [loaderVisibility, setLoaderVisibility] = useState(false);
  const [cardId, setCardId] = useState(1);
  return (
    <>
      <Header />
      <div className={style.home_container}>
        <DailyInfoCard />
        <RoomInfoCard />
      </div>
      <div className={style.action_btn}>
        <button
          onClick={() => {
            setSheetVisible(true);
          }}
        >
          <AiOutlinePlus />
          Start a room
        </button>
        <button>
          <BsGrid3X3Gap />
        </button>
      </div>
      <BottomSheet
        sheetTitle="start room"
        setSheetVisible={(item) => {
          setSheetVisible(item);
        }}
        sheetVisible={sheetVisible}
        cardDetail={data.find((item) => cardId === item.id)}
        setItemsVisible={(item) => {
          setItemsVisible(item);
        }}
        setSheetCreateRoom={(item) => {
          setLoaderVisibility(true);
          setTimeout(() => {
            setSheetCreateRoom(item);
          }, 1000);
        }}
      />
    </>
  );
}

export default Home;
