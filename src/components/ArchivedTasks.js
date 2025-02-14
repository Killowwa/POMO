import React from 'react';
import { List, ListItem, ListItemText, IconButton, Box, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import RestoreIcon from '@mui/icons-material/Restore';

const ArchivedTasks = ({ archivedTasks, restoreTask, deleteTask }) => {
  return (
    <Box sx={{ marginTop: '2rem', padding: '1rem', borderRadius: '12px' }}>
      <Typography variant="h6" gutterBottom sx={{ color: '#ff4081', fontWeight: 'bold' }}>
        Archived Tasks
      </Typography>
      <List>
        {archivedTasks.map((task, index) => (
          <ListItem key={index} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <ListItemText 
              primary={<Typography sx={{ color: '#ffffff', fontWeight: 'bold' }}>{task.name}</Typography>} 
              secondary={<Typography sx={{ color: '#b0b0b0' }}>{`Archived on: ${new Date(task.archived).toUTCString().slice(0, -13)}`}</Typography>} 
            />
            <Box>
              <IconButton edge="end" sx={{ color: '#ff9800' }} onClick={() => restoreTask(index)}>
                <RestoreIcon />
              </IconButton>
              <IconButton edge="end" sx={{ color: '#ff9800' }} onClick={() => deleteTask(index)}>
                <DeleteIcon />
              </IconButton>
            </Box>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ArchivedTasks;
