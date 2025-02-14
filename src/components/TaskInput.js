import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const TaskInput = ({ addTask }) => {
  const [taskName, setTaskName] = useState('');

  const handleAddTask = () => {
    if (taskName.trim()) {
      addTask({ name: taskName, dateAdded: new Date() });
      setTaskName('');
    }
  };

  // Функция обработки нажатия клавиши Enter
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', justifyContent: 'center', width: '100%' }}>
      <TextField
        label="Enter task"
        variant="outlined"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        onKeyDown={handleKeyDown} // Обработчик Enter
        sx={{ borderRadius: '8px', flexGrow: 1 }}
      />

      <Button
        variant="contained"
        color="primary"
        onClick={handleAddTask}
        sx={{
          borderRadius: '8px',
          backgroundColor: '#ff4081',
          '&:hover': { backgroundColor: '#ff80ab' },
        }}
      >
        Add Task
      </Button>
    </Box>
  );
};

export default TaskInput;
