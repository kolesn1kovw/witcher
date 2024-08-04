'use client';
import { FC, use } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { usePathname } from 'next/navigation';

import { actors } from '@/mockdata/actors';

import SlideActor from './SlideActor';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import './style/actors.css';

const ActorsSection: FC = () => {
  const pathname = usePathname();
  return (
    <section className="mb-[64px] lg:mb-[72px]">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-[16px] md:mb-[24px]">
          <h2 className="h2 font-medium text-[28px] leading-[36px] sm:text-[32px] sm:leading-[40px] lg:text-[40px] lg:leading-[48px]">
            Актерский состав
          </h2>
          <div className="flex mb-[-20px] lg:mb-[-10px]  items-center gap-[12px] md:gap-[24px]">
            <div className="swiper-button-prev flex items-center justify-center w-[28px] h-[28px] md:w-[32px] md:h-[32px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="32"
                viewBox="0 0 18 32"
                fill="none"
              >
                <path
                  d="M0.723995 15.1219L15.5249 0.361867C16.0099 -0.121444 16.795 -0.120631 17.2791 0.364367C17.7629 0.849302 17.7616 1.63486 17.2766 2.11855L3.35667 16L17.2771 29.8815C17.7621 30.3652 17.7633 31.1503 17.2796 31.6353C17.0369 31.8784 16.719 32 16.4011 32C16.0839 32 15.7672 31.8792 15.525 31.6378L0.723995 16.8782C0.490435 16.6458 0.359371 16.3295 0.359371 16C0.359371 15.6706 0.49081 15.3547 0.723995 15.1219Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className="swiper-button-next rotate-180">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="32"
                viewBox="0 0 18 32"
                fill="none"
              >
                <path
                  d="M0.723995 15.1219L15.5249 0.361867C16.0099 -0.121444 16.795 -0.120631 17.2791 0.364367C17.7629 0.849302 17.7616 1.63486 17.2766 2.11855L3.35667 16L17.2771 29.8815C17.7621 30.3652 17.7633 31.1503 17.2796 31.6353C17.0369 31.8784 16.719 32 16.4011 32C16.0839 32 15.7672 31.8792 15.525 31.6378L0.723995 16.8782C0.490435 16.6458 0.359371 16.3295 0.359371 16C0.359371 15.6706 0.49081 15.3547 0.723995 15.1219Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="swiper-pagination mb-[24px] lg:mb-[32px]"></div>
      </div>

      <div className="actors__slider w-full relative">
        <Swiper
          modules={[Navigation, Scrollbar, Pagination, A11y]}
          spaceBetween={16}
          slidesPerView={'auto'}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{
            el: '.swiper-pagination',
            type: 'progressbar',
          }}
          breakpoints={{
            640: {
              spaceBetween: 24,
            },
          }}
          className="w-full"
        >
          {actors.map(({ id, ...actor }) => (
            <SwiperSlide key={id}>
              <SlideActor {...actor} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ActorsSection;
