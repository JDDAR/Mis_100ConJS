const apiKey = "4f8056ea82a29239c7936dc5c480fcb7";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".input__search");
const searchBtn = document.querySelector(".button__search");
const searchIcon = document.getElementsByClassName("fa-cloud-sun-rain")[0]; 

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  let dataWeather = await response.json();
  

  console.log(dataWeather);

  document.querySelector(".city").innerHTML = dataWeather.name;
  document.querySelector(".temp").innerHTML = Math.round(dataWeather.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML =dataWeather.main.humidity + "%";
  document.querySelector(".wind").innerHTML = dataWeather.wind.speed + "km/h";


  if (dataWeather.weather[0].main == "Clouds") {
    searchIcon.className = "fa-solid fa-cloud-sun"
  } else if (dataWeather.weather[0].main == "Clear"){ 
    searchIcon.className = "fa-solid fa-sun";
  }else if (dataWeather.weather[0].main == "Rain") { 
    searchIcon.className = "fa-solid fa-cloud-rain";
  }else if (dataWeather.weather[0].main == "Drizzle") {
    searchIcon.className = "fa-solid fa-cloud-sun-rain";
  }else if (dataWeather.weather[0].main == "Mist"){
    searchIcon.className = " fa-solid fa-cloud-meatball";
  }


}
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);

})







