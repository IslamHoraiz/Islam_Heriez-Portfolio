'use client';

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeInOut' },
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: 'easeIn' },
        }}
        className="w-[160px] h-[160px] xl:w-[220px] xl:h-[220px] rounded-full overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
      >
        <Image
          src="/assets/loki.jpg"
          alt="profile photo"
          width={220}
          height={220}
          priority
          quality={100}
          className="object-cover w-full h-full"
        />
      </motion.div>
    </motion.div>
  );
};

export default Photo;
