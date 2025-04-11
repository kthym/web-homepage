import React from 'react';
import { Box, Typography } from '@mui/material';
import HomeImage from '../assets/homeimage.png';
import { useNavigate } from 'react-router-dom';


function Home() {
  const navigate = useNavigate();
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

      {/* ✅ 이미지 삽입 영역 */}
      <Box sx={{ mt: 5 }}>
        <img
          src={HomeImage}
          alt="LLM 생기부 시스템 설명 이미지"
          style={{
            width: '60%', // ✅ 전체 화면의 60%만 차지
            height: 'auto',
            borderRadius: '12px',
            boxShadow: '0 4px 16px rgba(0,0,0,0.1)'
          }}
        />
      </Box>
      {/* 버튼 영역 */}
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, mt: 5, flexWrap: 'wrap' }}>
        {/* 생기부 작성 버튼 */}
        <Box
          onClick={() => navigate('/write')}
          sx={{
            width: 300,
            height: 180,
            background: 'linear-gradient(to bottom right, #65e4cf, #2ca7df)',
            borderRadius: 4,
            boxShadow: '4px 4px 16px rgba(0,0,0,0.2)',
            color: 'white',
            p: 3,
            cursor: 'pointer',
            transition: 'transform 0.2s',
            '&:hover': {
              transform: 'translateY(-4px)',
            }
          }}
        >
          <Typography variant="h5" fontWeight="bold">
            생기부 작성
          </Typography>
          <Typography variant="body1" sx={{ mt: 1, fontSize: '1.3rem' }}>
            <br />
            학생 데이터, 교육과정 기반<br />AI 생기부 작성
          </Typography>
        </Box>

        {/* 생기부 검토 버튼 */}
        <Box
          onClick={() => navigate('/review')}
          sx={{
            width: 300,
            height: 180,
            background: 'linear-gradient(to bottom right, #6fd0fb, #508ef4)',
            borderRadius: 4,
            boxShadow: '4px 4px 16px rgba(0,0,0,0.2)',
            color: 'white',
            p: 3,
            cursor: 'pointer',
            transition: 'transform 0.2s',
            '&:hover': {
              transform: 'translateY(-4px)',
            }
          }}
        >
          <Typography variant="h5" fontWeight="bold">
            생기부 검토
          </Typography>
          <Typography variant="body1" sx={{ mt: 1, fontSize: '1.3rem' }}>
            <br />
            AI 생기부 검토
          </Typography>
        </Box>
      </Box>
    </Box> 
  );
}

export default Home;
