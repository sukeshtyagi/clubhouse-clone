import React from "react";
import style from "../style/BottomSheet.module.css";
import SwipeableBottomSheet from "react-swipeable-bottom-sheet";
import StartRoomBottomSheet from "./bottomSheet/StartRoomBottomSheet";
import NewRoomBottomSheet from "./bottomSheet/NewRoomBottomSheet";

function BottomSheet(props) {
  return (
    <SwipeableBottomSheet
      open={props.sheetVisible}
      onChange={() => {
        props.setSheetVisible(!props.sheetVisible);
      }}
      fullScreen={props.sheetTitle === "newroom" && false}
    >
      <div
        className={style.bottomSheetContainer}
        style={{
          backgroundColor: props.sheetTitle === "profile" && "transparent",
        }}
      >
        {props.sheetTitle === "new room" && (
          <NewRoomBottomSheet
            cardDetail={props.cardDetail}
            setSheetVisible={(item) => {
              props.setSheetVisible(true);
              props.setItemsVisible(true);
            }}
          />
        )}

        {props.sheetTitle === "start room" && (
          <StartRoomBottomSheet
            setSheetCreateRoom={props.setSheetCreateRoom}
            setSheetVisible={(item) => {
              props.setSheetVisible(true);
              props.setItemsVisible(true);
            }}
          />
        )}
      </div>
    </SwipeableBottomSheet>
  );
}

export default BottomSheet;
/*
      
*/
