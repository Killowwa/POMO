package com.example.labka6;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.recyclerview.widget.RecyclerView;

import java.util.List;

public class CountryAdapter extends RecyclerView.Adapter<CountryAdapter.ViewHolder> {

    private List<Country> countryList;
    private Context context;
    private OnItemClickListener listener;


    public interface OnItemClickListener {
        void onItemClick(Country country);
    }


    public CountryAdapter(Context context, List<Country> countryList, OnItemClickListener listener) {
        this.context = context;
        this.countryList = countryList;
        this.listener = listener;
    }

    @Override
    public ViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext())
                .inflate(R.layout.item_row, parent, false);
        return new ViewHolder(view);
    }

    @Override
    public void onBindViewHolder(ViewHolder holder, int position) {
        Country country = countryList.get(position);
        holder.countryName.setText(country.getCountryName());
        holder.population.setText("Population: " + country.getPopulation());


        int imageId = context.getResources().getIdentifier(
                country.getFlagName(), "mipmap", context.getPackageName());
        holder.flag.setImageResource(imageId);


        holder.itemView.setOnClickListener(v -> {
            if (listener != null) {
                listener.onItemClick(country);
            }


            v.animate()
                    .scaleX(0.97f)
                    .scaleY(0.97f)
                    .setDuration(100)
                    .withEndAction(() -> {
                        v.animate()
                                .scaleX(1f)
                                .scaleY(1f)
                                .setDuration(100)
                                .start();
                    })
                    .start();
        });

    }

    @Override
    public int getItemCount() {
        return countryList.size();
    }


    public static class ViewHolder extends RecyclerView.ViewHolder {
        ImageView flag;
        TextView countryName, population;

        public ViewHolder(View itemView) {
            super(itemView);
            flag = itemView.findViewById(R.id.imageView_flag);
            countryName = itemView.findViewById(R.id.textView_countryName);
            population = itemView.findViewById(R.id.textView_population);
        }
    }
}
