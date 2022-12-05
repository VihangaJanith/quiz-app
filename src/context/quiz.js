import { createContext, useReducer } from "react";
import questions from "../data";

const initialState = {
  questions,
  currentQuestionIndex: 0,
  showResult: false,
  correctAnswerCount: 0,
  currentAnswer: "",
  correctStatus: "",
  incorrectStatus: "",
  selected: "",
};

const reducer = (state, action) => {
  console.log(state, action);

  switch (action.type) {

    case "SELECT_ANSWER": {
      const isCorrect =
        state.questions[state.currentQuestionIndex].correctIndex;

      const CorrectAnswer =
        state.questions[state.currentQuestionIndex].answers[isCorrect];

      const correctAnswerCount =
        action.payload === CorrectAnswer
          ? state.correctAnswerCount + 1
          : state.correctAnswerCount;

      const correctStatus = action.payload === CorrectAnswer ? "true" : "";
      const incorrectStatus = action.payload !== CorrectAnswer ? "true" : "";

      const selected = action.payload ? "true" : "";

      return {
        ...state,
        currentAnswer: action.payload,
        correctAnswerCount,
        correctStatus,
        incorrectStatus,
        selected,
      };
    }
  }

  switch (action.type) {
    case "NEXT_QUESTION": {
      const showResult =
        state.currentQuestionIndex === state.questions.length - 1;

      const currentQuestionIndex = showResult
        ? state.currentQuestionIndex
        : state.currentQuestionIndex + 1;

      return {
        ...state,
        currentQuestionIndex,
        showResult,
        correctStatus: "",
        incorrectStatus: "",
        selected: "",
      };
    }

    case "RESTART": {
      return initialState;
    }

    default:
      return state;
  }
};

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const value = useReducer(reducer, initialState);

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
