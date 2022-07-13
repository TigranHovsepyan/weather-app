import Head from 'next/head';
import { CityTabs } from '../components/CityTabs';
import { WeatherBlock } from '../components/WeatherBlock';
import { Calendar } from '../components/Calendar';

export default function Home() {
  return (
    <>
      <Head>
        <title>Weather App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="container mx-auto">
        <div className="text-4xl font-bold my-4">Weather app</div>
        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-span-8">
            <CityTabs />
          </div>
          <div className="col-span-12 lg:col-span-8">
            <WeatherBlock />
          </div>
          <div className="col-span-12 mx-8 lg:col-span-4">
            <Calendar />
          </div>
        </div>
      </div>
    </>
  );
}
