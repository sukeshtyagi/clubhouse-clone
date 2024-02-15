import React from "react";
import style from "../style/PhoneConfirmation.module.css";
import { Link } from "react-router-dom";

function AllowNotification() {
  return (
    <div className={style.phoneConfirmContainer}>
      <div className="text-center">
        <h1 className="mb-4">Last, important step!</h1>
        <h1 className="mb-3">
          Enable notification to know when people are talking
        </h1>
        <div className={style.notificationContainer}>
          <div className="p-3">
            <h3>"Clubhouse" Would Like To Send You Notifications</h3>
            <p>Notification may include alerts,sounds and icon</p>
          </div>
          <div className={style.action_btn}>
            <Link to="/">Dont Allow</Link>
            <Link to="/">Allow</Link>
            <img
              src="/images/fingericon.jpg"
              alt=""
              className={style.hand_icon}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllowNotification;
