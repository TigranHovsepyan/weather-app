import { combineReducers } from 'redux';
import { forecastReducer } from './getForecastReducer';
import { weatherReducer } from './getWeatherReducer';

export const rootReducer = combineReducers({
  weather: weatherReducer,
  forecast: forecastReducer,
});
