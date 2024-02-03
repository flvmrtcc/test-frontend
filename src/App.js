import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import UserPage from './pages/UserPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path=":id" element={<UserPage />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}
