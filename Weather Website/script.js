var locationBox = document.getElementById("locationBox");
var weatherBox = document.getElementById("weatherBox");
locationBox.style.display = "flex";
weatherBox.style.display = "none";

locationBox.style.transition = "0.6s ease-out";
locationBox.style.transform = "translateY(10px)";

const search = document.getElementById("searchBtn");

search.addEventListener("click", () => {
  locationBox.style.display = "none";
  weatherBox.style.display = "flex";
  const APIKey = "";
  const city = document.getElementById("search").value;

  if (city === "") return;

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`
  )
    .then((response) => response.json())
    .then((json) => {
      const image = document.getElementById("weather-icon");
      const temperature = document.getElementById("temp");
      const weather = document.getElementById("weather");
      const location = document.getElementById("location");
      const wind = document.getElementById("wind");
      const humidity = document.getElementById("humidity");

      switch (json.weather[0].main) {
        case "Clear":
          image.src = "images/001-cloudy.png";
          break;
        case "Clouds":
          image.src = "images/001-cloudy.png";
          break;
        case "Rain":
          image.src = "images/004-rain.png";
          break;
        case "Snow":
          image.src = "images/008-weather.png";
          break;
        case "Thunderstorm":
          image.src = "images/010-thunderstorm.png";
          break;
        case "Drizzle":
          image.src = "images/005-thunder.png";
          break;

        default:
          image.src = "images/001-cloudy.png";
          break;
      }

      temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
      weather.innerHTML = `${json.weather[0].main}`;
      location.innerHTML = `${json.name}, ${json.sys.country}`;

      description.innerHTML = `${json.weather[0].description}`;
      humidity.innerHTML = `${json.main.humidity}%`;
      wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;
    });
});
