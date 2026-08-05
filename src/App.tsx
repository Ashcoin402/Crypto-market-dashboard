import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CoinDetail from './pages/CoinDetail';

export default function App() {
  return (
    <BrowserRouter>
      <div className='min-h-screen bg-gray-900'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/coin/:id' element={<CoinDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
