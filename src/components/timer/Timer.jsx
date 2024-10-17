import React from "react";
import { useGlobalTimer } from "./GlobalTimerContext"; // Importera GlobalTimerContext

function Timer() {
  const { minutes, seconds, isRunning, startTimer, stopTimer, resetTimer } = useGlobalTimer();

  return (
    <div className="timer-container">
      <h2>
        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </h2>
      <div className="timer-controls">
        <button onClick={() => startTimer(5)} disabled={isRunning}>
          Start 5 min
        </button>
        <button onClick={stopTimer} disabled={!isRunning}>
          Stop
        </button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}

export default Timer;
