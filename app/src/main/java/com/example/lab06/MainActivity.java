package com.example.lab06;

import android.os.Bundle;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import java.util.ArrayList;
import java.util.List;

public class MainActivity extends AppCompatActivity {

    RecyclerView recyclerView;
    CountryAdapter countryAdapter;
    List<Country> countryList;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        recyclerView = findViewById(R.id.recyclerView);
        recyclerView.setHasFixedSize(true);
        recyclerView.setLayoutManager(new LinearLayoutManager(this));

        // Инициализация списка стран
        countryList = new ArrayList<>();
        countryList.add(new Country("China", "china", 1408000000));
        countryList.add(new Country("United States", "usa", 340000000));
        countryList.add(new Country("Russia", "russia", 146000000));

        // Создаем адаптер и передаем обработчик кликов
        countryAdapter = new CountryAdapter(this, countryList, new CountryAdapter.OnItemClickListener() {
            @Override
            public void onItemClick(Country country) {
                // Показать Toast с информацией о выбранной стране
                String message = "Selected: " + country.getCountryName() +
                        " (Population: " + country.getPopulation() + ")";
                Toast.makeText(MainActivity.this, message, Toast.LENGTH_SHORT).show();
            }
        });

        recyclerView.setAdapter(countryAdapter);
    }
}
