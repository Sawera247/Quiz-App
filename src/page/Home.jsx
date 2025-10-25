import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/userDetail");
  };

  return (
    <div className="home">
      <h1>Test Your Knowledge with Quizzes</h1>
      <p>You're just looking for a playful way to learn new facts, our quizzes are designed to entertain and educate.</p>
      <button onClick={handleStart} className="start-btn">
        Let’s Start
      </button>
    </div>
  );
};

export default Home;
