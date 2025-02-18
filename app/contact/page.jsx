"use client";

import { useState } from "react"
// SSR
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// CSR
import dynamic from 'next/dynamic'
const MotionDiv = dynamic(() => import('framer-motion').then(mod => mod.motion.div), { ssr: false })

// data
import { INFO } from "@/lib/utils";


export default function Contact() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    company: "",
    phone: "",
    message: "",
  })


  // handle when insert
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  // onSubmit
  function onSubmit(e) {
    e.preventDefault();

    // Format email content
    const emailTitle = `We would like to work with you!`;
    const emailContent =
      formData.message ?
        formData.message
        :
        "I came across your profile and was very impressed by your experience.%0D%0A%0D%0A" +
        "I'd love to have a conversation with you about a potential opportunity to join our team.%0D%0A" +
        "Let me know a time that works for you to chat!%0D%0A%0D%0A" +
        "Looking forward to your response!";

    const signature =
      "%0D%0A%0D%0A" +
      "Best regards,%0D%0A" +
      `${formData.firstname.slice(0, 1).toUpperCase() + formData.firstname.slice(1)} ${formData.lastname.slice(0, 1).toUpperCase() + formData.lastname.slice(1)}%0D%0A` +
      `Phone: ${formData.phone}%0D%0A` +
      `Company Name: ${formData.company}`;

    // email URL
    const mailtoUrl = `mailto:ileneh8899@gmail.com?subject=${emailTitle}&body=${emailContent}${signature}`;
    // open email
    window.location.href = mailtoUrl;
  }



  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 1,
        duration: 0.4,
        ease: "easeIn"
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form
              action=""
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              onSubmit={onSubmit}
            >
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">Looking for a Front-en developer? Drop a message and let me know you're interested!</p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="firstname *" name="firstname" value={formData.firstname} onChange={handleChange} required />
                <Input type="lastname" placeholder="Lastname *" name="lastname" value={formData.lastname} onChange={handleChange} required />
                <Input type="company" placeholder="Company *" name="company" value={formData.company} onChange={handleChange} required />
                <Input type="phone" placeholder="Phone *" name="phone" value={formData.phone} onChange={handleChange} required />
              </div>
              {/* textarea */}
              <Textarea
                placeholder="Type your message here..."
                className="h-[200px]"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
              {/* btn */}
              <Button
                className="max-w-40"
                size="sm"
                type="submit"
              >
                Send message
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {INFO.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <li
                    key={index}
                    className="flex items-center gap-6"
                  >
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]"><IconComponent /></div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </MotionDiv>
  )
}