import { GET_CITY_WEATHER, CITY_WEATHER_ERROR, CLEAR_FORECAST } from '../types';
import axios from 'axios';

export const getCityWeather = (city, countryCode) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&units=metric&APPID=f7efc4bd1097c442c4e79ce71f74a94a`
    );
    dispatch({
      type: GET_CITY_WEATHER,
      payload: res.data,
    });
    dispatch({
      type: CLEAR_FORECAST,
    });
  } catch (error) {
    dispatch({
      type: CITY_WEATHER_ERROR,
      payload: error,
    });
  }
};
