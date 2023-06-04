'use client'
import Image from 'next/image'
import { motion, useTransform, useViewportScroll } from 'framer-motion';
export default function Home() {
  const textContent = "Unlocking Architectural Excellence. ";
  const duplicatedText = textContent + textContent;
  const marqueeVariants = {
    animate: {
      x: [-390, -2120],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 10,
          ease: "linear",
        },
      },
    },
  }
  return (
    <main className="h-auto bg-main min-h-screen overflow-hidden">
      <div className="header p-4 md:p-8 lg:px-32 lg:pt-11 lg:pb-0">
        <Image src='/image/rumkraf-logo.svg' width="71" height="36" alt='logo' />
      </div>
      <div className="content flex flex-col md:flex-row-reverse static h-auto md:min-h-screen md: w-full py-4 px-4 md:px-8 lg:px-32 overflow-hidden">
        <div className="group-12 absolute mt-52 sm:mt-72 md:mt-36 lg:mt-0 xl:mt-0 md:flex sm:justify-end w-full xl:justify-center hidden">
            <Image className='w-full md:w-4/5 lg:w-4/5 xl:w-4/6 ml-0 md:ml-40 xl:ml-20' src='/image/group_12.svg' width="887" height="300" alt='logo' />
        </div>
        <div className="top relative md:w-1/2 h-72 md:h-80 lg:ml-8">
          <div className="group-12 absolute mt-72 md:mt-36 -left-20 w-full md:hidden">
            <Image src='/image/group_12.svg' width="887" height="300" alt='logo' />
          </div>
          <div className="building relative flex flex-col items-center w-full z-10">
            <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="building-4 absolute mt-56 md:mt-64 lg:mt-52 xl:mt-64 px-4">
              <img src='image/building_4.svg' alt='building4' />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className="building-3 absolute mt-24 md:mt-28 lg:mt-16 px-4">
              <img src='image/building_3.svg' alt='building3' />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 1 }} className="building-2 absolute mt-10 md:mt-16 lg:mt-2 px-4">
              <img src='image/building_2.svg' alt='building2' />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 1.5 }} className="building-1 absolute mt-2 md:mt-10 lg:-mt-5">
              <img src='image/building_1.svg' alt='building1' />
            </motion.div>
          </div>
          <div className="running-text-container z-0">
            <motion.div
              variants={marqueeVariants}
              animate="animate"
              className="running-text absolute top-40 md:top-96 w-full flex"
            >
              <p className='text-9xl text-white font-raleway font-extrabold whitespace-nowrap'>
                 {duplicatedText}
              </p>
            </motion.div>
          </div>
        </div>
        <div className=" mt-72 md:mt-28 lg:mt-24 md:w-1/2 md:z-20">
          <div className="w-full">
            <div className="hero-text">
              <p className='text-4xl xl:text-5xl 2xl:text-6xl font-raleway font-extrabold leading-9'>We're in the process of creating something extraordinary</p>
            </div>
            <div className="description mt-8">
              <p className='text-lg xl:text-xl 2xl:text-2xl font-montserrat font-normal leading-7'>For inquiries, project proposals, or to connect with us, please reach out using the contact details below</p>
            </div>
            <div className="contact flex flex-col md:flex-row mt-8">
              <div className="whatsapp flex items-center">
                <Image src='/image/whatsapp_icon.svg' alt='whatsapp' height='20' width='20' />
                <p className='ml-3 xl:text-lg 2xl:text-xl'>+62811443883</p>
              </div>
              <div className="instagram flex items-center mt-4 md:mt-0 md:ml-16">
                <Image src='/image/ig_icon.svg' alt='whatsapp' height='20' width='20' />
                <p className='ml-3 xl:text-lg 2xl:text-xl'>@rumkrafindonesia</p>
              </div>
            </div>
          </div>
          
        </div>
        
      </div>
    </main>
  )
}
