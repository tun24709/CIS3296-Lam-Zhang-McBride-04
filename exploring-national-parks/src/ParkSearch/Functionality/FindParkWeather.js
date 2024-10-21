export const FindParkWeather = async (latitude, longitude) => {
    try{
        const apiKey = process.env.REACT_APP_TOKEN; //gets API key from .env
        //get latitude and longitude from parkCode

        const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly&appid=ef16cbd8cd23122b01c5a72c9e22fb79`;
        const response = await fetch(url);
        console.log({apiKey});
        if(!response.ok){
            throw new Error('Network response was not ok');
        }
        const json = await response.json();
        console.log(json);
        return json;
    }catch (error){
        console.error(error.message);
        throw error;
    }
}