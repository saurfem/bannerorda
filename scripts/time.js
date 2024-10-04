let days = [
    'Жексенбі',
    'Дүйсенбі',
    'Сейсенбі',
    'Сәрсенбі',
    'Бейсенбі',
    'Жұма',//;жума сенбы куны нужны на случай если будем транслировать и в эти дни в целом так правильнее 09.09
    'Сенбі'
];

function getDate() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();

    if (hours < 10) {
        hours = '0' + hours;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    document.getElementById('time').innerHTML = hours + ':' + minutes

    let day = date.getDate()
    let month = date.getMonth()
    let day_name = date.getDay()

    // if (month < 10) {
    month = " " + (month + 1)
    // }
    if (day < 10) {
        day = "0" + day
    }

    document.getElementById("month_and_day").innerHTML = day + "." + month
    document.getElementById("day_name").innerHTML = days[day_name]
    document.getElementById("todyH2").innerHTML = day + "." + month


    fetch("https://api.openweathermap.org/data/2.5/weather?q=Kyzylorda&appid=129cd6575ed843916956115e12d474a1")
        .then(resp => { return resp.json() })
        .then(data => {

            let test = data.weather[0].description
            if (test == "clear sky") {
                test = "Ашық аспан"
            } else if (test == "few clouds") {
                test = "Аз булттар"
            } else if (test == "scattered clouds") {
                test = "Шашыранкы булттар"
            } else if (test == "broken clouds") {
                test = "Сыңған бұлттар"
            } else if (test == "shower rain") {
                test = "Жаңбыр"
            } else if (test == "rain") {
                test = "Жаңбыр"
            } else if (test == "thunderstorm") {
                test = "Найзағай"
            } else if (test == "snow") {
                test = "Қар"
            } else if (test == "mist") {
                test = "Тұман"
            }
            // кельвин

            document.getElementById('temp').innerHTML = (Math.floor(data.main.temp) - 273 + "°C")
           /*  document.getElementById('description').innerHTML = test */
         document.getElementById("temp_img").src = "./source/clouds icon/" + data.weather[0].icon + ".png"
        
        })
        .catch(() => {

        }
        )

}

// Обновляйте время каждую миллисекунду
getDate()
setInterval(getDate, 60000);


function whatsDas() {
    let day = new Date();

    async function fetchNumberFact() {
        const response = await fetch('http://numbersapi.com/' + (day.getMonth() + 1) + "/" + day.getDate() + "/date");
        console.log('http://numbersapi.com/' + (day.getMonth() + 1) + "/" + day.getDate() + "/date")
        const text = await response.text();
        document.getElementById("today").innerHTML = text
    }
    fetchNumberFact()
}

whatsDas()

setInterval(whatsDas, 900000)