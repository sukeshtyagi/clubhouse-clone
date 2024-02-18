import React from "react";
import style from "../../style/NewRoomBottomSheet.module.css";
import { useState } from "react";
import { AiOutlineFile, AiOutlinePlus } from "react-icons/ai";
import { BsMicMuteFill, BsMicFill } from "react-icons/bs";

function NewRoomBottomSheet(props) {
  const [micMuteVisible, setMicMuteVisible] = useState(false);
  const [itemsVisible, setItemsVisible] = useState(true);
  const card = props.cardDetail;

  const handleCloseSheet = () => {
    props.setSheetVisible(false);
  };

  return (
    <>
      <div className={style.roomDetailContainer}>
        <div className={style.head}>
          <div className={style.headChildDiv}>
            <a
              href="#"
              onClick={() => {
                props.setSheetVisible(false);
              }}
            >
              <img
                src="/images/back-images.png"
                alt=""
                className={style.arrow_icon}
              />
              <span>Hallway</span>
            </a>
          </div>
          <div>
            <AiOutlineFile className={style.file_icon} />
            <img src="/images/b1.jpeg" alt="" className={style.profile_image} />
          </div>
        </div>
        <div className={style.roomDetailCard}>
          <div className={style.roomDetailCardChildDiv}>
            {card.members.map((item) => (
              <div className={style.membercontainer}>
                <img src="/images/b1.jpeg" alt="" />
                {micMuteVisible && (
                  <div className={style.audio_icon}>
                    <BsMicMuteFill />
                  </div>
                )}
                <p>
                  <span className={style.spanStar}>*</span>
                  <span className={style.spanName}>{item.first_name}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className={style.footer}>
          <div className={style.leaveConversation}>
            <button onClick={handleCloseSheet}>
              <img src="/images/stopHand.png" alt="" />
              Leave Quietly
            </button>
          </div>

          <div className={style.conversation}>
            <button className={style.plusButton}>
              <AiOutlinePlus />
            </button>
            <button className={style.peaceButton}>
              <img src="/images/peace.png" alt="" />
            </button>
            <button
              className={style.micButton}
              onClick={() => {
                setMicMuteVisible(!micMuteVisible);
              }}
            >
              {micMuteVisible && <BsMicMuteFill />}
              {!micMuteVisible && <BsMicFill />}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewRoomBottomSheet;
