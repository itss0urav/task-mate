import { BrowserRouter, Routes, Route } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import "./App.css";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import TaskManaging from "./pages/TaskManaging";
import TaskCreation from "./pages/TaskCreation";
import FilterPage from "./pages/FilterPage";
import Introduction from "./pages/Introduction";
import Navbar from "./components/Navbar";

function App() {

  return (
    <div>
      <div>
        <Toaster />
      </div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Introduction />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/TaskCreation" element={<TaskCreation />} />
          <Route path="/TaskManaging" element={<TaskManaging />} />
          <Route path="/FilterPage" element={<FilterPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
