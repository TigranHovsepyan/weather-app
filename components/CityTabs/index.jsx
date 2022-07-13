import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { getCityForecast } from '../../store/actions/getForecastAction';
import { getCityWeather } from '../../store/actions/getWeatherAction';
import { CITIES, TAB_CLASSNAME } from './constants';

export const CityTabs = () => {
  const dispatch = useDispatch();
  const weatherState = useSelector((state) => state.weather);

  const getWeatherFromCity = (city) => {
    if (!city) {
      return null;
    }

    if (weatherState.name !== city) {
      dispatch(getCityWeather(CITIES[city].city, CITIES[city].countryCode));
    }
  };

  return (
    <Tabs selectedTabClassName="bg-gray-100 active">
      <TabList
        className={
          'flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400'
        }
      >
        {Object.keys(CITIES).map((item) => (
          <Tab
            className={`${TAB_CLASSNAME}`}
            onClick={(event) => getWeatherFromCity(event.target.textContent)}
            key={item}
          >
            {item}
          </Tab>
        ))}
        <Tab
          className={`${TAB_CLASSNAME}`}
          onClick={() => dispatch(getCityForecast('Tokyo', 'jp'))}
        >
          Test forecast
        </Tab>
      </TabList>
      <TabPanel />
      <TabPanel />
      <TabPanel />
      <TabPanel />
      <TabPanel />
      <TabPanel />
    </Tabs>
  );
};
