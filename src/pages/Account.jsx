import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';

function Account() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({ name: '', email: '' });
  const [loginInfo, setLoginInfo] = useState({ email: '', password: '' });

  // 로그인 처리
  const handleLogin = () => {
    if (loginInfo.email && loginInfo.password) {
      // 실제 앱에서는 서버에서 검증해야 함!
      setUser({ name: '홍길동', email: loginInfo.email });
      setIsLoggedIn(true);
    }
  };

  // 로그아웃
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser({ name: '', email: '' });
    setLoginInfo({ email: '', password: '' });
  };

  // 사용자 정보 변경
  const handleUserChange = (e) => {
    const { name, value } = e.target;
    setUser(prev => ({ ...prev, [name]: value }));
  };

  // 로그인 상태가 아닐 때
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

  // 로그인된 상태
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
