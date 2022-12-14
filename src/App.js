import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import SingleTask from "./Pages/singleTask/SingleTask";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:oneDay" element={<SingleTask />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
