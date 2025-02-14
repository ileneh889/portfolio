
"use client"

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaLaravel,
  FaPhp,
  FaBootstrap,
} from "react-icons/fa";
import { SiNextdotjs, SiMysql } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";


// about 
const about = {
  title: "About me",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam, sunt explicabo inventore.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Luke Coleman"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+886)0926-555-726"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Taiwan(R.O.C)"
    },
    {
      fieldName: "Email",
      fieldValue: "ileneh8899@gmail.com"
    },
    {
      fieldName: "line",
      fieldValue: "ileneh889"
    },
    {
      fieldName: "whatsApp",
      fieldValue: "(+886)0926-555-726"
    },
    {
      fieldName: "language",
      fieldValue: "English, Mandarin"
    }
  ]
};

// experience
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam, sunt explicabo inventore.",
  items: [
    {
      company: "Tech Solutions Inc.",
      position: "Full Stack Developer",
      duration: "2022 - Present"
    },
    {
      company: "Tech Solutions Inc.",
      position: "Full Stack Developer",
      duration: "2022 - Present"
    },
    {
      company: "Tech Solutions Inc.",
      position: "Full Stack Developer",
      duration: "2022 - Present"
    },
  ]
};

// education
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam, sunt explicabo inventore.",
  items: [
    {
      institution: "Ispan front-end bootcamp",
      degree: "Full Stack Developer",
      duration: "2022 - Present"
    },
    {
      institution: "Tech Solutions Inc.",
      degree: "Full Stack Developer",
      duration: "2022 - Present"
    },
  ]
};

// skills
const skills = {
  title: "My skills",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam, sunt explicabo inventore.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5"
    },
    {
      icon: <FaCss3 />,
      name: "Css 3"
    },
    {
      icon: <FaJs />,
      name: "JavaScript"
    },
    {
      icon: <FaReact />,
      name: "React"
    },
    {
      icon: <FaBootstrap />,
      name: "Bootstrap"
    },
    {
      icon: <FaFigma />,
      name: "Figma"
    },
    {
      icon: <SiNextdotjs />,
      name: "NextJS"
    },
    {
      icon: <SiMysql />,
      name: "MySQL"
    },
    {
      icon: <FaLaravel />,
      name: "Laravel"
    },
    {
      icon: <FaPhp />,
      name: "Php"
    },

  ]
};

export default function Resume() {
  return (
    <motion.div
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
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                {/* <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p> */}
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-col-1 gap-[30px]">
                    {
                      experience.items.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className="bg-[#232329] h-[150px] py-6 px-10 rounded-xl flex flex-col lg:items-start gap-1"
                          >
                            <span className="text-accent">
                              {item.duration}
                            </span>
                            <h3
                              className="text-xl min-h-[30px] text-center lg:text-left p-0 m-0">
                              {item.position}
                            </h3>
                            <div className="flex items-center justify-center lg:justify-start gap-3">
                              {/* dot */}
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p className="text-white/60 p-0 m-0">{item.company}</p>
                            </div>
                          </li>
                        )
                      })
                    }
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                {/* <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p> */}
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-col-1 gap-[30px]">
                    {
                      education.items.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className="bg-[#232329] h-[150px] py-6 px-10 rounded-xl flex flex-col lg:items-start gap-1"
                          >
                            <span className="text-accent">
                              {item.duration}
                            </span>
                            <h3
                              className="text-xl min-h-[30px] text-center lg:text-left p-0 m-0">
                              {item.degree}
                            </h3>
                            <div className="flex items-center justify-center lg:justify-start gap-3">
                              {/* dot */}
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p className="text-white/60 p-0 m-0">{item.institution}</p>
                            </div>
                          </li>
                        )
                      })
                    }
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center gap-4"
                      >
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group" >
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{skill.name}</p>
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
            <TabsContent value="about" className="w-full">
              about
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}
