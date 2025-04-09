import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Home from './pages/Home';
import Write from './pages/Write';
import Review from './pages/Review';
import StudentDB from './pages/StudentDB';
import Account from './pages/Account';

function App() {
  const location = useLocation(); // 이제 Router 안이라 OK!

  return (
    <div>
      {/* ✅ 상단바 */}
      <AppBar position="static">
        <Toolbar sx={{ minHeight: '200px' }}>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            생기봇
          </Typography>
          <Box>
            <Link to="/" style={getLinkStyle(location.pathname === '/')}>Home</Link>
            <Link to="/write" style={getLinkStyle(location.pathname === '/write')}>생기부 작성</Link>
            <Link to="/review" style={getLinkStyle(location.pathname === '/review')}>생기부 검토</Link>
            <Link to="/students" style={getLinkStyle(location.pathname === '/students')}>학생 DB</Link>
            <Link to="/account" style={getLinkStyle(location.pathname === '/account')}>계정</Link>
          </Box>
        </Toolbar>
      </AppBar>

      {/* ✅ 페이지 전환 영역 */}
      <Box sx={{ p: 3 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/write" element={<Write />} />
          <Route path="/review" element={<Review />} />
          <Route path="/students" element={<StudentDB />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </Box>
    </div>
  );
}

// ✅ Router는 여기서 감싸줌
function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

// ✅ 강조 스타일 함수
const getLinkStyle = (isActive) => ({
  color: isActive ? '#FFD700' : 'white',
  textDecoration: 'none',
  marginRight: '1rem',
  fontWeight: isActive ? 'bold' : 'normal',
  borderBottom: isActive ? '2px solid #FFD700' : 'none',
});

export default AppWrapper;
