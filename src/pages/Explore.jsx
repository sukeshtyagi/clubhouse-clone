import React, { useState } from "react";
import style from "../style/Explore.module.css";
import { DownOutlined, FireOutlined } from "@ant-design/icons";
import data from "../data/explore.json";

function Explore() {
  const { people, conversation } = data;
  const [input, setInput] = useState("");
  return (
    <div className={style.exploreContainer}>
      <div className={style.exploreHeader}>
        <img src="/images/back arrow.png" alt="backArrow" />
        <h6>Explore</h6>
      </div>
      <div className={style.inputSearch}>
        <img src="/images/searchimage.png" alt="SearchIcon" />
        <input
          type="text"
          value={input}
          placeholder="Find People and Clubs"
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </div>
      <div className={style.peopleFollowContainer}>
        <h6>PEOPLE TO FOLLOW</h6>

        <div className={style.peopleOuterContainer}>
          {people.map((person) => (
            <div key={person.id} className={style.peopleContainer}>
              <div key={person.id} className={style.peopleSubContainer}>
                <div className={style.imageDivContainer}>
                  <img src="/images/b1.jpeg" alt="" />
                </div>
                <div className={style.personDetailContainer}>
                  <h5>{person.title}</h5>
                  <p>{person.description}</p>
                </div>
              </div>

              <button>Follow</button>
            </div>
          ))}
        </div>
      </div>
      <div className={style.showMoreBtn}>
        <button>Show more people</button>
        <DownOutlined className={style.showMoreBtnDownOutline} />
      </div>
      {/*converstion div below */}
      <div className={style.conversationFollowContainer}>
        <h6>FIND CONVERSATION ABOUT</h6>

        <div className={style.conversationOuterContainer}>
          {conversation.map((item, index) => (
            <div key={index} className={style.conversationContainer}>
              <div key={index} className={style.converseSubContainer}>
                <div className={style.iconDivContainer}>
                  <FireOutlined />
                  <h5>{item.title}</h5>
                </div>
                <div className={style.personDetailContainer}>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/*converstion div ends */}
    </div>
  );
}

export default Explore;
/*

*/
