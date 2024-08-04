'use client';
import { FC } from 'react';
import { Button } from './ui/button';
import Link from 'next/link';
const HeroSection: FC = () => {
  return (
    <section className="mb-[16px] pt-[104px] pb-[100px] bg-hero-pattern bg-cover bg-no-repeat bg-center md:bg-hero-pattern-md lg:bg-hero-pattern-lg md:mb-[64px] lg:mb-[72px]">
      <div className="container mx-auto">
        <div className="max-w-[280px] md:max-w-[373px] lg:max-w-[424px]">
          <h1 className="h1 mb-[6px] text-[32px] font-medium leading-none md:mb-[16px] md:text-[40px] lg:mb-[24px] lg:text-[56px]">
            Сериал Ведьмак
          </h1>
          <p className="mb-[32px] text-[16px] leading-[20px] md:mb-[40px]">
            Геральт из Ривии, наемный охотник за чудовищами, перенесший мутации,
            идет навстречу своей судьбе в неспокойном мире, где люди часто
            оказываются куда коварнее чудовищ.
          </p>
          <Link href={'/contacts'}>
            <Button variant="accent">Смотреть сериал</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
