import axios from 'axios';

const API_BASE_URL = "http://localhost:8080"; // Адрес твоего бэкенда

export const getTasks = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/tasks`);
        return response.data;
    } catch (error) {
        console.error("Ошибка при загрузке задач:", error);
        return [];
    }
};

export const addTask = async (task) => {
    try {
        await axios.post(`${API_BASE_URL}/tasks`, task, {
            headers: { "Content-Type": "application/json" }
        });
    } catch (error) {
        console.error("Ошибка при добавлении задачи:", error);
    }
};

export const deleteTask = async (taskId) => {
    try {
        await axios.delete(`${API_BASE_URL}/tasks/${taskId}`);
    } catch (error) {
        console.error("Ошибка при удалении задачи:", error);
    }
};

export const updateTask = async (id, task) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/tasks/${id}`, task, {
            headers: { "Content-Type": "application/json" }
        });
        return response.data;
    } catch (error) {
        console.error("Ошибка при обновлении задачи:", error);
        return null;
    }
};
