import { motion } from "framer-motion"

const icon = {
  hidden: {
    pathLength: 0,
    fill: "rgba(139, 46, 141, 0)"
  },
  visible: {
    pathLength: 1,
    fill: "rgba(91, 46, 141, 1)"
  }
}

export const AnimatedBehanceIcon = () => (
  <div className="place-content-center">
    <motion.svg xmlns="http://www.w3.org/2000/svg" className="overflow-visible stroke-[#5B2E8D] stroke-2" width="46" height="46" fill="#5b2e8d" viewBox="0 0 256 256">
      <motion.path
        d="M117.82,121.39A42,42,0,0,0,86,52H32A12,12,0,0,0,20,64V192a12,12,0,0,0,12,12H90a46,46,0,0,0,27.82-82.61ZM44,76H86a18,18,0,0,1,0,36H44ZM90,180H44V136H90a22,22,0,0,1,0,44ZM156,76a12,12,0,0,1,12-12h64a12,12,0,0,1,0,24H168A12,12,0,0,1,156,76Zm44,24a52,52,0,0,0,0,104,51.45,51.45,0,0,0,22.7-5.21,12,12,0,1,0-10.49-21.58A27.73,27.73,0,0,1,200,180a28.05,28.05,0,0,1-25.3-16H240a12,12,0,0,0,12-12A52.06,52.06,0,0,0,200,100Zm-25.3,40a28,28,0,0,1,50.6,0Z"
        strokeLinecap="round"
        variants={icon}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: "easeInOut" },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] }
        }}
      >
      </motion.path>
    </motion.svg>
  </div>
)
