import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, CircularProgress, TextField } from '@mui/material';

const CountdownTimer = () => {
  const [minutes, setMinutes] = useState(22);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [totalMinutes, setTotalMinutes] = useState(22);

  useEffect(() => {
    if (!isRunning) return;

    if (minutes === 0 && seconds === 0) {
      setIsRunning(false);
      alert("Time's up! Pomodoro session completed.");
      return;
    }

    const timer = setInterval(() => {
      if (seconds === 0) {
        if (minutes > 0) {
          setMinutes((prev) => prev - 1);
          setSeconds(59);
        }
      } else {
        setSeconds((prev) => prev - 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning, minutes, seconds]);

  const handleStartPause = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setMinutes(totalMinutes);
    setSeconds(0);
    setIsRunning(false);
  };

  const handleMinuteChange = (event) => {
    const newMinutes = Number(event.target.value);
    if (newMinutes >= 0) {
      setMinutes(newMinutes);
      setTotalMinutes(newMinutes);
      setSeconds(0);
    }
  };

  // Обработчик нажатия клавиши Enter
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setIsEditing(false);
    }
  };

  const totalSeconds = totalMinutes * 60;
  const timeLeftInSeconds = minutes * 60 + seconds;
  const progress = (timeLeftInSeconds / totalSeconds) * 100;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: 'calc(45vh)',
        width: '100%',
        color: 'white',
        paddingBottom: '5px',
      }}
    >
      <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <CircularProgress variant="determinate" value={progress} size={200} thickness={4} sx={{ color: '#e91e63' }} />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {isEditing ? (
            <TextField
              type="number"
              value={minutes}
              onChange={handleMinuteChange}
              onBlur={() => setIsEditing(false)}
              onKeyDown={handleKeyDown} // Обработчик Enter
              autoFocus
              sx={{ backgroundColor: '#e91e63', color: 'white', textAlign: 'center', width: '80px' }}
              inputProps={{ min: 0 }}
            />
          ) : (
            <Typography
              variant="h4"
              sx={{ cursor: 'pointer' }}
              onClick={() => setIsEditing(true)}
            >
              {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
            </Typography>
          )}
        </Box>
      </Box>

      <Button
        variant="contained"
        color={isRunning ? "error" : "primary"}
        onClick={handleStartPause}
        sx={{ marginTop: '10px', backgroundColor: isRunning ? '#d32f2f' : '#e91e63' }}
      >
        {isRunning ? 'Pause' : 'Start'}
      </Button>

      <Button
        variant="outlined"
        color="secondary"
        onClick={handleReset}
        sx={{ marginTop: '5px', borderColor: '#ff80ab', color: 'white' }}
      >
        Reset
      </Button>
    </Box>
  );
};

export default CountdownTimer;