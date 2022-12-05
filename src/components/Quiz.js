import React, { useContext } from "react";
import { QuizContext } from "../context/quiz";
import Question from "./Question";

const Quiz = ({selected}) => {
  const [quizState, dispatch] = useContext(QuizContext);
  console.log(quizState);
  return (
    <div>
      <h1>Quiz App</h1>
      {quizState.showResult && (
        <div className="cards ml-5">
          You have successfully completed the Quiz !!!! You got{" "}
          {quizState.correctAnswerCount} out of {quizState.questions.length}{" "}
          questions correctly
          <div>
            <button
              className="btn btn-warning mt-2"
              onClick={() => dispatch({ type: "RESTART" })}
            >
              Restart Quiz
            </button>
          </div>
        </div>
      )}

      {!quizState.showResult && (
        <div className="cards ml-5">
          Question {quizState.currentQuestionIndex + 1} /
          {quizState.questions.length}
          <Question className="mt-2 mb-2" />
          <div>
            <button
              className="btn btn-light"
              onClick={() => dispatch({ type: "NEXT_QUESTION" })}
              
            >
              Next Question
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
