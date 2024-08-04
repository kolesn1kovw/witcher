'use client';
import { FC, ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';

interface IProps {
  children?: ReactNode;
  className: string;
}

const PageAnimation: FC<IProps> = ({ children, className }) => {
  const pathname = usePathname();
  return (
    <AnimatePresence>
      <div key={pathname} className={`${className} flex-1`}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: {
              delay: 1,
              duration: 0.4,
              ease: 'easeInOut',
            },
          }}
          className="h-screen w-screen fixed bg-primary top-0 pointer-events-none z-[1000]"
        />
        {children}
      </div>
    </AnimatePresence>
  );
};

export default PageAnimation;
