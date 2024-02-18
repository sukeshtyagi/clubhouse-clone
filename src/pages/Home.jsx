import React, { useState } from "react";
import Header from "../Components/Header";
import DailyInfoCard from "../Components/DailyInfoCard";
import style from "../style/Home.module.css";
import RoomInfoCard from "../Components/RoomInfoCard";
import { AiOutlinePlus } from "react-icons/ai";
import { BsGrid3X3Gap } from "react-icons/bs";
import data from "../data/roomCard.json";
import BottomSheet from "../Components/BottomSheet";
import newRoomData from "../data/newRoom.json";

function Home() {
  const [itemsVisible, setItemsVisible] = useState(true);
  const [sheetVisible, setSheetVisible] = useState(false);
  const [sheetCreateRoom, setSheetCreateRoom] = useState(false);
  const [loaderVisibility, setLoaderVisibility] = useState(false);
  const [cardId, setCardId] = useState(1);

  return (
    <>
      {loaderVisibility && (
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src="/images/loader1.gif" width={100} height={100} alt="" />
        </div>
      )}
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
            setLoaderVisibility(false);
          }, 1000);
        }}
      />
      <BottomSheet
        sheetTitle="new room"
        setSheetVisible={(item) => {
          setSheetCreateRoom(item);
        }}
        sheetVisible={sheetCreateRoom}
        cardDetail={newRoomData}
        setItemsVisible={(item) => {
          setItemsVisible(item);
        }}
      />
    </>
  );
}

export default Home;
