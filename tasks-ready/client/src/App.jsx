import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
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
  console.log(
    " Hi there :) Find me Here \n GitHub: 👉https://github.com/itss0urav",
    " \n LinkedIn: 👉https://www.linkedin.com/in/itssourav/",
    " \n Instagram: 👉https://www.instagram.com/itssourav.dev/",
    " \n Medium: 👉https://itss0urav.medium.com/"
  );

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
