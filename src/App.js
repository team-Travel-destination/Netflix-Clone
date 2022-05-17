import Navbar from './components/Navbar/Navbar';
import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FavList from './components/FavList/FavList';

function App() {
  return (
    <div className="App">
      <Navbar />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favlist" element={<FavList />} />
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;

