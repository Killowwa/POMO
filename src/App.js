import React, { useEffect, useState } from "react";
import { getTasks, addTask, deleteTask } from "./api";

function App() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    useEffect(() => {
        loadTasks();
    }, []);

    const loadTasks = async () => {
        const data = await getTasks();
        setTasks(data);
    };

    const handleAddTask = async () => {
        if (newTask.trim()) {
            await addTask({ title: newTask, description: "Новая задача", completed: false });
            setNewTask("");
            loadTasks();
        }
    };

    const handleDeleteTask = async (id) => {
        await deleteTask(id);
        loadTasks();
    };

    return (
        <div style={{ padding: "20px", fontFamily: "Arial" }}>
            <h2>Список задач</h2>
            <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Добавить задачу..."
            />
            <button onClick={handleAddTask}>Добавить</button>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        {task.title} - {task.completed ? "✅" : "❌"}
                        <button onClick={() => handleDeleteTask(task.id)}>Удалить</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
