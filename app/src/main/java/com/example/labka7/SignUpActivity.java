package com.example.labka7;

import android.content.Context;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

import androidx.appcompat.app.AppCompatActivity;

public class SignUpActivity extends AppCompatActivity {

    private EditText edUsername;
    private EditText edPassword;
    private EditText edConfirmPassword;
    private Button btnCreateUser;

    private final String CREDENTIAL_SHARED_PREF = "our_shared_pref";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_sign_up);

        edUsername = findViewById(R.id.ed_username);
        edPassword = findViewById(R.id.ed_password);
        edConfirmPassword = findViewById(R.id.ed_confirm_pwd);
        btnCreateUser = findViewById(R.id.btn_create_user);

        btnCreateUser.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                String strPassword = edPassword.getText().toString();
                String strConfirmPassword = edConfirmPassword.getText().toString();
                String strUsername = edUsername.getText().toString();

                // Сравниваем пароли
                if (strPassword != null && strConfirmPassword != null && strPassword.equalsIgnoreCase(strConfirmPassword)) {
                    // Получаем SharedPreferences для хранения данных
                    SharedPreferences credentials = getSharedPreferences(CREDENTIAL_SHARED_PREF, Context.MODE_PRIVATE);

                    // Редактируем SharedPreferences для конкретного пользователя
                    SharedPreferences.Editor editor = credentials.edit();
                    editor.putString("Username_" + strUsername, strUsername);  // Сохраняем логин с суффиксом
                    editor.putString("Password_" + strUsername, strPassword);  // Сохраняем пароль с суффиксом
                    editor.apply();  // Применяем изменения

                    // Завершаем активность, чтобы вернуться на экран логина
                    SignUpActivity.this.finish();
                }
            }
        });

    }
}
