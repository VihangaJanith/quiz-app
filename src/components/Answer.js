import React, { useContext } from "react";
import { QuizContext } from "../context/quiz";

const Answer = ({
  onSelectAnswer, 

  currentAnswer,
  correctStatus,
  incorrectStatus,
  selected,
}) => {
  


  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestionIndex];


  const letters = ["A", "B", "C", "D"];
 

  return (
    <div>
      {correctStatus ? (
        <div class="alert alert-success" role="alert">
          Correct Answer !!!
        </div>
      ) : (
        ""
      )}
      {incorrectStatus ? (
        <div class="alert alert-danger" role="alert">
          Incorrect Answer !!!
        </div>
      ) : (
        ""
      )}

      {currentQuestion.answers.map((answer, index) => (
        <div className="row" key={index}>
          <div className="column">
            <button
              className='buttonA'
              id={answer}
              onClick={() => onSelectAnswer(answer)}
              disabled={selected}
            >
              {" "}
              {letters[index]}. {answer}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Answer;
