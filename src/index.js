import weather from "./apiFunctions";
import view from "./domFunctions";

weather.getForecast("Singapore");

const handleSearch = async (input) => {
  const location = weather.processFormData(input);
  const weatherData = await weather.getForecast(location);
  console.log(weatherData);
};

const searchInput = document.getElementById("location-search");
searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    handleSearch(e.target);
  }
});
