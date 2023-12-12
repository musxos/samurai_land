import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function WhoAre() {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const divGroupOpacity = useTransform(
    scrollYProgress,
    [0.1, 0.5, 1],
    [0, 1, 0]
  );
  const divGroupY = useTransform(
    scrollYProgress,
    [0.1, 0.5, .7, 1],
    ["200%", "-50%", "-50%", "200%"]
  );

  const childDivOpacity = useTransform(
    scrollYProgress,
    [0.1, 0.5, 1],
    [0, 1, 0]
  );

  return (
    <>
      <motion.section
        ref={targetRef}
        className="relative min-h-[200vh] bg-black w-screen"
      >
        <motion.div
          style={{ opacity: divGroupOpacity, y: divGroupY }}
          className="sticky top-1/2 flex flex-col items-center -translate-y-1/2 "
        >
          <motion.div
            className="flex flex-col items-center text-center md:px-0 px-4"
            style={{ opacity: childDivOpacity }}
          >
            <h1 className="text-white text-4xl md:text-6xl lg:text-8xl font-passion font-bold mb-2">
              Who are we?
            </h1>
            <p className="text-white text-2xl font-inter">
            We are a team of passionate developers and designers in the Play to Earn gaming industry working to provide solutions for sustainability, with a strong focus on NFTs and blockchain.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>
    </>
  );
}
