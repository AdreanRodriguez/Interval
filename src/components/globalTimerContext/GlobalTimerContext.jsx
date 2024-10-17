import { createContext, useContext, useEffect, useState } from "react";

const GlobalTimerContext = createContext();

// GlobalTimerContext som hanterar timerns logik och delar den med andra komponenter
export function GlobalTimerProvider({ children }) {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning && (minutes > 0 || seconds > 0)) {
      timer = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds > 0) {
            return prevSeconds - 1;
          } else if (minutes > 0) {
            setMinutes((prevMinutes) => prevMinutes - 1);
            return 59;
          } else {
            clearInterval(timer);
            setIsRunning(false);
            setIsDone(true);
            return 0;
          }
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning, minutes, seconds]);

  // Startar timern
  const startTimer = (initialMinutes) => {
    setMinutes(initialMinutes - 1);
    setSeconds(59);
    setIsRunning(true);
    setIsDone(false);
  };

  // Stoppar timern
  const stopTimer = () => {
    setIsRunning(false);
  };

  // Reset av timern
  const resetTimer = () => {
    setMinutes(0);
    setSeconds(0);
    setIsRunning(false);
    setIsDone(false);
  };

  return (
    <GlobalTimerContext.Provider
      value={{
        minutes,
        seconds,
        isRunning,
        isDone,
        startTimer,
        stopTimer,
        resetTimer,
      }}
    >
      {children}
    </GlobalTimerContext.Provider>
  );
}

// Hook för att kunna använda GlobalTimerContext från vilken komponent som helst
export function useGlobalTimer() {
  return useContext(GlobalTimerContext);
}
