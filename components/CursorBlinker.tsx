import { motion } from "framer-motion";

const cursorVariants = {
  blinking: {
    opacity: [0, 1, 1, 0],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatDelay: 0,
      ease: "linear",
      times: [0, 0.5, 0.5, 1]
    },
  }
};

export default function CursorBlinker() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      variants={cursorVariants}
      animate="blinking"
      className="inline-block h-4 w-[2px] bg-white-2"
    />
  );
}
