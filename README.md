# city-weather
This projects utilizes the OpenWeatherAPI to display the weather stats of any city of choice typed into the search bar. Due to the asynchronous nature of Javascript, only one function or action can be handles at a time. 

When the user enters in a value, or city name, into the search bar and presses the search button or return key, it will first trigger a function that will take that value into fetchWeather function. There the city name will be pinpointed by the API within the OpenWeather database. It will return a JSON stream that will completely read out the request and send that formatted data to the displayWeather function. 

displayWeather will single out the relevant data from the JSON in the form of variables and display them on the browser. This occurs thanks to DOM manipulation. There are also if/else statements to render a thermometer with various temperature levels to visually indicate the warmth or coldness of a city's current climate. 