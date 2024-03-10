import "./App.css";
import Landing from "./page/Landing/Landing";
import { Home } from "./page/Login-screen/Home/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student/landing" element={<Landing />} />
      </Routes>
    </>
  );
}

export default App;
