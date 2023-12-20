import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import TaskManaging from "./pages/TaskManaging";
import TaskCreation from "./pages/TaskCreation";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Auth" element={<Auth />} />
          <Route path="/TaskCreation" element={<TaskCreation />} />
          <Route path="/TaskManaging" element={<TaskManaging />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
