# 🌾 pantaupadi

Website monitoring dan prediksi kondisi pertanian padi berbasis data iklim, produktivitas, dan hasil pemodelan.

🔗 https://pantaupadi.vercel.app/

---

## Deskripsi

pantaupadi adalah project eksplorasi data pertanian padi yang fokus pada analisis hubungan antara kondisi iklim, produktivitas, dan risiko pertanian.

Selain monitoring, project ini juga melakukan prediksi kondisi padi untuk beberapa periode ke depan menggunakan pipeline data science sederhana.

Project ini terdiri dari:
- Website (visualisasi & dashboard)
- Data processing & modeling (notebook)
- Dataset hasil olahan (CSV)

---

## Fitur

- Monitoring kondisi padi
- Visualisasi tren data
- Visualisasi peta
- Analisis risiko
- Prediksi bulan depan
- Prediksi multi bulan
- Halaman insight / aksi

---

## Struktur Project

```
   pantaupadi/
│
├── index.html
├── pantauaksi.html
├── pantauburamalan.html
├── pantaumap.html
├── pantaurawan.html
├── pantaurend.html
│
├── app.js
├── style.css
│
├── final_iklim.csv
├── full_dataset.csv
├── mergepadi.csv
├── produktivias.csv
│
├── PantauPadi_EDA.ipynb
├── pantaupadi_Feature.ipynb
├── PantauPadi_Modeling.ipynb
├── 04_PantauPadi_Forecast.ipynb
│
├── pantaupadi_feature_table_final.csv
├── pantaupadi_feature_table_final_clean.csv
├── pantaupadi_modeling_table_final.csv
├── pantaupadi_modeling_table_final_clean.csv
├── pantaupadi_evaluasi_multi_horizon.csv
│
├── pantaupadi_prediksi_bulan_depan_2026.csv
├── pantaupadi_prediksi_mei_agustus_2026.csv
│
├── pantaupadi_latest_risk_2026_final.csv
├── pantaupadi_latest_risk_2026_final_clean.csv
│
└── README.md

````


---

## Alur Project
```
Data mentah
↓
EDA
↓
Cleaning & Feature Engineering
↓
Modeling & Evaluasi
↓
Forecast / Prediksi
↓
Visualisasi di Website
```


---

## Penjelasan Dataset (CSV)

### 1. Dataset Awal

#### `final_iklim.csv`
Berisi data kondisi iklim yang digunakan dalam analisis.

Biasanya mencakup:
- curah hujan
- suhu
- kelembaban
- parameter iklim lainnya

Digunakan sebagai variabel utama yang mempengaruhi produktivitas padi.

---

#### `produktivias.csv`
Berisi data hasil panen atau produktivitas padi.

Digunakan untuk:
- target variabel dalam modeling
- analisis tren produksi

---

#### `mergepadi.csv`
Dataset hasil penggabungan antara:
- data iklim
- data produktivitas

Digunakan sebagai dataset awal sebelum dilakukan feature engineering.

---

#### `full_dataset.csv`
Dataset gabungan yang lebih lengkap setelah preprocessing awal.

Biasanya sudah:
- lebih bersih
- siap untuk tahap feature engineering

---

### 2. Feature Engineering

#### `pantaupadi_feature_table_final.csv`
Dataset hasil feature engineering.

Berisi:
- variabel asli + variabel turunan
- fitur tambahan untuk meningkatkan performa model

---

#### `pantaupadi_feature_table_final_clean.csv`
Versi clean dari feature table.

Biasanya sudah:
- tanpa missing value
- tanpa noise
- siap masuk ke modeling

---

### 3. Modeling

#### `pantaupadi_modeling_table_final.csv`
Dataset yang digunakan langsung untuk training model.

Biasanya:
- sudah difilter
- sudah disesuaikan dengan kebutuhan model

---

#### `pantaupadi_modeling_table_final_clean.csv`
Versi bersih dari dataset modeling.

Digunakan untuk memastikan:
- kualitas data lebih stabil
- hasil model lebih konsisten

---

#### `pantaupadi_evaluasi_multi_horizon.csv`
Berisi hasil evaluasi model untuk beberapa horizon waktu.

Digunakan untuk:
- membandingkan performa model
- melihat akurasi prediksi jangka pendek vs panjang

---

### 4. Prediksi

#### `pantaupadi_prediksi_bulan_depan_2026.csv`
Berisi hasil prediksi untuk bulan berikutnya.

Digunakan di website untuk:
- menampilkan kondisi mendatang secara langsung

---

#### `pantaupadi_prediksi_mei_agustus_2026.csv`
Berisi prediksi untuk beberapa bulan ke depan (multi horizon).

Digunakan untuk:
- analisis jangka menengah
- melihat tren prediksi

---

### 5. Risiko

#### `pantaupadi_latest_risk_2026_final.csv`
Berisi data risiko terbaru.

Digunakan untuk:
- identifikasi wilayah rawan
- analisis potensi masalah

---

#### `pantaupadi_latest_risk_2026_final_clean.csv`
Versi clean dari data risiko.

Digunakan untuk:
- visualisasi yang lebih stabil
- analisis lanjutan

---

## Notebook Pipeline

### EDA → `PantauPadi_EDA.ipynb`
Eksplorasi data awal:
- distribusi
- pola
- missing value

---

### Feature Engineering → `pantaupadi_Feature.ipynb`
- cleaning
- transformasi data
- pembuatan fitur baru

---

### Modeling → `PantauPadi_Modeling.ipynb`
- training model
- evaluasi performa

---

### Forecast → `04_PantauPadi_Forecast.ipynb`
- generate prediksi
- multi horizon forecasting

---
