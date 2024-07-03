function getPrediction(name) {
  const occupations = ['Programmer', 'Designer', 'Dokter', 'Guru', 'Pengusaha'];
  const randomAge = Math.floor(Math.random() * 50) + 18; // Usia antara 18 hingga 67
  const randomOccupation = occupations[Math.floor(Math.random() * occupations.length)];

  return {
    name: name,
    age: randomAge,
    occupation: randomOccupation,
    // Tambahkan detail lain yang diinginkan
  };
}

module.exports = { getPrediction };
