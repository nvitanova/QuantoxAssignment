//--------------Data-----------------//
const weatherData = {
    tempUnit: 'C',
    windSpeedUnit: 'm/s',
    days: [
        {
            day: 'Mon',
            temp: 22,
            windDirection: 'north-east',
            windSpeed: 10 ,
            type: 'sunny'
        },
        {
            day: 'Tue',
            temp: 14,
            windDirection: 'north-west',
            windSpeed: 14,
            type: 'rainy'
        },
        {
            day: 'Wed',
            temp: 17,
            windDirection: 'south-east',
            windSpeed: 20,
            type: 'cloudy'
        },
        {
            day: 'Thu',
            temp: 18,
            windDirection: 'north-east',
            windSpeed: 20,
            type: 'sunny'
        },
        {
            day: 'Fri',
            temp: 13,
            windDirection: 'south-west',
            windSpeed: 20,
            type: 'rainy'
        }
    ]
};

//--------------Listeners-----------------//

window.addEventListener('load', () => {
    //--------------Variables-----------------//
    var detailButtons = document.getElementsByClassName('showDetails');
    var daysHolder = document.getElementById("daysCards");
    var temps = daysHolder.getElementsByClassName('temperature-holder');
    var icon = daysHolder.getElementsByClassName('weather-icon');


    //--------------Adding temperatures to list items on window load-----------------//
    Array.from(temps).forEach((el, i) => {
        el.innerHTML = weatherData.days[i].temp + "°C";
    })

})

detailButtons.addEventListener('click', () => {
    
})


