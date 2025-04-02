package com.example.labka7;

import android.os.Bundle;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {

    private TextView tvUsername;
    private TextView tvPassword;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        // Инициализируем TextView
        tvUsername = findViewById(R.id.tvUsername);
        tvPassword = findViewById(R.id.tvPassword);

        // Получаем данные из Intent
        String username = getIntent().getStringExtra("Username");
        String password = getIntent().getStringExtra("Password");

        // Устанавливаем данные в TextView
        tvUsername.setText("Username: " + username);
        tvPassword.setText("Password: " + password);
    }
}
