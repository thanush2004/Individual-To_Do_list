import { BrowserRouter, Routes, Route } from "react-router-dom";
import Taskshome from "./Taskshome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Taskshome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
