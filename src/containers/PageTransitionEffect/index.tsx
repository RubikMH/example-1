'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import React, { type ReactNode } from 'react'

const variants = {
  hidden: { opacity: 0, x: -200, y: 100 },
  enter: { opacity: 1, x: 0, y: 0 },
}

const PageTransitionEffect = ({
  children,
}: {
  children: ReactNode | ReactNode[]
}) => {
  const key = usePathname()
  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        key={key}
        initial="hidden"
        animate="enter"
        variants={variants}
        transition={{ type: 'linear' }}
        className=" w-full h-full flex 
        justify-center items-center"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export default PageTransitionEffect
