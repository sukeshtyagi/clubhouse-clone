import React from "react";
import style from "../style/Header.module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className={style.Header}>
        <div className="search_div">
          <Link to="/explore">
            <img src="/images/searchimage.png" alt="" />
          </Link>
        </div>
        <div className={style.nav_items}>
          <Link to="/friends_invite">
            <img src="/images/invite.png" alt="" />
          </Link>

          <Link to="/upcoming">
            <img src="/images/calender.png" alt="" />
          </Link>

          <Link to="/activity">
            <img src="/images/bellicon.png" alt="" />
          </Link>

          <Link to="/profile">
            <img src="/images/b1.jpeg" alt="" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
