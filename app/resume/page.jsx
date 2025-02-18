
"use client"

// CSR
import dynamic from 'next/dynamic'
const MotionDiv = dynamic(() => import('framer-motion').then(mod => mod.motion.div), { ssr: false })
const TooltipProvider = dynamic(() => import('@/components/ui/tooltip').then(mod => mod.TooltipProvider))
const Tooltip = dynamic(() => import('@/components/ui/tooltip').then(mod => mod.Tooltip))
const TooltipTrigger = dynamic(() => import('@/components/ui/tooltip').then(mod => mod.TooltipTrigger))
const TooltipContent = dynamic(() => import('@/components/ui/tooltip').then(mod => mod.TooltipContent))

// SSR
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// data
import { ABOUT, EXPERIENCE, EDUCATION, SKILLS } from '@/lib/utils'
import { Suspense, lazy } from 'react'

// component
const ResumeContent = dynamic(() => import('@/components/ResumeContent'), {
  loading: () => <div>Loading...</div>
})

export default function Resume() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MotionDiv
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1,
          duration: 0.4,
          ease: "easeIn"
        }}
        className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
      >
        <div className="container mx-auto">
          <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="about">About me</TabsTrigger>
            </TabsList>

            {/* content */}
            <div className="min-h-[70vh] w-full" >
              <ResumeContent
                data={EXPERIENCE}
                value="experience"
              />

              {/* education */}
              <ResumeContent
                data={EDUCATION}
                value="education"
              />

              {/* skills */}
              <TabsContent value="skills" className="w-full h-full ">
                <div className="flex flex-col gap-[30px]">
                  <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold">{SKILLS.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{SKILLS.description}</p>
                  </div>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 xl:gap-[20px]">
                    {SKILLS.skillList.map((skill, index) => {
                      const IconComponent = skill.icon;
                      return (
                        <li
                          key={index}
                          className="flex items-center gap-4 "
                        >
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group" >
                                <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                  <IconComponent />
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </TabsContent>

              {/* about */}
              <TabsContent
                value="about"
                className="w-full text-center xl:text-left"
              >
                <div className="flex flex-col gap-[30px]" >
                  <h3 className="text-4xl font-bold">{ABOUT.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0" >
                    {ABOUT.description}
                  </p>
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-5 max-w-[710px] mx-auto xl:mx-0" >
                    {ABOUT.info.map((item, index) => {
                      return (
                        <li key={index} className="flex items-center justify-start gap-4">
                          <span className="text-white/60">{item.fieldName}</span>
                          <span className="text-xl">{item.fieldValue}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </MotionDiv>
    </Suspense>
  )
}
