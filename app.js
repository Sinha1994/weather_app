let country = document.querySelector(".location-timezone");
let temp = document.querySelector(".degree");
let date = document.querySelector(".temperature-date");
let desc = document.querySelector(".temperature-desc");
let icon = document.querySelector("img");
window.addEventListener("load", () => {
  let apiKey = "ea775b8747af83ea07faf29ccd22c6a6";
  let region = "London";
  getWeather(apiKey, region);
});
const getWeather = function (apiKey, region) {
  fetch(
    `http://api.weatherstack.com/current?access_key=${apiKey}&query=${region}`
  )
    .then((res) => res.json())
    .then((weather) => {
      country.innerHTML = weather.request.query;
      temp.innerHTML = weather.current.temperature;
      date.innerHTML = weather.location.localtime.split(" ")[0];
      SetIcons(weather.current.weather_descriptions[0]);
    })
    .catch((err) => console.log(err));
};
const SetIcons = function (weather) {
  let icon = document.querySelector("img");
  if (weather.includes("rain") || weather.includes("Rain")) {
    icon.setAttribute("src", "images/rainy.svg");
  } else if (weather.includes("cloud") || weather.includes("Cloud")) {
    icon.setAttribute("src", "images/cloudy.svg");
  } else if (weather.includes("snow") || weather.includes("Snow")) {
    icon.setAttribute("src", "images/snowy.svg");
  } else if (weather.includes("thunder") || weather.includes("Thunder")) {
    icon.setAttribute("src", "images/thunder.svg");
  } else {
    icon.setAttribute("src", "images/sunny.svg");
  }
};
