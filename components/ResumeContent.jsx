import { TabsContent } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";


export default function ResumeContent({ data, value }) {
  return (
    <TabsContent
      value={value}
      className="w-full"
    >
      <div className="flex flex-col gap-[30px] text-center xl:text-left" >
        <h3 className="text-4xl font-bold">{data.title}</h3>
        {data.description.length !== 0 && <p className="max-w-full text-white/60 mx-auto xl:mx-0" >{data.description}</p>}
        <ScrollArea className="h-[400px]">
          <ul className="grid grid-col-1 gap-[30px]">
            {
              data.items.map((item, index) => {
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
  )
}
