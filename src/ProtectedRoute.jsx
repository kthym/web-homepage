import React from 'react';
import { Box, Typography } from '@mui/material';

function ProtectedRoute({ isLoggedIn, children }) {
  if (!isLoggedIn) {
    return (
      <Box sx={{ textAlign: 'center', mt: 10 }}>
        <Typography variant="h5" color="error" gutterBottom>
          ⚠️ 접근 제한
        </Typography>
        <Typography variant="body1">
          이 페이지에 접근하려면 로그인이 필요합니다.
        </Typography>
      </Box>
    );
  }

  return children;
}

export default ProtectedRoute;
