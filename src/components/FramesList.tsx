'use client';

import React, { Component } from 'react';

import { Frame } from '@/types/frame';
import { Button } from './ui/button';
import { useState } from 'react';
import { getPosts } from '@/actions/get-post';
import { POST_PER_PAGE } from '@/config/constants';

import 'lightbox.js-react/dist/index.css';

type PostListProps = {
  initialPosts: Frame[];
};

const FramesList = ({ initialPosts }: PostListProps) => {
  const [frames, setFrames] = useState<Frame[]>(initialPosts);
  const [currentOffset, setCurrentOffset] = useState<number>(POST_PER_PAGE);
  const [hasMoreData, setHasMoreData] = useState<boolean>(true);

  const loadMorePosts = async () => {
    const apiFrames = await getPosts(currentOffset, POST_PER_PAGE);

    if (!apiFrames.length || apiFrames.length < 5) {
      setHasMoreData(false);
    }

    setFrames((prevFrame) => [...prevFrame, ...apiFrames]);
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
        <Button onClick={loadMorePosts} className="w-full">
          Показать еще
        </Button>
      )}
    </div>
  );
};

export default FramesList;
