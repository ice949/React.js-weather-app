import axios from "axios";

export const getWeatherByCityName = async(cityName, setCityWeatherData) => {
    // e.preventDefault();
    const options = {
        method: 'GET',
        url: `https://weather-api-by-any-city.p.rapidapi.com/weather/${cityName}`,
        headers: {
            'X-RapidAPI-Key': 'a1365aeac0mshe6f88266ac87686p191882jsn5beb1c0e8d9d',
            'X-RapidAPI-Host': 'weather-api-by-any-city.p.rapidapi.com'
          }
      };
      
      try {
          const response = await axios.request(options);
          setCityWeatherData(response.data);
          console.log(response.data);
      } catch (error) {
          console.error(error);
      }
}