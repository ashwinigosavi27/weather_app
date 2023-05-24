//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}


const weatherApi ={
    key: "62b55f1ac3bcbe1edcbfb74bc7609d55",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather?"
}

const searchInputbox = document.getElementById('Input-box');
//Annoymose function call and create event linstener(using keyperss) function
searchInputbox = addEventListener('keypress', (event) =>{

    if(event.keyCode ==13){
    console.log(searchInputbox.value);
    getWeatherReport(searchInputbox.value);
    document.querySelector('weather-body').style.display = "block";
    }


})


//get weather report function
function getWeatherReport(city){
    fetch(`$(weatherApi.baseUrl)?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather =>{
        return weather.json();
    }).then(showWeatherReport);
};


//show weather report code function
function showWeatherReport(weather){
    console.log(weather);

    let city = document.getElementById('city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let temp = document.getElementById('temp');
    temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C;`;

    let minMaxTemp = document.getElementById('min-max');
    minMaxTemp.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C (min)/${Math.ceil(weather.main.temp_max)}&deg;C (max)`;

    let weatherType = document.getElementById('weather');
    weather.innerText = `${weather.weather[0].main}`;

    let data = document.getElementById('date');
    let todayDate = new Date();

    data.innerText = dataManage(todayDate);

    if(weatherType.textContent == 'clear'){
        document.body.style.backgroundImage = "url(img/clear.jpg)";

    }else if(weatherType.textContent == 'clouds'){
        document.body.style.backgroundImage = "url(img/cloude.jpg)";
        
    }else if(weatherType.textContent == 'rain'){
        document.body.style.backgroundImage = "url(img/rain.jpg)";
        
    }else if(weatherType.textContent == 'snow'){
        document.body.style.backgroundImage = "url(img/snow.jpg)";
        
    }else if(weatherType.textContent == 'sunny'){
        document.body.style.backgroundImage = "url(img/sunny.jpg)";
        
    }else if(weatherType.textContent == 'thunderstrom'){
        document.body.style.backgroundImage = "url(img/thunderstrom3.jpg)";
        
    }

}


//date manage function
function dataManage(dateArg){
    let days = ["sunday", "Monday", "wednesday", "thursday", "friday", "saturday"];

    let months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];

    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let data = dateArg.getDate();
    let day = days[dateArg.getDate()];

    return `${date} ${month} (${day}), ${year}`;

}





