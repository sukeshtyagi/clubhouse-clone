import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import style from "../style/PhoneConfirmation.module.css";
import PhoneInput from "react-phone-number-input";

function PhoneConfirmation() {
  const [value, setValue] = useState();
  return (
    <div className={style.phoneConfirmContainer}>
      <Link exact to="/" className={style.backBtn}>
        <img src="/images/back.png" alt="" />
      </Link>

      <PhoneInput
        international
        defaultCountry="IN"
        value={value}
        onChange={setValue}
      />
      <h1>Enter your phone </h1>
      <p>
        By entering your number, you're agreeing to our{" "}
        <span> Terms of service and Privacy Policy. </span> Thanks!
      </p>
      <Link
        exact
        to="/code-confirm"
        className="primaryBtn d-flex align-items-center"
      >
        Next <img src="/images/next.png" alt="" className="ml-1" />
      </Link>
    </div>
  );
}

export default PhoneConfirmation;
