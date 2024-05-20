// api to get weather data using curl --request GET --url 'https://api.tomorrow.io/v4/weather/forecast?location=42.3478,-71.0466&apikey=2lh0aJsanOYnog8NbORE7qrD3SrKFsUD'

apikey = "2lh0aJsanOYnog8NbORE7qrD3SrKFsUD";
latitude = "42.3478";
longitude = "-71.0466";
url =
  "https://api.tomorrow.io/v4/weather/forecast?location=" +
  latitude +
  "," +
  longitude +
  "&apikey=" +
  apikey;

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    // print the temperature
    console.log(data.timelines.daily[0].values.temperatureAvg);
  })
  .catch((err) => {
    console.log(err);
  });

// Path: Weather%20Website/script.js
