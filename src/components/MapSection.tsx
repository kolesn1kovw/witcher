'use client';

import { useEffect, useRef, useState } from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

const API_KEY = 'd2de9a9c-e18c-44d4-ac71-e84f95aa543b';
const center = [55.755864, 37.617698];
const images = [...Array(3)].map((_, i) => {
  const letter = String.fromCharCode(i + 50);
  return `https://img.icons8.com/ios-filled/2x/marker-${letter}.png`;
});

const MapSection = ({ width = '100%', height = '400px' }) => {
  const ref = useRef();
  const [value, setValue] = useState('');
  const [options, setOptions] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        if (value) {
          const res = await fetch(
            `https://geocode-maps.yandex.ru/1.x/?apikey=${API_KEY}&format=json&geocode=${value}`
          );
          const data = await res.json();
          const collection =
            data.response.GeoObjectCollection.featureMember.map(
              (item: any) => item.GeoObject
            );
          setOptions(collection);
        }
      } catch (e) {
        console.log(e);
      }
    })();
  }, [value]);

  return (
    <section className="mb-[0] lg:mb-[72px]">
      <div className="container mx-auto">
        <h2 className="h2 mb-[24px] font-medium text-[28px] leading-[36px] md:text-[32px] md:leading-[40px] lg:text-[40px] lg:leading-[48px] lg:mb-[40px]">
          Магазины мерча ведьмака
        </h2>
      </div>
      <div className="container p-0 max-w-full lg:max-w-[1230px] lg:max-w-auto lg:px-[16px] lg:mx-auto">
        <div className="relative w-full h-[400px] xl:h-[540px] bg-red-100">
          <YMaps
            query={{
              load: 'package.full',
              apikey: API_KEY,
            }}
          >
            <Map
              instanceRef={ref}
              width={width}
              height={height}
              defaultState={{
                center: [55.755864, 37.617698],
                zoom: 7,
                controls: ['zoomControl'],
              }}
              modules={['templateLayoutFactory', 'layout.ImageWithContent']}
              className="absolute top-0 left-0 right-0 bottom-0 w-full h-full"
            >
              {images.map((n, i) => {
                return (
                  <Placemark
                    key={i}
                    x
                    defaultGeometry={center.map(
                      (c) => c + (Math.random() - 0.5)
                    )}
                    options={{
                      iconLayout: 'default#imageWithContent',
                      iconImageHref: 'images/marker.png',
                      iconImageSize: [60, 60],
                    }}
                  />
                );
              })}
            </Map>
          </YMaps>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
