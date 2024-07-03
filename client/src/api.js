export const getPrediction = async (name) => {
  const response = await fetch(`http://localhost:5000/predict?name=${name}`);
  const data = await response.json();
  return data;
};
