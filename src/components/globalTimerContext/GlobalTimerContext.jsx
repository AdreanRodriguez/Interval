import { useNavigate } from "react-router-dom";
import { createContext, useContext, useEffect, useState } from "react";

const GlobalTimerContext = createContext();

export function GlobalTimerProvider({ children }) {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [errorMsg, setErrorMsg] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [breakEnabled, setBreakEnabled] = useState(false);
  const [isErrorActive, setIsErrorActive] = useState(false);
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
    } else if (isRunning && minutes === 0 && seconds === 0) {
      setIsRunning(false);
      if (intervalEnabled) {
        handleInterval();
      } else if (breakEnabled) {
        setBreakEnabled(true);
        navigateTo("/breakView");
      } else {
        navigateTo("/alarmView");
      }
    }

    return () => clearInterval(timer);
  }, [isRunning, minutes, seconds, intervalEnabled, breakEnabled]);

  const handleInterval = (view) => {
    if (intervalEnabled) {
      startTimer(minutesSetByUser);
      setCurrentInterval((prevInterval) => prevInterval + 1);
    }
    if (breakEnabled) {
      navigateTo(view);
      setIsRunning(true);
      setBreakEnabled(true);
      setCurrentInterval((prevInterval) => prevInterval + 1);
    }
  };

  const startTimer = (initialMinutes) => {
    if (initialMinutes > 0) {
      setSeconds(0);
      setIsRunning(true);
      setMinutes(initialMinutes);
      setMinutesSetByUser(initialMinutes);
    }
  };

  const whenTimerIsDone = (view) => {
    if (minutes === 0 && seconds === 0) {
      navigateTo(view);
    }
  };

  const stopTimer = () => {
    setIsRunning(false);
    setMinutes(0);
    setCurrentInterval(0);
  };

  const navigateTo = (view) => {
    navigate(view);
  };

  return (
    <GlobalTimerContext.Provider
      value={{
        minutes,
        seconds,
        errorMsg,
        stopTimer,
        isRunning,
        setSeconds,
        setMinutes,
        startTimer,
        navigateTo,
        setErrorMsg,
        breakEnabled,
        isErrorActive,
        handleInterval,
        currentInterval,
        whenTimerIsDone,
        setBreakEnabled,
        intervalEnabled,
        minutesSetByUser,
        setIsErrorActive,
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
