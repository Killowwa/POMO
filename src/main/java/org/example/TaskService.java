package org.example;

import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class TaskService {
    private final TaskRepository repository;

    public TaskService(TaskRepository repository) {
        this.repository = repository;
    }

    public List<Task> getAllTasks() {
        return repository.findAll();
    }

    public Task addTask(Task task) {
        task.setStatus("Назначено"); // ✅ Новая задача всегда "Назначено"
        return repository.save(task);
    }

    public Optional<Task> updateTask(Long id, Task updatedTask) {
        return repository.findById(id).map(task -> {
            task.setTitle(updatedTask.getTitle());
            task.setCompleted(updatedTask.isCompleted());
            task.setStatus(updatedTask.getStatus()); // ✅ Обновляем статус
            return repository.save(task);
        });
    }

    public boolean deleteTask(Long id) {
        if (repository.existsById(id)) {
            repository.deleteById(id);
            return true;
        }
        return false;
    }
}
