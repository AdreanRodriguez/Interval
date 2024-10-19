import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
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
    } else if (minutes === 0 && seconds === 0) {
      setIsRunning(false);
      setIsDone(true);
      if (breakEnabled) {
        navigateTo("/breakView");
      } else if (intervalEnabled) {
        handleInterval();
      } else {
        whenTimerIsDone("/setTimer");
      }
    }

    return () => clearInterval(timer);
  }, [isRunning, minutes, seconds, intervalEnabled]);

  const handleInterval = (view) => {
    if (intervalEnabled) {
      console.log("inne i interval, första checkboxen");
      startTimer(minutesSetByUser);
      setCurrentInterval((prevInterval) => prevInterval + 1);
    }
    if (breakEnabled) {
      console.log("inne i breakEnabled");
      navigateTo(view);
      setIsRunning(true);
      setBreakEnabled(true);
    }
  };

  const startTimer = (initialMinutes) => {
    if (initialMinutes > 0) {
      setSeconds(0);
      setIsDone(false);
      setIsRunning(true);
      setMinutes(initialMinutes);
      setMinutesSetByUser(initialMinutes);
    } else {
      setIsDone(true);
    }
  };

  const whenTimerIsDone = (view) => {
    if (minutes === 0 && seconds === 0) {
      navigateTo(view);
    }
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const navigateTo = (view) => {
    navigate(view);
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
        // resetTimer,

        minutesSetByUser,
        currentInterval,
        whenTimerIsDone,
        isRunning,
        navigateTo,
        startTimer,
        stopTimer,
        minutes,
        setMinutes,
        setSeconds,
        seconds,
        breakEnabled,
        handleInterval,
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
