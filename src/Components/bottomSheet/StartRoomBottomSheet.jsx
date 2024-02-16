import React, { useState } from "react";
import style from "../../style/BottomSheet.module.css";
import { FcGlobe } from "react-icons/fc";

function StartRoomBottomSheet(props) {
  const [room, setRoom] = useState("social");

  return (
    <>
      <div className={style.switch_line}></div>
      <div style={{ textAlign: "right" }}>
        <button className={style.addTopicBtn}>+ Add a topic</button>
      </div>
      <div className={style.selectRoomContainer}>
        <div className={style.selectRoom}>
          <button
            className={room === "open" && style.active}
            onClick={() => {
              setRoom("open");
            }}
          >
            <div>
              <FcGlobe size={80} />
            </div>
            Open
          </button>

          <button
            className={room === "social" && style.active}
            onClick={() => {
              setRoom("social");
            }}
          >
            <div>
              <FcGlobe size={80} />
            </div>
            Social
          </button>

          <button
            className={room === "closed" && style.active}
            onClick={() => {
              setRoom("closed");
            }}
          >
            <div>
              <FcGlobe size={80} />
            </div>
            Closed
          </button>
        </div>
        <p>
          Start a room
          <span>
            {room === "closed" && " for the people I choose"}
            {room === "social" && " for the people I follow"}
            {room === "open" && " open to all"}
          </span>
        </p>
      </div>

      <div className="text-center">
        <button
          className={style.letGoBtn}
          onClick={() => {
            props.setSheetCreateRoom(true);
            props.setSheetVisible(true);
          }}
        >
          {"Let's Go >>>"}
        </button>
      </div>
    </>
  );
}

export default StartRoomBottomSheet;
