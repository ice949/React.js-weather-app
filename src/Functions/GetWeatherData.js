import axios from "axios";

export const getWeatherByCityName = async(cityName, setCityWeatherData) => {
    // e.preventDefault();
    const options = {
        method: 'GET',
        url: `https://open-weather13.p.rapidapi.com/city/${cityName}`,
        headers: {
          'X-RapidAPI-Key': 'a1365aeac0mshe6f88266ac87686p191882jsn5beb1c0e8d9d',
          'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
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