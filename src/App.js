
import React, { useState } from 'react';
import { Container, Typography, Paper, Grid, Box, CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Timer from './components/Timer';
import TaskList from './components/TaskList';
import TaskInput from './components/TaskInput';
import ArchivedTasks from './components/ArchivedTasks';
import Notes from './components/Notes';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#ff4081' },
    secondary: { main: '#ff9800' },
    background: {
      default: '#000000',
      paper: '#1e1e1e',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0b0b0',
    },
  },
  typography: {
    h3: {
      fontFamily: 'Arial, sans-serif',
      fontWeight: 700,
      color: '#ff4081',
      textAlign: 'center',
      textTransform: 'uppercase',
      letterSpacing: '2px',
      marginBottom: '10px',
    },
    h6: { fontFamily: 'Roboto, sans-serif', color: '#b0b0b0' },
  },
  shape: { borderRadius: 8 },
});

function App() {
  const [tasks, setTasks] = useState([]);
  const [archivedTasks, setArchivedTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const archiveTask = (taskIndex) => {
    const task = tasks[taskIndex];
    setArchivedTasks([...archivedTasks, { ...task, archived: new Date() }]);
    setTasks(tasks.filter((_, index) => index !== taskIndex));
  };

  const restoreTask = (taskIndex) => {
    const task = archivedTasks[taskIndex];
    setTasks([...tasks, task]);
    setArchivedTasks(archivedTasks.filter((_, index) => index !== taskIndex));
  };

  const deleteTask = (taskIndex, fromArchive = false) => {
    if (fromArchive) {
      setArchivedTasks(archivedTasks.filter((_, index) => index !== taskIndex));
    } else {
      setTasks(tasks.filter((_, index) => index !== taskIndex));
    }
  };

  const editTask = (taskIndex, newName) => {
    const updatedTasks = tasks.map((task, index) =>
      index === taskIndex ? { ...task, name: newName } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container
        maxWidth="xl"
        sx={{
          minHeight: '100vh',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          bgcolor: 'background.default',
        }}
      >
        <Paper
          sx={{
            padding: '2rem',
            bgcolor: 'background.paper',
            borderRadius: '12px',
            width: '80%',
            minHeight: '90vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            boxShadow: '0px 4px 20px rgba(255, 255, 255, 0.1)',
          }}
        >
          <Typography variant="h3" gutterBottom sx={{ textAlign: 'center' }}>
            Pomodoro Task Manager
          </Typography>

          <Grid container spacing={3} sx={{ flexGrow: 1 }}>
            <Grid item xs={12} sm={12} md={6}>
              <Timer />
            </Grid>

            <Grid item xs={12} sm={12} md={6}>
              <Box sx={{ marginBottom: '1rem' }}>
                <TaskInput addTask={addTask} />
              </Box>
              <Box>
                <TaskList
                  tasks={tasks}
                  archiveTask={archiveTask}
                  editTask={editTask}
                  deleteTask={(index) => deleteTask(index, false)}
                />
              </Box>
            </Grid>

            <Grid item xs={12} sm={12} md={6}>
              <ArchivedTasks
                archivedTasks={archivedTasks}
                restoreTask={restoreTask}
                deleteTask={(index) => deleteTask(index, true)}
              />
            </Grid>

            <Grid item xs={12}>
              <Notes />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default App;
