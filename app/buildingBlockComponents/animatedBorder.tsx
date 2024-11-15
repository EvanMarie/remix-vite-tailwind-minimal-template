import { motion } from "framer-motion";

type AnimatedBorderProps = {
  height?: string;
  direction?: "left" | "right";
  delay?: number;
};

export default function AnimatedBorder({
  height = "0.2vh",
  direction = "left",
  delay = 1.2,
}: AnimatedBorderProps) {
  return (
    <motion.div
      className="bg-gradient-to-r from-transparent via-black to-transparent"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      transition={{ delay: delay, duration: 1 }}
      style={{
        borderRadius: "none",
        height: height,
        position: "absolute",
        bottom: 0,
        left: direction === "left" ? 0 : "auto",
        right: direction === "right" ? 0 : "auto",
      }}
    />
  );
}
