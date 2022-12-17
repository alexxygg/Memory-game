function Score() {
  const newGameClickHandler = () => {
    document.querySelectorAll(".square").forEach((each) => {
      each.classList.toggle("hidden");
    });
  };
  return (
    <div className="score">
      <button id="startGame" onClick={newGameClickHandler}>
        Start Game!
      </button>
    </div>
  );
}

export default Score;
