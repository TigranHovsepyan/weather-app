import { GET_FORECAST, FORECAST_ERROR, CLEAR_FORECAST } from '../types';

const initialState = {
  forecast: [],
};

export const forecastReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FORECAST:
      return {
        ...state.forecast,
        ...action.payload,
      };
    case FORECAST_ERROR:
      return {
        error: action.payload,
      };
    case CLEAR_FORECAST:
      return {
        forecast: [],
      };
    default:
      return state;
  }
};
