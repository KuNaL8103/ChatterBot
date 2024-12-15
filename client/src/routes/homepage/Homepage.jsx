import { Link } from "react-router-dom";
import "./homepage.css";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

const Homepage = () => {
  const [typingStatus, setTypingStatus] = useState("human1");

  return (
    <div className="homepage">
      <img src="/orbital.png" alt="" className="orbital" />
      <div className="left">
        <h1>Chatbot AI</h1>
        <h2>Build smarter conversations with our advanced Chatbot AI.</h2>
        <h3>
          Chatbot AI is an advanced technology designed to simulate human-like
          conversations, making interactions faster, smarter, and more engaging.
        </h3>
        <Link to="/dashboard">Get Started</Link>
      </div>
      <div className="right">
        <div className="imgContainer">
          <div className="bgContainer">
            <div className="bg"></div>
          </div>
          <img src="/bot.png" alt="" className="bot" />
          <div className="chat">
            <img
              src={
                typingStatus === "human1"
                  ? "/human1.jpeg"
                  : typingStatus === "human2"
                  ? "/human2.jpeg"
                  : "bot.png"
              }
              alt=""
            />
            <TypeAnimation
              sequence={[
                "Human1 : Can you recommend a good Italian restaurant nearby?",
                2000,
                () => {
                  setTypingStatus("bot");
                },
                "Bot : Try Bella Italia on Main Street!",
                2000,
                () => {
                  setTypingStatus("human2");
                },
                "Human2 : What's the weather like today?",
                2000,
                () => {
                  setTypingStatus("bot");
                },
                "Bot : It's sunny with a high of 75°F.",
                2000,
                () => {
                  setTypingStatus("human1");
                },
              ]}
              wrapper="span"
              repeat={Infinity}
              cursor={true}
              omitDeletionAnimation={true}
            />
          </div>
        </div>
      </div>
      <div className="terms">
        <img src="/logo.png" alt="" />
        <div className="links">
          <Link to="/">Terms of Service</Link>
          <span>|</span>
          <Link to="/">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
