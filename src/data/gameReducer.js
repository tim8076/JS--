import { gameQuestions } from "./gameData";
export const ACTIONS = {
  SELECT_ANSWER: "select_answer",
  CONFIRM_ANSWER: "confirm_answer",
  GO_NEXT_QUESTION: "go_next_question",
  START_NEW_GAME: "start_new_game",
};

export function gameReducer(state, action) {
  const answerObj = {
    ...state,
    currentQuestionNum: state.currentQuestionNum + 1,
    answerNum: null,
    isConfirmStatus: false,
    answerHistory: [
      ...state.answerHistory,
      {
        id: state.currentQuestionNum,
        answer: state.answerNum,
      },
    ],
  };
  switch (action.type) {
    case ACTIONS.SELECT_ANSWER:
      return {
        ...state,
        answerNum: action.payload.num,
      };
    case ACTIONS.CONFIRM_ANSWER:
      return {
        ...state,
        isConfirmStatus: true,
      };
    case ACTIONS.GO_NEXT_QUESTION:
      // 如果沒有下一題 遊戲結束
      if (!gameQuestions[state.currentQuestionNum]) {
        if (
          state.answerNum === gameQuestions[state.currentQuestionNum - 1].answer
        ) {
          return {
            ...state,
            score: state.score + state.questionValue,
            isGameOver: true,
          };
        } else {
          return {
            ...state,
            isGameOver: true,
          };
        }
      }
      // 有下一題，前往下一題
      if (
        state.answerNum === gameQuestions[state.currentQuestionNum - 1].answer
      ) {
        return {
          ...answerObj,
          score: state.score + state.questionValue,
        };
      } else {
        return {
          ...answerObj,
        };
      }
    case ACTIONS.START_NEW_GAME:
      return {
        score: 0, // 玩家總分
        questionValue: 5, // 每題分數
        currentQuestionNum: 1, // 目前題數
        answerNum: null, // 目前回答選項 1-4
        isConfirmStatus: false,
        answerHistory: [],
        isGameOver: false,
      };
  }
}
