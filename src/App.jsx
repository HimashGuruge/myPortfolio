import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'; // Changed from App.css to index.css
import HomePage from './components/Page.jsx'; // Fixed path

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