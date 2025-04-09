import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import Home from './pages/Home';
import Write from './pages/Write';
import Review from './pages/Review';
import StudentDB from './pages/StudentDB';
import Account from './pages/Account';
import ProtectedRoute from './ProtectedRoute';

const getLinkStyle = (isActive) => ({
  color: isActive ? '#FFD700' : 'white',
  textDecoration: 'none',
  marginRight: '1rem',
  fontWeight: isActive ? 'bold' : 'normal',
  borderBottom: isActive ? '2px solid #FFD700' : 'none',
});

function App() {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('user'));

  return (
    <>
      <AppBar position="static">
        <Toolbar sx={{ minHeight: '80px' }}>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>생기봇</Typography>
          <Box>
            <Link to="/" style={getLinkStyle(location.pathname === '/')}>Home</Link>
            <Link to="/write" style={getLinkStyle(location.pathname === '/write')}>생기부 작성</Link>
            <Link to="/review" style={getLinkStyle(location.pathname === '/review')}>생기부 검토</Link>
            <Link to="/students" style={getLinkStyle(location.pathname === '/students')}>학생 DB</Link>
            <Link to="/account" style={getLinkStyle(location.pathname === '/account')}>계정</Link>
          </Box>
        </Toolbar>
      </AppBar>

      <Box sx={{ p: 3 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/account" element={<Account setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/write" element={<ProtectedRoute isLoggedIn={isLoggedIn}><Write /></ProtectedRoute>} />
          <Route path="/review" element={<ProtectedRoute isLoggedIn={isLoggedIn}><Review /></ProtectedRoute>} />
          <Route path="/students" element={<ProtectedRoute isLoggedIn={isLoggedIn}><StudentDB /></ProtectedRoute>} />
        </Routes>
      </Box>
    </>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
