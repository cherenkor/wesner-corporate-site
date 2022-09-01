import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import React from 'react';

const Transition = ({ children }: React.PropsWithChildren) => {
  const { asPath } = useRouter();

  return (
    <div className="effect-1">
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={asPath}
          animate="in"
          initial="out"
          exit="out"
          variants={{
            in: {
              opacity: 1,
              transition: {
                duration: 0.1,
              },
            },
            out: {
              opacity: 0,
              transition: {
                duration: 0.1,
                ease: 'easeInOut',
              },
            },
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Transition;
