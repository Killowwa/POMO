package org.example;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication
@CrossOrigin(origins = "http://localhost:3000")  // Разрешаем запросы с React
public class App {
    public static void main(String[] args) {
        SpringApplication.run(App.class, args);
    }
}
