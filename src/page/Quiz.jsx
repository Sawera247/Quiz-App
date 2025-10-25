import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Quiz.css";

import { htmlQuiz } from "../data/htmlQuiz";
import { cssQuiz } from "../data/cssQuiz";
import { jsQuiz } from "../data/jsQuiz";
import { reactQuiz } from "../data/reactQuiz";
import { pythonQuiz } from "../data/pythonQuiz";
import { cppQuiz } from "../data/cppQuiz";

const QuizPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  const quizData = {
    html: htmlQuiz,
    css: cssQuiz,
    javascript: jsQuiz,
    react: reactQuiz,
    python: pythonQuiz,
    cpp: cppQuiz,
  }[category];

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [finished, setFinished] = useState(false);

  const userName = localStorage.getItem("userName") || "Player";

  if (!quizData) return <h2 style={{ textAlign: "center" }}>Quiz not found.</h2>;

  const handleOptionClick = (index) => setSelected(index);

  const handleNext = () => {
    if (selected === quizData[current].answer) setScore(score + 1);
    if (current + 1 < quizData.length) {
      setCurrent(current + 1);
      setSelected(null);
    } else {
      setFinished(true);
    }
  };

  const handlePrevious = () => {
    if (current > 0) setCurrent(current - 1);
  };

  const handleRestart = () => {
    setCurrent(0);
    setScore(0);
    setSelected(null);
    setFinished(false);
  };

  const handleQuit = () => {
    navigate("/options");
  };

  return (
    <div className="main">
      <div className="quiz-page">
        <div className="heading">
          <h2>{category}</h2>
          <p>{quizData.length} Questions</p>
        </div>

        {!finished ? (
          <div className="card">
            <div className="total">
              <p>
                Question {current + 1}/{quizData.length}
              </p>
              <button className="quit" onClick={handleQuit}>
                Quit
              </button>
            </div>

            <p className="question">{quizData[current].question}</p>

            <div className="options">
              {quizData[current].options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleOptionClick(i)}
                  style={{
                    backgroundColor: selected === i ? "#0f469a" : "#fff",
                    color: selected === i ? "#fff" : "#000",
                  }}
                >
                  {opt}
                </button>
              ))}
            </div>

            <div className="nav-buttons">
              <button
                className="previous"
                onClick={handlePrevious}
                disabled={current === 0}
                style={{ cursor: current === 0 ? "not-allowed" : "pointer" }}
              >
                Previous
              </button>

              <button
                className="next"
                onClick={handleNext}
                disabled={selected === null}
                style={{ cursor: selected === null ? "not-allowed" : "pointer" }}
              >
                {current + 1 === quizData.length ? "Finish" : "Next"}
              </button>
            </div>
          </div>
        ) : (
          <div className="result" style={{ textAlign: "center" }}>
            <div className="showing">
              <div className="circle">
                <div>
                  <p className="score">Your Score</p>
                  <p className="scoreNum">
                    {score} / {quizData.length}
                  </p>
                </div>
              </div>

              <div className="go">
                {score >= quizData.length / 2 ? (
                  <h3 style={{ color: "#0F469A" }}>
                    🎉 Congratulations {userName}! <br /> Great job — you did it!
                  </h3>
                ) : (
                  <h3 style={{ color: "#C0392B" }}>
                    {userName}, don’t stress it. <br /> You’ll crush it next time!
                  </h3>
                )}

              <button onClick={() => navigate("/options")} className="back">
                Back to Home
              </button>
              
              </div>
              </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizPage;
