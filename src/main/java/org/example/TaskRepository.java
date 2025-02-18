package org.example;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository  // <--- ПОМЕЧАЕМ КАК РЕПОЗИТОРИЙ
public interface TaskRepository extends JpaRepository<Task, Long> {
    // Здесь можно добавить кастомные запросы
}
