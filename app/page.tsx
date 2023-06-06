'use client'
import Image from 'next/image'
import { motion } from 'framer-motion';
export default function Home() {
  const textContent = "Unlocking Architectural Excellence. ";
  const duplicatedText = textContent + textContent + textContent;
  const marqueeVariants = {
    animate: {
      x: [-3821, -8230],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 50,
          ease: "linear",
        },
      },
    },
  }
  return (
    <main className="h-auto bg-main min-h-screen overflow-hidden">
      <div className="header p-4 sm:p-8 lg:px-16 xl:px-32 lg:pt-11 lg:pb-0">
        <Image src='/image/rumkraf-logo.svg' width="71" height="36" alt='logo' />
      </div>
      <div className="content flex flex-col md:flex-row-reverse static h-auto md:min-h-screen md: w-full py-4 px-4 sm:px-8 lg:px-16 xl:px-32 overflow-hidden">
        <div className="group-12 absolute mt-52 sm:mt-72 md:mt-36 lg:mt-0 xl:mt-40 right-0 md:flex w-full xl:justify-center hidden">
            <Image className='w-full md:w-4/5 lg:w-4/5 xl:w-3/6 ml-0 md:ml-40 xl:ml-20' src='/image/group_12.svg' width="887" height="300" alt='logo' />
        </div>
        <div className="top relative md:w-1/2 h-108 md:h-80 lg:ml-8">
          <div className="group-12 absolute mt-72 md:mt-36 -left-20 w-full md:hidden">
            <Image src='/image/group_12.svg' width="887" height="300" alt='logo' />
          </div>
          <div className="building relative flex flex-col items-center w-full z-10">
            <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 1.5 }} className="building-4 absolute mt-56 sm:mt-80 md:mt-72 lg:mt-64 xl:mt-72 2xl:mt-80 px-4">
              <img src='image/building_4.svg' alt='building4' />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 1 }} className="building-3 absolute mt-24 sm:mt-24 md:mt-36 lg:mt-28 xl:mt-32 2xl:mt-28 px-4">
              <img src='image/building_3.svg' alt='building3' />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className="building-2 absolute mt-10 sm:mt-2 md:mt-20 lg:mt-9 xl:mt-12 2xl:mt-9 px-4">
              <img src='image/building_2.svg' alt='building2' />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="building-1 absolute mt-2 sm:-mt-6 md:mt-12 lg:mt-2 xl:mt-2 2xl:-mt-1">
              <img src='image/building_1.svg' alt='building1' />
            </motion.div>
          </div>
          <div className="running-text-container z-0">
            <motion.div
              variants={marqueeVariants}
              animate="animate"
              className="running-text absolute top-20 md:top-96 md:mt-1 lg:-mt-16 xl:mt-0 w-full flex"
            >
              <p className='text-10xl text-white font-raleway font-extrabold whitespace-nowrap text-opacity-50'>
                 {duplicatedText}
              </p>
            </motion.div>
          </div>
        </div>
        <div className=" mt-16 sm:mt-48 md:mt-28 lg:mt-24 md:w-1/2 lg:w-2/3 md:z-20 mb-8 z-40">
          <div className="w-full">
            <div className="hero-text">
              <p className='text-4xl sm:text-6xl md:text-4xl sm:w-2/3 md:w-full xl:text-5xl 2xl:text-6xl font-raleway font-extrabold leading-9'>We're in the process of creating something extraordinary</p>
            </div>
            <div className="description mt-11">
              <p className='text-lg sm:text-2xl md:text-lg xl:text-xl 2xl:text-2xl font-montserrat font-normal leading-7'>For inquiries, project proposals, or to connect with us, please reach out using the contact details below</p>
            </div>
            <div className="contact flex flex-col md:flex-row mt-11">
              <div className="whatsapp flex items-center">
                <Image src='/image/whatsapp_icon.svg' alt='whatsapp' height='20' width='20' />
                <a href='https://wa.me/62811443883' target='_blank' className='ml-3 sm:text-xl md:text-base xl:text-lg 2xl:text-xl font-montserrat'>+62811443883</a>
              </div>
              <div className="instagram flex items-center mt-4 md:mt-0 md:ml-16">
                <Image src='/image/ig_icon.svg' alt='whatsapp' height='20' width='20' />
                <a href='https://www.instagram.com/rumkrafindonesia/' target='_blank' className='ml-3 sm:text-xl md:text-base xl:text-lg 2xl:text-xl font-montserrat'>@rumkrafindonesia</a>
              </div>
            </div>
          </div>
          
        </div>
        
      </div>
    </main>
  )
}
