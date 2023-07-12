"use client"

import { AnimatedWhatsappIcon } from "./AnimatedWhatsappIcon"
import { AnimatedBehanceIcon } from "./AnimatedBehanceIcon"
import { motion } from "framer-motion"

interface ButtonProps {
  label: string
  link: string
  icon: "Behance" | "WhatsApp"
}

const iconMotion = {
  initial: {
    x: 0,
    transition: {
      type: "tween",
      ease: "easeIn"
    }
  },
  animate: {
    x: 10,
    transition: {
      type: "tween",
      ease: "easeOut"
    }
  }
}

export const Button = ({ label, link, icon }: ButtonProps) => {
  return (
    <motion.a
      className="relative flex justify-center shadow-md shadow-[#1f1031] -ml-5 items-center rounded-lg text-sm font-bold md:text-lg md:font-medium md:w-[18.75rem] md:h-14 w-[12.5625rem] h-12 bg-[#885ABC] text-[#F7F7FF]"
      href={link}
      initial="initial"
      animate="initial"
      whileHover="animate"
      rel="noopener noreferrer"
    >
      {label}
      <motion.span variants={iconMotion} className="absolute -right-11 flex items-center justify-center rounded-lg bg-[#F7F7FF] md:w-20 md:h-20 w-[3.875rem] h-[3.875rem]">
        {
          icon == 'WhatsApp' ? (
            <AnimatedWhatsappIcon />
          ) : (
            <AnimatedBehanceIcon />
          )
        }
      </motion.span>
    </motion.a>
  )
}
