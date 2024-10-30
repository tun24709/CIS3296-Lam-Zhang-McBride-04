/**
 * Utility functions for other pages
 * @component
 * @module ParkUtils
 */

export async function randPark() {
    document.querySelector('#randButton').innerText="Loading...";
    try {
        const url = `https://developer.nps.gov/api/v1/parks?api_key=Y7kFnm6SP5SMQhkTvwUSgyjge9buj4DbjrkuV2S0&limit=471`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Unable to fetch parks');
        }
        const parks = await response.json();
        const randomPark = parks.data[Math.floor(Math.random()*parks.data.length)];

        console.log(randomPark);
        window.location.href = 'ParkInfo?parkCode=' + randomPark.parkCode;
    } catch (error) {
            console.log('Error Fetching parks: ', error.message);
    }
}