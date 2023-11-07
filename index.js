const temperaturefield = document.querySelector(".weather1");
const cityfield = document.querySelector(".weather2 p");
const datefield = document.querySelector(".weather2 span");
const emojifield = document.querySelector(".weather3 img");
const weatherfield = document.querySelector(".weather3 span");
const searchfield = document.querySelector(".searchField");
const form = document.querySelector("form");
let target = "New Delhi";


const fetchData = async (target) => {


    try {

        const url = `https://api.weatherapi.com/v1/current.json?key=eb9328722ff24a05aea63226230709&q=${target}`
        const response = await fetch(url);
        const data = await response.json();
        updateDom(data.current.temp_c, data.location.name, data.location.localtime, data.current.condition.icon, data.current.condition.text);
        // console.log(data);

    } catch (error) {

        alert("Location Not Found");

    }
}

function updateDom(temp, city, time, emoji, text) {

    temperaturefield.innerText = temp;
    cityfield.innerText = city;
    emojifield.src = emoji;
    weatherfield.innerText = text;

    const exactTime = time.split(" ");
    const exactDay = new Date(exactTime).getDay();
    const day = getDayName(exactDay);
    datefield.innerText = `${exactTime[1]} - ${day} ${exactTime[0]}`

}
fetchData(target);

function getDayName(exactDay) {

    switch (exactDay) {
        case 0:
            return "Sunday";
            break;
        case 1:
            return "Monday";
            break;
        case 2:
            return "Tuesday";
            break;
        case 3:
            return "Wednesday";
            break;
        case 4:
            return "Thrusday";
            break;
        case 5:
            return "Friday";
            break;
        case 6:
            return "Saturday";
            break;
        default:
            break;
    }
}

const search = (e) => {

    e.preventDefault();
    target = searchfield.value;
    fetchData(target);

}

form.addEventListener("submit", search);