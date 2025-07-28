'use client';

import { motion } from "framer-motion";

import Image from "next/image";


const Photo = () => {

  return (

    <motion.div

      initial={{ opacity: 0 }}

      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: 'easeInOut' } }}

    >

      <motion.div

        initial={{ opacity: 0 }}

        animate={{ opacity: 1, transition: { delay: 2, duration: 0.4, ease: 'easeIn' } }}

        className="w-[298px] h-[350px] xl:w-[400px] xl:h-[498px] rounded-[100px] overflow-hidden shadow-lg"

      >

        <Image

          src="/assets/loki.jpg"

          alt="photo"

          width={400}

          height={498}

          priority

          quality={100}

          className="object-cover w-full h-full brightness-95"

        />

      </motion.div>

    </motion.div>

  );

};


export default Photo; 