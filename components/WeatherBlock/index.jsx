import moment from 'moment';
import Image from 'next/image';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCityWeather } from '../../store/actions/getWeatherAction';

export const WeatherBlock = () => {
  const weatherState = useSelector((state) => state.weather);
  const forecastState = useSelector((state) => state.forecast.list);
  const { weather, main } = weatherState;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCityWeather('New York', 'us'));
  }, []);

  return (
    <div className="weather-block my-8 max-h-96 overflow-y-auto">
      {weatherState && forecastState ? (
        forecastState.map((item) => (
          <div className="weather-temperature-block flex gap-2 my-6" key={item?.dt_txt}>
            <div>
              <Image
                src={`http://openweathermap.org/img/w/${item?.weather[0]?.icon}.png`}
                alt={''}
                width={70}
                height={70}
              />
            </div>
            <div>
              <p className="text-xs text-gray-400	">
                {moment(item?.dt_txt).format('MM/DD/YYYY HH:mm')}
              </p>
              <p className="weather-temperature text-xl">{`Temperature: ${
                Number(item?.main?.temp).toFixed() > 0
                  ? `+${Number(item?.main?.temp).toFixed()}`
                  : `-${Number(item?.main?.temp).toFixed()}`
              } C`}</p>
              <div className="flex">
                <p className="mr-4 text-lg">Humidity: {item?.main?.humidity}%</p>
                <p className="text-lg">Wind speed: {item?.wind?.speed} m/s</p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="weather-temperature-block flex gap-2">
          <div>
            <img
              src={`http://openweathermap.org/img/w/${weather[0]?.icon}.png`}
              alt={''}
              width={70}
            />
          </div>
          <div>
            <p className="weather-temperature text-2xl">{`Temperature: ${
              Number(main?.temp).toFixed() > 0
                ? `+${Number(main?.temp).toFixed()}`
                : `-${Number(main?.temp).toFixed()}`
            } C`}</p>
            <div className="flex">
              <p className="mr-4 text-lg">Humidity: {main?.humidity}%</p>
              <p className="text-lg">Wind speed: {weatherState?.wind?.speed} m/s</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
