'use client';


import React from 'react';

import Link from 'next/link';

import Nav from './Nav';

import MobileNav from './MobileNav';

import { Briefcase } from 'lucide-react';

import { motion } from 'framer-motion';


const Header = () => {

  return (

    <>

      {/* Header Navbar */}

      <header className='py-8 xl:py-12 text-white bg-pink-50/20'>

        <div className="container mx-auto flex justify-between items-center px-5">

          <Link href="/">

            <h1 className='text-4xl font-semibold'>

              Islam Heriez <span className='text-emerald-500'>.</span>

            </h1>

          </Link>

          <div className="hidden xl:flex items-center gap-8">

            <Nav />

            {/* ❌ تم حذف زر Hire Me هنا، سيتم عرضه كزر عائم فقط */}

          </div>

          <div className="xl:hidden">

            <MobileNav />

          </div>

        </div>

      </header>


      {/* ✅ زر Hire Me العائم يظهر فقط على الشاشات الكبيرة */}

      <motion.div

        initial={{ opacity: 0, y: 40 }}

        animate={{ opacity: 1, y: 0 }}

        transition={{ duration: 0.6, ease: 'easeOut', delay: 1 }}

        className="hidden xl:block fixed bottom-6 right-6 z-50"

      >

        <Link href="/contact">

          <button

            className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 rounded-full shadow-lg hover:shadow-emerald-500/30 transition-all duration-300"

            aria-label="Hire Me"

          >

            <Briefcase size={18} />

            Hire Me

          </button>

        </Link>

      </motion.div>

    </>

  );

};


export default Header; 