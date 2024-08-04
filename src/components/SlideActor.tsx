import { IActor } from '../types/actor';

const SlideActor = ({ heroName, fullName, description, picture }: IActor) => {
  return (
    <div className="actor relative p-[24px] w-[216px] h-[280px]  md:h-[360px] lg:w-[282px] lg:h-[400px] overflow-hidden">
      <img
        src={picture}
        alt={fullName}
        width="216"
        height="280"
        className="absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover"
      />
      <div className="relative z-[3] flex h-full flex-col items-start justify-end">
        <div className="actor__info ">
          <h5 className="mb-[2px] text-[16px] leading-[24px] font-medium capitalize md:mb-[4px] md:text-[20px] md:leading-[28px] lg:text-[24px] lg:leading-[32px] ">
            {heroName}
          </h5>
          <p className="font-light text-[16px] leading-[20px] md:text-[20px] md:leading-[28px] lg:text-[24px] lg:leading-[32px]">
            {fullName}
          </p>
        </div>
        <p className="actor__description text-[16px] leading-[20px] lg:leading-[24px]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SlideActor;
