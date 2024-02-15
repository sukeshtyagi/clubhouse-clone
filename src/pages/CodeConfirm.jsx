import React from "react";
import style from "../style/PhoneConfirmation.module.css";
import { Link } from "react-router-dom";

function CodeConfirm() {
  return (
    <div className={style.phoneConfirmContainer}>
      <Link exact to="/get_userName" className={style.backBtn}>
        <img src="/images/back.png" alt="" />
      </Link>
      <div className="text-center">
        <h1
          style={{
            width: "100%",
            maxWidth: "220px",
            marginBottom: "1em",
            textAlign: "center",
          }}
        >
          Enter the code we just texted you
        </h1>
        <input
          type="text"
          style={{
            width: "70%",
            border: "none",
            outline: "none",
            textAlign: "center",
          }}
        />
        <p className="mt-2">
          Didn't receive it? <span>Tap to resend</span>
        </p>
      </div>
      <Link
        to="/allow_notification"
        className="primaryBtn d-flex align-items-center"
      >
        Next <img src="/images/next.png" alt="" className="ml-1" />
      </Link>
    </div>
  );
}

export default CodeConfirm;
