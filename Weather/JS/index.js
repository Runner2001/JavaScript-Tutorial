const input = document.querySelector('.input');
const text = document.querySelector('.text');
const card = document.querySelector('.card');
const time = document.querySelector('.now-time');
const icon = document.querySelector('.icon');

const updateCity = async (city) => {
    const cityDeatil = await getCity(city);
    const weather = await getWeather(cityDeatil.Key);

    return { cityDeatil, weather };
}

input.addEventListener('submit', e => {

    e.preventDefault();

    const city = input.city.value.trim();
    input.reset();

    updateCity(city.toLowerCase())
        .then(data => {
            Ui(data);
            console.log(data);
        })
        .catch(error => {
            console.log(error);
        })

})

const Ui = (data) => {
    const city = data.cityDeatil;
    const weather = data.weather;

    //object destructure form
    // const {cityDeatil, weather} = data;

    text.innerHTML = `
           <h3
            class="text-lg tracking-widest font-semibold text-blue-800 uppercase"
          >
            ${city.EnglishName}
          </h3>
          <div class="text-3xl font-semibold m-4">${weather.WeatherText}</div>
          <div class="data">
            <h4 class="text-lg">Temperature</h4>
            <h4 class="text-2xl font-semibold text-blue-800"> ${weather.Temperature.Metric.Value} &deg;C</h4>
          </div>
    `;

    //image set
    weather.IsDayTime ? time.setAttribute('src', './day.svg') : time.setAttribute('src', './night.svg');

    //icons set
    icon.setAttribute('src', `./icons/${weather.WeatherIcon}.svg`);

    //card hidden and show
    (card.classList.contains('hidden') && card.classList.remove("hidden"))

}