import { FC } from 'react';
import { motion } from 'framer-motion';

const Stairs: FC = () => {
  const animationOptions = {
    initial: {
      top: '0%',
    },
    animate: {
      top: '100%',
    },
    exit: {
      top: ['100%', '0%'],
    },
  };

  const calcIndex = (index: number) => {
    const steps = 5;
    return steps - index - 1;
  };
  return (
    <>
      {[...Array(5)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={animationOptions}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: 'easeInOut',
              delay: calcIndex(index) * 0.1,
            }}
            className="h-full w-full bg-white relative"
          />
        );
      })}
    </>
  );
};

export default Stairs;
