import React, { useState } from 'react';
import { Box, TextField, Button, List, ListItem, ListItemText, IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const Notes = () => {
  const [note, setNote] = useState('');
  const [notesList, setNotesList] = useState([]);

  const handleAddNote = () => {
    if (note.trim()) {
      setNotesList([...notesList, { id: Date.now(), content: note }]);
      setNote('');
    }
  };

  // Функция для добавления заметки по нажатию Enter
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleAddNote();
    }
  };

  const handleDeleteNote = (id) => {
    setNotesList(notesList.filter((note) => note.id !== id));
  };

  return (
    <Box sx={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#fff3e0', borderRadius: '12px' }}>
      <Typography variant="h6" gutterBottom sx={{ color: '#ff4081', fontWeight: 'bold' }}>
        Notes
      </Typography>
      <TextField
        label="Enter your note"
        variant="outlined"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        onKeyDown={handleKeyDown} // Добавлен обработчик Enter
        fullWidth
        sx={{
          marginBottom: '1rem',
          borderRadius: '8px',
          color: '#5a5a5a',
          backgroundColor: 'white',
          input: { color: '#333' },
        }}
      />
      <Button
        variant="contained"
        color="secondary"
        onClick={handleAddNote}
        sx={{
          borderRadius: '8px',
          marginBottom: '1rem',
          backgroundColor: '#e91e63',
          '&:hover': { backgroundColor: '#ff80ab' },
          color: 'white',
          fontWeight: 'bold',
        }}
      >
        Add Note
      </Button>

      <List>
        {notesList.map((note) => (
          <ListItem key={note.id} sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <ListItemText primary={<Typography sx={{ color: '#5a5a5a' }}>{note.content}</Typography>} />
            <IconButton edge="end" color="primary" onClick={() => handleDeleteNote(note.id)}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Notes;