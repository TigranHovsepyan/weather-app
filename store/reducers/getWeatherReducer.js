import { GET_CITY_WEATHER, CITY_WEATHER_ERROR } from '../types';

const initialState = {
  weather: [],
};

export const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CITY_WEATHER:
      return {
        ...state.weather,
        ...action.payload,
      };
    case CITY_WEATHER_ERROR:
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};
