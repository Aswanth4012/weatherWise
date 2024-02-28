const apiKey =  "2f26bb8011e44c6b276d7bb046124461";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

var cityNamer = document.querySelector(".search input").value;
console.log(cityNamer);

async function checkWeather(city){
    const respons = await fetch(apiUrl + `&appid=${apiKey}` + `&q=${city}`);
    var data = await respons.json();

    console.log(data);

    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + " Km/h";
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
    document.querySelector(".city").innerHTML = city;
}

function searchCity(){

    var city = document.querySelector(".search input").value;
    console.log(city)
    checkWeather(city);

}