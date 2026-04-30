function loadCSV(path) {
  return new Promise((resolve) => {
    Papa.parse(path, {
      download: true,
      header: true,
      complete: function (results) {
        resolve(results.data);
      },
    });
  });
}

async function loadData() {
  const current = await loadCSV("data/pantaupadi_prediksi_bulan_depan_2026.csv");
  const prediction = await loadCSV("data/pantaupadi_prediksi_mei_agustus_2026.csv");

  const cleanCurrent = current.filter((d) => d.wilayah);
  const cleanPrediction = prediction.filter((d) => d.wilayah);

  const data = { current: cleanCurrent, prediction: cleanPrediction };

  if (typeof window.onDataLoad === "function") {
    window.onDataLoad(data);
  }

  return data;
}

// Auto start
loadData();
