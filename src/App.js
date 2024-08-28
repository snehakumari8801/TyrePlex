import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Dealer from './components/sections/Dealer';

function App() {
  return (
    <BrowserRouter>
      <div className="App bg-gray-100 min-h-screen w-screen flex flex-col overflow-x-hidden">
        {/* Define your routes here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dealer" element={<Dealer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
