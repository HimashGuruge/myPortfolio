import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/page.jsx"; // Fixed path
import "./index.css"; // Changed from App.css to index.css

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
