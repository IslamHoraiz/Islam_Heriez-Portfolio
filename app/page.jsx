 'use client';


import Image from "next/image";

import { Button } from "@/components/ui/button";

import { FiDownload } from "react-icons/fi";

import Socials from "@/components/Social";

import Photo from "@/components/Photo";

import Stats from "@/components/Stats";


export default function Home() {

  return (

    <section className="h-full mt-10 sm:mt-0 px-5 bg-background text-foreground">

      <div className="container mx-auto h-full">

        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">


          {/* Text Content */}

          <div className="text-center xl:text-left order-2 xl:order-none">

            <span className="text-xl text-muted-foreground">ERP & SAP Project Manager</span>

            <h1 className="text-6xl font-bold mb-6">

              Hello, I'm <br />

              <span className="text-emerald-500">Islam Heriez</span>

            </h1>

            <p className="max-w-[550px] mb-6 text-muted-foreground">

              A results-driven ERP Project Manager and SAP S/4HANA Consultant with deep expertise in end-to-end ERP implementations, business process optimization, and application support. I specialize in driving SME digital transformation in Egypt and the Gulf, delivering scalable, localized ERP solutions tailored to real-world needs.

            </p>

            <div className="flex flex-col xl:flex-row items-center gap-8">

              <a href="/Islam_Wheed_CV.pdf" download>

                <Button variant='outline' size="lg" className="uppercase flex items-center gap-2">

                  <span>Download CV</span>

                  <FiDownload className="text-lg" />

                </Button>

              </a>

              <div className="flex mb-8 xl:mb-0">

                <Socials />

              </div>

            </div>

          </div>


          {/* Profile Photo */}

          <div className="order-1 xl:order-none mb-8 xl:mb-0">

            <Photo />

          </div>


        </div>

      </div>

      <Stats />

    </section>

  );

} 