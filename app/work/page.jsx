"use client"
import { motion } from "framer-motion"
import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";

// components
import WorkSliderBtns from "@/components/WorkSliderBtns";

// data
import { PROJECTS } from '@/lib/utils'


export default function Work() {
  const [project, setProject] = useState(PROJECTS[0])
  const basePath = process.env.NODE_ENV === 'production' ? '/portfolio' : ''

  function handleSlideChange(swiper) {
    // 獲得curreny slide index:wiper DOCs裡提供的build-in property
    const currentIndex = swiper.activeIndex
    // update project state
    setProject(PROJECTS[currentIndex])
  }


  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 1,
        duration: 0.4,
        ease: "easeIn"
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px] h-[50%]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none" >
            <div className="flex flex-col gap-[30px]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {
                  project.stack.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="text-xl text-accent"
                      >
                        {item.name}
                        {index !== project.stack.length - 1 && ','}
                      </li>
                    )
                  })
                }
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* btn */}
              <div className="flex items-center gap-4">
                {/* live project btn */}
                {project.live.length !== 0 &&
                  <a href={project.live} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        {/* trigger */}
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        {/* content */}
                        <TooltipContent>
                          <p>Live Demo</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </a>
                }

                {/* github project btn */}
                <a href={project.github} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      {/* trigger */}
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      {/* content */}
                      <TooltipContent>
                        <p>Github Repo</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]" >
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12 relative"
              onSlideChange={handleSlideChange}
            >
              {
                PROJECTS.map((project, index) => {
                  return (
                    <SwiperSlide
                      key={index}
                      className="w-full"
                    >
                      <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                        {/* overlay */}
                        <div className="absolute top-0 buttom-0 w-full h-full bg-black/10 z-10">
                        </div>
                        {/* image */}
                        <div className="relative w-full h-full">
                          <Image
                            src={`${basePath}${project.image}`}
                            fill
                            alt="project"
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                  )
                })
              }
              {/* slider btn */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[46px] h-[46px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
