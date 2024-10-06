export default function Button({ item, dispatch, gameState, currentQuestion }) {
  function selectAnswer(e) {
    e.preventDefault();
    dispatch({
      type: "select_answer",
      payload: {
        num: item.id,
      },
    });
  }
  return (
    <a
      href="#"
      className={`card-answer position-relative d-block border border-light border-2 rounded-3 p-3
        d-flex justify-content-center align-items-center text-light fs-5 fs-md-3
        ${gameState.answerNum === item.id ? "active" : ""}
        ${gameState.isConfirmStatus ? "pe-none" : ""}`}
      onClick={(e) => selectAnswer(e)}
    >
      <div className={gameState.isConfirmStatus ? "" : "d-none"}>
        {item.id === currentQuestion.answer ? (
          <i className="fa-regular fa-circle-check position-absolute top-5 end-2"></i>
        ) : (
          <i className="fa-regular fa-circle-xmark position-absolute top-5 end-2"></i>
        )}
      </div>
      {item.content}
    </a>
  );
}
