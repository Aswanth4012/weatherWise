const apiKey =  "2f26bb8011e44c6b276d7bb046124461";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

var cityNamer = document.querySelector(".search input").value;
console.log(cityNamer);

const weatherIcon = document.querySelector(".Weather-icon");
/*const weatherCard = document.querySelector(".Weather");*/



async function checkWeather(city){
    const respons = await fetch(apiUrl + `&appid=${apiKey}` + `&q=${city}`);
    var data = await respons.json();

    console.log(data);

    if(data.cod == "404"){
        document.querySelector(".warning").style.display = "block";
    }else{

        document.querySelector(".warning").style.display = "none";

        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + " Km/h";
        document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
        document.querySelector(".city").innerHTML = city;

        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "Images/images/clouds.png" ;
        }else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "Images/images/clear.png";
        }else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "Images/images/drizzle.png";
        }else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "Images/images/mist.png";
        }else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "Images/images/rain.png";
        }else if(data.weather[0].main == "Snow"){
            weatherIcon.src = "Images/images/snow.png";
        }

        document.querySelector(".Weather").style.display = "block";
    }
}

function searchCity(){

    var city = document.querySelector(".search input").value;
    console.log(city)
    checkWeather(city); 

}