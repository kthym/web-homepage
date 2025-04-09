import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Typography, Box } from '@mui/material';

function Account() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({ name: '', email: '' });
  const [loginInfo, setLoginInfo] = useState({ email: '', password: '' });

  const navigate = useNavigate();

  // ✅ 페이지 로딩 시 localStorage에서 로그인 상태 확인
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      setIsLoggedIn(true);
    }
  }, []);

  // ✅ 로그인
  const handleLogin = () => {
    if (loginInfo.email && loginInfo.password) {
      const newUser = { name: '홍길동', email: loginInfo.email };
      setUser(newUser);
      setIsLoggedIn(true);
      localStorage.setItem('user', JSON.stringify(newUser)); // ✅ localStorage에 저장
      navigate('/');
    }
  };

  // ✅ 로그아웃
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser({ name: '', email: '' });
    setLoginInfo({ email: '', password: '' });
    localStorage.removeItem('user'); // ✅ localStorage에서 제거
  };

  // ✅ 사용자 정보 수정
  const handleUserChange = (e) => {
    const { name, value } = e.target;
    const updatedUser = { ...user, [name]: value };
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser)); // ✅ 수정 내용도 반영
  };

  // ✅ 로그인 화면
  if (!isLoggedIn) {
    return (
      <Box sx={{ maxWidth: 400, mx: 'auto', mt: 5 }}>
        <Typography variant="h5" gutterBottom>로그인</Typography>
        <TextField
          label="이메일"
          fullWidth
          margin="normal"
          value={loginInfo.email}
          onChange={(e) => setLoginInfo({ ...loginInfo, email: e.target.value })}
        />
        <TextField
          label="비밀번호"
          type="password"
          fullWidth
          margin="normal"
          value={loginInfo.password}
          onChange={(e) => setLoginInfo({ ...loginInfo, password: e.target.value })}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
          onClick={handleLogin}
        >
          로그인
        </Button>
      </Box>
    );
  }

  // ✅ 로그인된 상태 화면
  return (
    <Box sx={{ maxWidth: 500, mx: 'auto', mt: 5 }}>
      <Typography variant="h5" gutterBottom>내 계정 정보</Typography>
      <TextField
        label="이름"
        name="name"
        fullWidth
        margin="normal"
        value={user.name}
        onChange={handleUserChange}
      />
      <TextField
        label="이메일"
        name="email"
        fullWidth
        margin="normal"
        value={user.email}
        onChange={handleUserChange}
      />
      <Button
        variant="contained"
        color="secondary"
        sx={{ mt: 2 }}
        onClick={handleLogout}
      >
        로그아웃
      </Button>
    </Box>
  );
}

export default Account;
