package com.example.labka7;

import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

public class LoginActivity extends AppCompatActivity {

    private EditText edUsername;
    private EditText edPassword;
    private Button btnLogin;
    private Button btnSignUp;

    private final String CREDENTIAL_SHARED_PREF = "our_shared_pref";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);

        edUsername = findViewById(R.id.ed_username);
        edPassword = findViewById(R.id.ed_password);
        btnLogin = findViewById(R.id.btn_login);
        btnSignUp = findViewById(R.id.btn_signup);

        btnSignUp.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(LoginActivity.this, SignUpActivity.class);
                startActivity(intent);
            }
        });

        btnLogin.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                // Получаем данные из SharedPreferences
                SharedPreferences credentials = getSharedPreferences(CREDENTIAL_SHARED_PREF, Context.MODE_PRIVATE);
                String strUsername = edUsername.getText().toString();

                // Извлекаем логин и пароль с суффиксом пользователя
                String strStoredUsername = credentials.getString("Username_" + strUsername, null);
                String strStoredPassword = credentials.getString("Password_" + strUsername, null);

                String password_from_ed = edPassword.getText().toString();

                // Проверяем, совпадают ли данные
                if (strStoredUsername != null && strStoredPassword != null && strStoredPassword.equals(password_from_ed)) {
                    // Успешный вход
                    Toast.makeText(LoginActivity.this, "Login Successful", Toast.LENGTH_SHORT).show();

                    // Переходим в MainActivity
                    Intent intent = new Intent(LoginActivity.this, MainActivity.class);
                    intent.putExtra("Username", strUsername);
                    intent.putExtra("Password", strStoredPassword);
                    startActivity(intent);
                    finish(); // Закрываем LoginActivity
                } else {
                    // Неудачный вход
                    Toast.makeText(LoginActivity.this, "Login Failed", Toast.LENGTH_SHORT).show();
                }
            }
        });


    }
}
