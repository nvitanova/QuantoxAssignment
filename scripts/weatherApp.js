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

//--------------On Window Load-----------------//
window.addEventListener('load', () => {

    //--------------Variables-----------------//
    var detailButtons = document.getElementsByClassName('showDetails');
    var daysHolder = document.getElementById("daysCards");
    var tempsCards = daysHolder.getElementsByClassName('temperature-holder');
    var widget = document.getElementById("widget");

    //-----------Loading Placeholders------------//
    var iconPlaceholder = document.getElementById('widget-icon-ph');
    var titlePlaceholder = document.getElementById('widget-title-ph');
    var tempPlaceholder = document.getElementById('widget-temperature-ph');
    var typePlaceholder = document.getElementById('widget-type-ph');
    var windIconPlaceholder = document.getElementById('widget-wind-icon-ph');
    var windSpeedPlaceholder = document.getElementById('widget-speed-ph');
    console.log(titlePlaceholder);


    //--------------Adding temperatures to list items on window load-----------------//
    Array.from(tempsCards).forEach((el, i) => {
        el.innerHTML = weatherData.days[i].temp + "°C";
    })


    //--------------Listeners-----------------//
    Array.from(detailButtons).forEach(button => {
        button.addEventListener('click', () => {
            if (widget.hidden === true){
            widget.hidden = false;
            } 


            let dayClicked = button.closest("li").id;
            let widgetData = weatherData.days.filter(el => el.day.toLowerCase() === dayClicked)

            //----Setting icon according to type-----//
            if(widgetData[0].type === 'rainy'){

                iconPlaceholder.src = './img/iconfinder_Raining_5729383.png';
            } else if (widgetData[0].type === 'sunny') {
                iconPlaceholder.src = './img/iconfinder_Sunny_5729378.png';
            } else {
                iconPlaceholder.src = './img/iconfinder_Cloudy_Sunny_5729392.png';
            }

            //----Setting Title according to day-----//
            switch(dayClicked){
                case 'mon': titlePlaceholder.innerHTML = "Monday"; break;
                case 'tue': titlePlaceholder.innerHTML = "Tuesday"; break;
                case 'wed': titlePlaceholder.innerHTML = "Wednesday"; break;
                case 'thu': titlePlaceholder.innerHTML = "Thursday"; break;
                case 'fri': titlePlaceholder.innerHTML = "Friday"; break;
            }

            //----Setting Temperature according to day-----//
            tempPlaceholder.innerHTML = widgetData[0].temp + "°C";

            //----Setting Type according to day-----//
            typePlaceholder.innerHTML = widgetData[0].type.charAt(0).toUpperCase() + widgetData[0].type.slice(1);

            //-----Setting wind direction icon according to wind------//
            let windDirection = widgetData[0].windDirection;
            switch(windDirection){
                case 'north-east': windIconPlaceholder.src = "./img/iconfinder_location-arrow_216279-north-east.png"; break;
                case 'north-west': windIconPlaceholder.src = "./img/iconfinder_location-arrow_216279-northwest.png"; break;
                case 'south-east': windIconPlaceholder.src = "./img/iconfinder_location-arrow_216279-south-east.png"; break;
                case 'south-west': windIconPlaceholder.src = "./img/iconfinder_location-arrow_216279-southwest.png"; break;
            }

             //-----Setting wind speed------//
             windSpeedPlaceholder.innerHTML = widgetData[0].windSpeed + " ";
              
        })
    })

})
