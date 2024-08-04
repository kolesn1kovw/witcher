import { FC } from 'react';
import FramesList from './FramesList';
import { getPosts } from '@/actions/get-post';
import { POST_PER_PAGE } from '@/config/constants';

const FramesFilm: FC = async () => {
  const initialPosts = await getPosts(1, POST_PER_PAGE);
  return (
    <section className="mb-[64px] lg:mb-[72px]">
      <div className="container mb-auto">
        <h2 className="h2 mb-[24px] font-medium text-[28px] leading-[36px] md:text-[32px] md:leading-[40px] lg:text-[40px] lg:leading-[48px] lg:mb-[40px]">
          Кадры со съемок
        </h2>
        <FramesList initialPosts={initialPosts} />
      </div>
    </section>
  );
};

export default FramesFilm;
