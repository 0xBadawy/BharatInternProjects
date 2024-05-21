var locationBox = document.getElementById("locationBox");
var weatherBox = document.getElementById("weatherBox");
locationBox.style.display = "flex";
weatherBox.style.display = "none";

locationBox.style.transition = "0.6s ease-out";
locationBox.style.transform = "translateY(10px)";

const search = document.getElementById("searchBtn");

search.addEventListener("click", () => {
  weatherBox.onclick = () => {
    locationBox.style.display = "flex";
    weatherBox.style.display = "none";
  };

  locationBox.style.display = "none";
  weatherBox.style.display = "flex";
  const APIKey = "ae351d66e085e182fb4d94b86ff0663e";
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
          image.src = "images/sun.png";
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
        case "Sunny":
          image.src = "images/005-thunder.png";
          break;

        default:
          image.src = "images/001-cloudy.png";
          break;
      }

      weather.innerHTML = `${json.weather[0].main}`;
      location.innerHTML = `${json.name}, ${json.sys.country}`;
      temperature.innerHTML = `${parseInt(json.main.temp)}`;
      humidity.innerHTML = `${json.main.humidity}%`;
      wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

      // Add transaction animation on card
      weatherBox.style.transition = "0.6s ease-out";
      weatherBox.style.transform = "translateY(10px)";
    });
});

onkeydown = (e) => {
  if (e.key === "Enter") {
    search.click();
  }
};
