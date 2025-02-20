"use client"

import CountUp from 'react-countup';

const stats = [
  {
    num: 16,
    text: "Technical skills"
  },
  {
    num: 1,
    text: "year of commitment"
  },
  {
    num: 9,
    text: "Running projects"
  },

  {
    num: 141,
    text: "Code commits"
  }
];

export default function Stats() {
  return (
    <section className='pt-4 pb-12 xl:pt-0 xl:pb-0'>
      <div className="container mx-auto">
        <div className='grid grid-cols-2  md:grid-cols-4 gap-6 max-w-[80vw] mx-auto xl:max-w-none' >
          {stats.map((item, index) => (
            <div className="flex-1 flex gap-4 items-center justify-center xl:justify-start" key={index}>
              <CountUp
                end={item.num}
                duration={5.5}
                delay={0.4}
                className="text-4xl xl:text-6xl font-extrabold"
              />
              <p
                className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
