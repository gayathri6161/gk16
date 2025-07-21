

import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import App from './App';
import Myapp from './Myapp';
import Welcome from './welcome';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename='gk16'>
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="app" element={<App />} />
      <Route path="myapp" element={<Myapp />} />
    </Routes>
  </BrowserRouter>
);