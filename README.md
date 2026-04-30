# 🌾 pantaupadi

Website monitoring dan prediksi kondisi pertanian padi berbasis data iklim, produktivitas, dan hasil pemodelan.

Demo: https://pantaupadi.vercel.app/

---

## Deskripsi

**pantaupadi** adalah project web sederhana yang dibuat untuk membantu melihat kondisi pertanian padi dari beberapa sisi, seperti iklim, produktivitas, tren data, prediksi, dan potensi risiko.

Project ini menggunakan data berbentuk CSV yang sudah diproses terlebih dahulu melalui tahap cleaning, penggabungan dataset, feature engineering, modeling, evaluasi, sampai menghasilkan file prediksi yang ditampilkan di website.

Secara umum, project ini berisi dua bagian utama:

1. **Website**
   - Dibuat menggunakan HTML, CSS, dan JavaScript.
   - Berfungsi untuk menampilkan dashboard, peta, grafik, insight, dan hasil prediksi.

2. **Data & Modeling**
   - Berisi dataset mentah, dataset hasil cleaning, tabel fitur, tabel modeling, hasil evaluasi, dan hasil prediksi.

---

## Fitur Utama

### 1. Monitoring Data Padi

Menampilkan informasi terkait kondisi pertanian padi berdasarkan dataset yang sudah disiapkan.

Fitur ini dapat digunakan untuk melihat gambaran umum data seperti produktivitas, kondisi wilayah, dan data pendukung lainnya.

---

### 2. Visualisasi Tren

Website menyediakan tampilan tren agar perubahan data bisa lebih mudah dibaca.

Contohnya:
- tren produktivitas
- perubahan data dari waktu ke waktu
- perbandingan antar periode

---

4. Prediksi

Project ini memiliki hasil prediksi untuk periode mendatang.

File prediksi yang digunakan:

pantaupadi_prediksi_bulan_depan_2026.csv
pantaupadi_prediksi_mei_agustus_2026.csv

Prediksi ini digunakan untuk melihat kemungkinan kondisi padi pada bulan berikutnya atau beberapa bulan ke depan.

5. Analisis Risiko

Project ini juga menampilkan data risiko terbaru.

File yang digunakan:

pantaupadi_latest_risk_2026_final.csv
pantaupadi_latest_risk_2026_final_clean.csv

Bagian ini dapat digunakan untuk melihat wilayah atau periode yang memiliki potensi risiko lebih tinggi.

6. Halaman Insight dan Aksi

Halaman ini berisi informasi tambahan atau rekomendasi aksi berdasarkan hasil analisis.

File halaman:

pantauaksi.html
Struktur Project
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
├── pantaupadi_Feature.ipynb
│
├── pantaupadi_feature_table_final.csv
├── pantaupadi_feature_table_final_clean.csv
│
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

### 3. Visualisasi Peta

Terdapat halaman peta untuk menampilkan informasi secara spasial atau berdasarkan wilayah.

File halaman:
```text
pantaumap.html
