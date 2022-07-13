import { GET_FORECAST, FORECAST_ERROR } from '../types';
import axios from 'axios';

export const getCityForecast = (city, countryCode) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&units=metric&APPID=f7efc4bd1097c442c4e79ce71f74a94a`
    );
    dispatch({
      type: GET_FORECAST,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: FORECAST_ERROR,
      payload: error,
    });
  }
};
