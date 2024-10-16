import "./App.css";
import { Routes, Route } from "react-router-dom";
import SetTimer from "./pages/setTimer/SetTimer.jsx";
import LandingPage from "./pages/landingPage/LandingPage.jsx";
import AnalogTimer from "./pages/analogTimer/AnalogTimer.jsx";
import DigitalTimer from "./pages/digitalTimer/DigitalTimer";
import TextTimer from "./pages/textTimer/TextTimer";

function App() {
  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/setTimer" element={<SetTimer />} />
        <Route path="/analogTimer" element={<AnalogTimer />} />
        <Route path="/digitalTimer" element={<DigitalTimer />} />
        <Route path="/textTimer" element={<TextTimer />} />
      </Routes>
    </main>
  );
}

export default App;
