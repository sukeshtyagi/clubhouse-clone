import React from "react";
import style from "../style/BottomSheet.module.css";
import SwipeableBottomSheet from "react-swipeable-bottom-sheet";
import StartRoomBottomSheet from "./bottomSheet/StartRoomBottomSheet";

function BottomSheet(props) {
  return (
    <SwipeableBottomSheet
      open={props.sheetVisible}
      onChange={() => {
        props.setSheetVisible(!props.sheetVisible);
      }}
      fullScreen={props.sheetTitle === "room" ? true : false}
    >
      <div
        className={style.bottomSheetContainer}
        style={{
          backgroundColor: props.sheetTitle === "profile" ? "transparent" : "",
        }}
      >
        <StartRoomBottomSheet
          setSheetCreateRoom={props.setSheetCreateRoom}
          setSheetVisible={(item) => {
            props.setSheetVisible(true);
            props.setItemsVisible(true)
          }}
        />
      </div>
    </SwipeableBottomSheet>
  );
}

export default BottomSheet;
