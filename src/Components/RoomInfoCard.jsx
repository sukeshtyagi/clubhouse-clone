import React from "react";
import data from "../data/roomCard.json";
import style from "../style/RoomInfoCard.module.css";
import {
  BsChatDots,
  BsChatDotsFill,
  BsFillPersonFill,
  BsPersonFill,
} from "react-icons/bs";

function RoomInfoCard() {
  console.log(data);
  return (
    <>
      {data.map((room) => (
        <div className={style.roomCardContainer}>
          <h6>{room.title}</h6>
          <h2>{room.sub_title}</h2>

          <div className={style.roomMembersImageAndNameContainerDiv}>
            <div className={style.roomMembers}>
              <img src="/images/b1.jpeg" alt="" />
              <img src="/images/b2.jpeg" alt="" />
            </div>
            <div className="roomMembersNameContainerDiv">
              {room.memebers.map((member) => (
                <p>
                  {member.first_name}
                  {member.last_name}
                  <BsChatDots />
                </p>
              ))}
            </div>
          </div>

          <p className={style.roomDetails}>
            <span className="mx-2">1.8</span>
            <BsFillPersonFill />
            <span className="mx-2"></span>
            <span className="mx-2">5</span>
            <BsChatDotsFill />
          </p>
        </div>
      ))}
    </>
  );
}

export default RoomInfoCard;
