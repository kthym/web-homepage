import React from 'react';
import { Box, Typography } from '@mui/material';

function Home() {
  return (
    <Box
      sx={{
        height: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        textAlign: 'center',
        px: 2,
        mt: 8
      }}
    >
      <Typography variant="h3" component="h1" gutterBottom>
        AI로 생기부를 쉽고 정확하게!
      </Typography>
      <Typography variant="h5" color="text.secondary">
        클릭 몇 번으로 생기부 작성과 검토를 한 번에 ✨
      </Typography>
    </Box>
  );
}

export default Home;
