'use client';
import { FC } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Button } from './ui/button';
const Header: FC = () => {
  const pathname = usePathname();

  return (
    <header
      className={`py-[16px] md:py-[12px] lg:py-[20px] ${
        pathname === '/' && 'bg-black'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between gap-[12px]">
        <Link href={'/'}>
          <img
            src="./images/logo.png"
            alt="Ведьмак Серия Игр"
            width="130px"
            height="44px"
            className="pt-[4px]"
          />
        </Link>
        {pathname === '/' && (
          <Link href={'/contacts'}>
            <Button size="sm">Подключить подписку</Button>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
