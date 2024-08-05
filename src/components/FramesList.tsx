'use client';

import React, { useEffect, useState } from 'react';

import { Frame } from '@/types/frame';
import { Button } from './ui/button';
import { getFrames } from '@/actions/get-frames';
import { POST_PER_PAGE } from '@/config/constants';

import { useDispatch, useSelector } from 'react-redux';
import { fetchFrames } from '@/store/slices/framesSlice';

import type { AppDispatch, RootState } from '@/store/store';

const FramesList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const framesFetched = useSelector((state: RootState) => state.frames.frames);
  const [frames, setFrames] = useState<Frame[]>([]);
  const [currentOffset, setCurrentOffset] = useState<number>(POST_PER_PAGE);
  const [hasMoreData, setHasMoreData] = useState<boolean>(true);

  useEffect(() => {
    dispatch(fetchFrames({ offset: 1, limit: 5 }));
  }, [dispatch]);

  useEffect(() => {
    setFrames(framesFetched);
  }, [framesFetched]);

  const loadMoreFrames = async () => {
    const apiFrames = await getFrames(currentOffset, POST_PER_PAGE);

    if (!apiFrames.length || apiFrames.length < POST_PER_PAGE) {
      setHasMoreData(false);
    }

    setFrames((prevFrames) => [...prevFrames, ...apiFrames]);
    setCurrentOffset((prevCurrentOffset) => prevCurrentOffset + POST_PER_PAGE);
  };

  return (
    <div>
      <div className="wrapper-frames mb-[24px] lg:mb-[32px]">
        {frames.map((frame) => (
          <div key={frame.id}>
            <img className="w-full" src={frame.src} />
          </div>
        ))}
      </div>
      {hasMoreData && (
        <Button onClick={loadMoreFrames} className="w-full">
          Показать еще
        </Button>
      )}
    </div>
  );
};

export default FramesList;
