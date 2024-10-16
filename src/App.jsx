import { Routes, Route } from "react-router-dom";
import SetTimer from "./pages/setTimer/SetTimer.jsx";
import TextTimer from "./pages/textTimer/TextTimer.jsx";
import AlarmView from "./pages/alarmView/AlarmView.jsx";
import BreakView from "./pages/breakView/BreakView.jsx";
import LandingPage from "./pages/landingPage/LandingPage.jsx";
import AnalogTimer from "./pages/analogTimer/AnalogTimer.jsx";
import DigitalTimer from "./pages/digitalTimer/DigitalTimer.jsx";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/setTimer" element={<SetTimer />} />
        <Route path="/textTimer" element={<TextTimer />} />
        <Route path="/alarmView" element={<AlarmView />} />
        <Route path="/breakView" element={<BreakView />} />
        <Route path="/analogTimer" element={<AnalogTimer />} />
        <Route path="/digitalTimer" element={<DigitalTimer />} />
      </Routes>
    </main>
  );
}

export default App;
