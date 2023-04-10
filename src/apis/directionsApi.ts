import axios from 'axios';

const directionsApi = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params: {
        alternatives: false,
        geometries: 'geojson',
        overview: 'simplified',
        steps: false,
        access_token: 'pk.eyJ1IjoibWFudWVscmluY29uIiwiYSI6ImNrdmIwdnl4eTByNnQzMXQydGdpY3UzZm0ifQ.klRHSgeEFxS_d8GbqfmCmA'
    }
});

export default directionsApi;