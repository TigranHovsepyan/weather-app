import { useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import { useDispatch, useSelector } from 'react-redux';
import { getCityForecast } from '../../store/actions/getForecastAction';
import { CITIES } from '../CityTabs/constants';

export const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  const currentForecastCityName = useSelector((state) => state.forecast?.city?.name);
  const currentCityName = useSelector((state) => state.weather.name);
  const dispatch = useDispatch();

  const handleDatePickerChange = (date) => {
    setStartDate(date);
    if (currentCityName !== currentForecastCityName) {
      dispatch(getCityForecast(CITIES[currentCityName].city, CITIES[currentCityName].countryCode));
    }
  };

  return (
    <ReactDatePicker
      selected={startDate}
      open
      format="MM-DD-YYYY"
      onChange={(date) => handleDatePickerChange(date)}
    />
  );
};
