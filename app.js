const API_KEY = `96055aabc308f91507bdc69134473a1d`
const form = document.querySelector("form")
const weather = document.querySelector("#weather")
const search = document.querySelector("#search")


const getWeather = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response = await fetch(url);
    // console.log(response);
    const data = await response.json()
    return showWeather(data);
}

const showWeather = (data) => {
    console.log(data);
    if(data.cod == "404"){
        weather.innerHTML = `<h2> City Not Found </h2>`
        cityName.innerText = `Search Another City`
        return;
    }
    weather.innerHTML = 
    `
    <div>
        <img src="https:openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
    </div>
    <div>
        <h2>${data.main.temp} &#8451;</h2>
        <h4>${data.weather[0].main}</h4>
    </div>
    `
    cityName.innerText = `Weather of ${data.name}`
}

form.addEventListener("submit", (event) => {
    getWeather(search.value);
    search.value = "";
    event.preventDefault();
})