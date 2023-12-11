const getForecast = async (location) => {
  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=af2f62539eb34d9ab3e195115232611&q=${location}&days=3`,
    { mode: "cors" }
  );
  const weatherData = await response.json();
  return weatherData;
};

export { getForecast };
