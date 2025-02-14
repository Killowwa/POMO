import React, { useState } from 'react';
import { TextField, Button, Box, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const TaskInput = ({ addTask, searchTask }) => {
  const [taskName, setTaskName] = useState('');
  const [isSearching, setIsSearching] = useState(false); // Состояние поиска

  const handleAddTask = () => {
    if (taskName.trim()) {
      addTask({ name: taskName, dateAdded: new Date() });
      setTaskName('');
    }
  };

  const handleSearchTask = () => {
    if (taskName.trim()) {
      searchTask(taskName);
    }
  };

  // Функция обработки нажатия клавиши Enter
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      if (isSearching) {
        handleSearchTask(); // Выполнить поиск
      } else {
        handleAddTask(); // Добавить задачу
      }
    }
  };

  // Функция переключения режима поиска
  const toggleSearch = () => {
    setIsSearching(!isSearching);
    setTaskName(''); // Очистить поле ввода при выходе из режима поиска
  };

  return (
    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', justifyContent: 'center', width: '100%' }}>
      <TextField
        label={isSearching ? "Search task" : "Enter task"}
        variant="outlined"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        onKeyDown={handleKeyDown} // Обработчик Enter
        sx={{ borderRadius: '8px', flexGrow: 1 }}
      />

      {/* Иконка поиска или стрелка назад */}
      <IconButton color="primary" onClick={toggleSearch}>
        {isSearching ? <ArrowBackIcon /> : <SearchIcon />}
      </IconButton>

      {/* Кнопка "Add Task" скрывается при поиске */}
      {!isSearching && (
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
      )}
    </Box>
  );
};

export default TaskInput;
  