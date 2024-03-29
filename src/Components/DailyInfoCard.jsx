import React from "react";
import style from "../style/DailyInfoCard.module.css";
import data from "../data/dailyCard.json";

function DailyInfoCard() {
  return (
    <div className={style.dailyCard}>
      {data.map((item) => (
        <div>
          <span>{item.time}</span>
          <div>
            <span>{item.title}</span>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DailyInfoCard;
