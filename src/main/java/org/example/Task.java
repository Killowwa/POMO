package org.example;

import jakarta.persistence.*;

@Entity  // ДЕЛАЕТ КЛАСС СУЩНОСТЬЮ ДЛЯ БД
@Table(name = "tasks")  // НАЗВАНИЕ ТАБЛИЦЫ В БД
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)  // АВТОИНКРЕМЕНТ ID
    private Long id;

    @Column(nullable = false)
    private String title;

    private String description;

    private boolean completed;

    private String status;

    // ✅ Пустой конструктор для Hibernate
    public Task() {}

    // ✅ Конструктор с параметрами
    public Task(String title, String description, boolean completed, String status) {
        this.title = title;
        this.description = description;
        this.completed = completed;
        this.status = status;
    }

    // ✅ Геттеры и сеттеры
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public boolean isCompleted() { return completed; }
    public void setCompleted(boolean completed) { this.completed = completed; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
}
