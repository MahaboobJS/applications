import React from 'react';
import { Box } from '@mui/material';

const AbstractShapes: React.FC = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'hidden',
        zIndex: 0,
      }}
    >
      {/* Large blob shape */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          right: '10%',
          width: '200px',
          height: '200px',
          borderRadius: '50% 30% 70% 40%',
          background: 'linear-gradient(135deg, #80CBC4 0%, #4DB6AC 100%)',
          opacity: 0.3,
          transform: 'rotate(45deg)',
        }}
      />
      
      {/* Medium blob shape */}
      <Box
        sx={{
          position: 'absolute',
          top: '40%',
          left: '15%',
          width: '150px',
          height: '150px',
          borderRadius: '60% 40% 30% 70%',
          background: 'linear-gradient(45deg, #80CBC4 0%, #26A69A 100%)',
          opacity: 0.25,
          transform: 'rotate(-30deg)',
        }}
      />
      
      {/* Small blob shape */}
      <Box
        sx={{
          position: 'absolute',
          bottom: '20%',
          right: '20%',
          width: '100px',
          height: '100px',
          borderRadius: '40% 60% 70% 30%',
          background: 'linear-gradient(225deg, #80CBC4 0%, #4DB6AC 100%)',
          opacity: 0.4,
          transform: 'rotate(60deg)',
        }}
      />
      
      {/* Additional decorative shape */}
      <Box
        sx={{
          position: 'absolute',
          top: '60%',
          left: '5%',
          width: '80px',
          height: '80px',
          borderRadius: '30% 70% 50% 50%',
          background: 'linear-gradient(315deg, #80CBC4 0%, #26A69A 100%)',
          opacity: 0.2,
          transform: 'rotate(-60deg)',
        }}
      />
    </Box>
  );
};

export default AbstractShapes;
