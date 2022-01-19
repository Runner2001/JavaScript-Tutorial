const apikey = "p6hUZB752Hx8l3iJPR0YSY9rkxo7mNlo";


//Get City information
const getCity = async (city) => {
    const baseUrl = "http://dataservice.accuweather.com/locations/v1/cities/search";
    const query = `?apikey=${apikey}&q=${city}`;

    const response = await fetch(baseUrl + query);
    const data = await response.json();

    return data[0];
}


//Get Weather 
const getWeather = async (id) => {
    const baseUrl = "http://dataservice.accuweather.com/currentconditions/v1/";
    const query = `${id}?apikey=${apikey}`;

    const response = await fetch(baseUrl + query);
    const data = await response.json();

    return data[0];

}