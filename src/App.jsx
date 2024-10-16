import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage.jsx";
import SetTimer from "./pages/setTimer/SetTimer.jsx";

function App() {
  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/setTimer" element={<SetTimer />} />
      </Routes>
    </main>
  );
}

export default App;
