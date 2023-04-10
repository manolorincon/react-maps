import axios from 'axios';

const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 5,
        language: 'es',
        access_token: 'pk.eyJ1IjoibWFudWVscmluY29uIiwiYSI6ImNrdmIwdnl4eTByNnQzMXQydGdpY3UzZm0ifQ.klRHSgeEFxS_d8GbqfmCmA'
    }
});

export default searchApi;