"use client"

import Link from "next/link"
import { AnimatedWhatsappIcon } from "./AnimatedWhatsappIcon"
import { AnimatedBehanceIcon } from "./AnimatedBehanceIcon"
import { motion } from "framer-motion"

interface ButtonProps {
  label: string
  link: string
  icon: "Behance" | "WhatsApp"
}

export const Button = ({ label, link, icon }: ButtonProps) => {
  return (
    <motion.a layout href={link} className="flex justify-center group items-center rounded-lg text-sm font-bold w-[12.5625rem] h-12 bg-[#885ABC] text-[#F7F7FF]">
      {label}
      <motion.span whileHover={{ translateX: 10, }} className="absolute right-12 flex items-center justify-center rounded-lg bg-[#F7F7FF] w-[3.875rem] h-[3.875rem]">
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
