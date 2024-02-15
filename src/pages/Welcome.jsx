import React from "react";
import style from "../style/Welcome.module.css";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className={style.WelcomeContainer}>
      <h1>Welcome!</h1>
      <div className={style.WelcomeInfo}>
        <p>
          Welcome to Clubhouse – the place where conversations come alive!
          Clubhouse is an audio-based social networking app that allows users to
          join virtual rooms and participate in discussions on various topics in
          real-time.
        </p>

        <p>
          In Clubhouse, you can explore rooms covering a wide range of
          interests, from technology and entrepreneurship to arts, culture, and
          everything in between. You can join rooms to listen to
          thought-provoking discussions, engage with speakers and other
          listeners, or even start your own room to share your expertise or host
          a conversation.
        </p>

        <p>
          One of the unique features of Clubhouse is its emphasis on live,
          ephemeral conversations. Once a room ends, the discussion is over,
          making each interaction feel spontaneous and exclusive. This creates a
          sense of urgency and excitement around the conversations happening on
          the platform.
        </p>

        <p>
          Clubhouse also offers the opportunity to connect with people from
          diverse backgrounds and build meaningful relationships within its
          vibrant community. Whether you're looking to learn something new,
          share your insights, or simply connect with like-minded individuals,
          Clubhouse provides a platform for authentic and engaging
          conversations.
        </p>

        <p>
          So, join us on Clubhouse, where every voice has the power to inspire,
          educate, and entertain. Start exploring, start listening, and start
          talking – your next great conversation awaits!
        </p>

        <p>Namami Shree G & the Clubhouse team</p>
      </div>
      <div className={style.actionBtn}>
        <Link
          exact
          to="/get_userName"
          classNamme="primary d-flex align-item-center mb-3"
        >
          Get your username{/* */}
          {/*  <img src="" alt="" /> */}
        </Link>
        <Link exact to='/invite'>Have an invite text?Sign in</Link>
      </div>
    </div>
  );
}

export default Welcome;
