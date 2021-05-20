let weather  = {
    apiKey: "e7bbb3b21a40818a26a279ac70c9ba94",
    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
        + city 
        + "&units=imperial&appid=" 
        + this.apiKey
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name,icon,description,temp,humidity,speed);
        document.querySelector(".city").innerText ="Weather in " + name; 
        document.querySelector(".temp").innerText = temp + "  Degrees Farenheit";
        if (temp > 80) {
            document.querySelector('.thermo').src = 'icons/hottemp.png';
            document.querySelector('.thermo').style.display = "inline";
        } else if (temp < 80 && temp > 60) {
            document.querySelector('.thermo').src = 'icons/averagetemp.png';
            document.querySelector('.thermo').style.display = "inline";
        } else {
            document.querySelector('.thermo').src = 'icons/coldthermo.png';
            document.querySelector('.thermo').style.display = "inline";
        };
        document.querySelector(".desc").innerText = description;
        document.querySelector(".hum").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speed: " + speed + " km/h";
    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    },
};

document.querySelector(".search button").onclick = function () {
    weather.search();
};

document.querySelector(".search-bar").addEventListener("keyup", function(e) {
    if (e.keyCode === 13) {
        document.querySelector(".search button").click();
    }
});

    
