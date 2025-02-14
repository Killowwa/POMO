import React, { useState } from 'react';
import { List, ListItem, ListItemText, IconButton, TextField, Box, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ArchiveIcon from '@mui/icons-material/Archive';

const TaskList = ({ tasks, archiveTask, editTask, deleteTask }) => {
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState('');

  // Функция для обработки начала редактирования
  const handleEditClick = (index, currentText) => {
    setEditIndex(index);
    setEditValue(currentText);
  };

  // Функция для сохранения изменений
  const handleSave = (index) => {
    if (editValue.trim() !== '') {
      editTask(index, editValue);
    }
    setEditIndex(null);
  };

  // Обработчик нажатия клавиш
  const handleKeyDown = (event, index) => {
    if (event.key === 'Enter') {
      handleSave(index);
    }
  };

  return (
    <Box sx={{ backgroundColor: '#fff3e0', padding: '1rem', borderRadius: '12px' }}>
      <Typography variant="h6" gutterBottom sx={{ color: '#ff4081', fontWeight: 'bold' }}>
        Task List
      </Typography>
      <List>
        {tasks.map((task, index) => (
          <ListItem key={index} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            {editIndex === index ? (
              <TextField
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
                onBlur={() => handleSave(index)}
                onKeyDown={(e) => handleKeyDown(e, index)} // Отслеживаем нажатие клавиши Enter
                autoFocus
                fullWidth
                variant="outlined"
                sx={{ 
                  borderRadius: '8px',
                  borderColor: '#ff4081',
                  '& .MuiOutlinedInput-input': { color: '#5a5a5a' } // Цвет текста исправлен
                }}
                inputProps={{ style: { color: '#5a5a5a' } }}
              />
            ) : (
              <ListItemText
                primary={<Typography sx={{ color: '#5a5a5a', fontWeight: 'bold' }}>{task.name}</Typography>}
                secondary={<Typography sx={{ color: '#757575' }}>{`Added: ${new Date(task.dateAdded).toDateString()}`}</Typography>}
              />
            )}
            <Box>
              <IconButton sx={{ color: '#ff9800' }} onClick={() => archiveTask(index)}>
                <ArchiveIcon />
              </IconButton>
              <IconButton sx={{ color: '#ff4081' }} onClick={() => handleEditClick(index, task.name)}>
                <EditIcon />
              </IconButton>
              <IconButton sx={{ color: '#d32f2f' }} onClick={() => deleteTask(index)}>
                <DeleteIcon />
              </IconButton>
            </Box>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default TaskList;