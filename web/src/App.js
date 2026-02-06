import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        {/* 4. Dashboard (Placeholder for after login) */}
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        
        {/* 5. Catch-all for 404 - redirects back to login */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
