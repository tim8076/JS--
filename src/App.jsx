import { useMemo, useReducer } from "react";
import "./assets/scss/all.scss";
import { gameQuestions } from "./data/gameData";
import Button from "./components/button";
import { gameReducer } from "./data/gameReducer";
import imgLevel1 from "./assets/images/level-1.png";
import imgLevel2 from "./assets/images/level-2.png";
import imgLevel3 from "./assets/images/level-3.png";

function App() {
  const [gameState, dispatch] = useReducer(gameReducer, {
    score: 0, // 玩家總分
    questionValue: 5, // 每題分數
    currentQuestionNum: 1, // 目前題數
    answerNum: null, // 目前回答選項 1-4
    isConfirmStatus: false,
    answerHistory: [],
    isGameOver: false,
  });
  const currentQuestion = useMemo(() => {
    return gameQuestions.find(
      (question) => question.id === gameState.currentQuestionNum
    );
  }, [gameState]);

  const resultLevel = useMemo(() => {
    const totalScore = gameState.questionValue * gameQuestions.length;
    const correctRate = Math.round((gameState.score / totalScore) * 100);
    if (correctRate < 60) {
      return {
        title: "JS 萌新",
        imgUrl: imgLevel1,
      };
    } else if (correctRate >= 60 && correctRate < 90) {
      return {
        title: "JS 一般玩家",
        imgUrl: imgLevel2,
      };
    } else if (correctRate > 90) {
      return {
        title: "JS 大佬",
        imgUrl: imgLevel3,
      };
    }
  }, [gameState]);
  return (
    <>
      <h1 className="text-center text-light py-3 fs-3 fs-md-1">
        JS 問答大挑戰
      </h1>
      {!gameState.isGameOver ? (
        <div className="container py-3">
          <div className="d-flex justify-content-between text-light fs-md-4">
            <p>
              目前題數: {gameState?.currentQuestionNum} /{gameQuestions?.length}
            </p>
            <p>目前分數: {gameState.score}</p>
          </div>
          <h2 className="text-light mb-4 mb-md-5 fs-4 fs-md-2">
            {currentQuestion.title}
          </h2>
          <div className="row g-3 mb-3 mb-md-4">
            {currentQuestion?.questions?.map((item) => {
              return (
                <div className="col-md-6" key={item.id}>
                  <Button
                    item={item}
                    dispatch={dispatch}
                    gameState={gameState}
                    currentQuestion={currentQuestion}
                  />
                </div>
              );
            })}
          </div>
          <div className="row justify-content-center">
            <div className="col-md-6">
              {!gameState.isConfirmStatus ? (
                <a
                  href="#"
                  className={`btn btn-primary-200 w-100 py-3 py-md-4 border border-2 border
                      ${gameState.answerNum ? "" : "disabled"}`}
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch({
                      type: "confirm_answer",
                    });
                  }}
                >
                  確認答案
                </a>
              ) : (
                <a
                  href="#"
                  className="btn btn-primary-200 w-100 py-3 py-md-4 border border-2 border"
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch({
                      type: "go_next_question",
                    });
                  }}
                >
                  前往下一題
                </a>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          <h2 className="fs-3 fs-md-1 mb-3 mb-md-5 text-light text-center">
            您的總分為 {gameState.score}
          </h2>
          <div className="text-center text-light">
            <p className="fs-md-3 mb-3">你是 {resultLevel.title}</p>
            <img
              className="mb-3"
              src={resultLevel.imgUrl}
              alt="level-1"
              width={150}
              height={150}
            />
          </div>
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4">
              <a
                href="#"
                className="btn btn-primary-200 w-100 py-3 py-md-4 border border-2 border"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch({
                    type: "start_new_game",
                  });
                }}
              >
                再玩一次
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
