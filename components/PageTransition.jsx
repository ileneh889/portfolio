"use client"

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";


export default function PageTransition({ children }) {
  const pathName = usePathname()

  return (
    // AnimatePresence監聽direct child的key來決定其是否被卸載，若是，就會依照<motion.tag>的exit prop產生該tag的離場動畫
    <AnimatePresence>
      {/* 一定要有key，不然AnimatePresence偵測不到這個tag */}
      <div key={pathName} >
        {/* 遮罩div，但變成有動畫效果 */}
        <motion.div
          // 0.設定此遮罩樣式
          className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
          // 1.當組件卸載時，若未設定 exit 屬性，就不會執行離場動畫（直接從畫面上移除）
          // 2 (1) 遮罩不透明(看不見組件)
          initial={{ opacity: 1 }}
          // 2 (2) 透明(看見組件)
          animate={{ opacity: 0 }}
          // 以上從2(1)→2(2)的過場效果(若未設定則會視framer-motion預設設定)
          transition={{
            delay: 0,
            duration: 1.3,
            ease: "easeInOut",
          }}
        />
        {children}
      </div>
    </AnimatePresence>
  )
}

