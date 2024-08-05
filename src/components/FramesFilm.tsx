'use client';
import { FC, useEffect } from 'react';

import FramesList from './FramesList';
// import { getFrames } from '@/actions/get-frames';
// import { POST_PER_PAGE } from '@/config/constants';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchFrames } from '@/store/slices/framesSlice';

// import type { AppDispatch, RootState } from '@/store/store';

const FramesFilm: FC = () => {
  // const initialFrames = await getFrames(1, POST_PER_PAGE);

  return (
    <section className="mb-[64px] lg:mb-[72px]">
      <div className="container mb-auto">
        <h2 className="h2 mb-[24px] font-medium text-[28px] leading-[36px] md:text-[32px] md:leading-[40px] lg:text-[40px] lg:leading-[48px] lg:mb-[40px]">
          Кадры со съемок
        </h2>
        <FramesList />
      </div>
    </section>
  );
};

export default FramesFilm;
