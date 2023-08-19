import { Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
import Home from './components/Home';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="quote" element={<Quote />} />
            <Route path="calculator" element={<Calculator />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
