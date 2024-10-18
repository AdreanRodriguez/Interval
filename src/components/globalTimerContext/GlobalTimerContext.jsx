import { createContext, useContext, useEffect, useState } from "react";

const GlobalTimerContext = createContext();

export function GlobalTimerProvider({ children }) {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [breakEnabled, setBreakEnabled] = useState(false);
  const [currentInterval, setCurrentInterval] = useState(0);
  const [minutesSetByUser, setMinutesSetByUser] = useState(0);
  const [intervalEnabled, setIntervalEnabled] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning && (minutes > 0 || seconds > 0)) {
      timer = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds > 0) {
            return prevSeconds - 10;
          } else if (minutes > 0) {
            setMinutes(minutes - 1);
            return 50;
          }
        });
      }, 1000);
    }
    // else {
    //   clearInterval(timer);
    //   setIsRunning(false);
    //   setIsDone(true);
    //   console.log("interval");
    //   if (intervalEnabled) {
    //     console.log("INNE I IF SATSEN");
    //     handleInterval(); // Anropa endast handleInterval när timern har nått 0
    //   }
    //   // return 0;
    // }

    return () => clearInterval(timer);
  }, [
    isRunning,
    minutes,
    seconds,
    // intervalEnabled
  ]);

  const handleInterval = () => {
    if (breakEnabled) {
      console.log("breakEnabled");
      setMinutes(5);
      setSeconds(0);
      setIsRunning(true);
      setBreakEnabled(false);
    } else {
      console.log("DEN ANDRA");
      setBreakEnabled(true);
      startTimer(minutesSetByUser);
      setCurrentInterval((prevInterval) => prevInterval + 1);
    }
  };

  const startTimer = (initialMinutes) => {
    if (initialMinutes > 0) {
      setSeconds(0);
      setIsDone(false);
      setIsRunning(true);
      setMinutes(initialMinutes);
      setMinutesSetByUser(initialMinutes);
    }
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setSeconds(0);
    setIsDone(false);
    setIsRunning(false);
    setCurrentInterval(0);
    setMinutes(minutesSetByUser);
  };

  return (
    <GlobalTimerContext.Provider
      value={{
        // isDone,
        // isRunning,
        // resetTimer,
        // minutesSetByUser,
        // currentInterval,
        startTimer,
        stopTimer,
        minutes,
        setMinutes,
        seconds,
        breakEnabled,
        setBreakEnabled,
        intervalEnabled,
        setIntervalEnabled,
      }}
    >
      {children}
    </GlobalTimerContext.Provider>
  );
}

export function useGlobalTimer() {
  return useContext(GlobalTimerContext);
}
