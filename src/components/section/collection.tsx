import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Collection() {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const divGroupY = useTransform(
    scrollYProgress,
    [0.1, 0.5, 0.7, 1],
    ["200%", "-50%", "-50%", "200%"]
  );
  const divGroupOpacity = useTransform(
    scrollYProgress,
    [0.1, 0.5, 1],
    [0, 1, 0]
  );

  const groupOpacity = useTransform(
    scrollYProgress,
    [0.1, 0.5, 0.7, 1],
    [0, 1, 1, 0]
  );

  const collectionOpacity = useTransform(
    scrollYProgress,
    [0.5, 0.6, 1],
    [0, 1, 0]
  );

  const footerOpacity = useTransform(scrollYProgress, [0.5, 0.6, 1], [0, 1, 0]);

  const divGroupScale = useTransform(
    scrollYProgress,
    [0.1, 0.5, 0.7, 1],
    [0.8, 1, 1, 0.8]
  );

  return (
    <motion.section ref={targetRef} className="relative min-h-[300vh] bg-black w-screen">
      <motion.div
        style={{ opacity: divGroupOpacity, y: divGroupY, scale: divGroupScale }}
        className="sticky top-1/2 flex flex-col items-center -translate-y-1/2 text-center"
      >
        <motion.h1
          style={{ opacity: collectionOpacity }}
          className="text-white text-4xl md:text-6xl lg:text-8xl font-passion font-bold mb-2 px-12"
        >
          Collection
        </motion.h1>
        <motion.div
          style={{ opacity: groupOpacity }}
          className="flex items-center justify-center  gap-2 "
        >
          <motion.img
            style={{ scale: 0.8 }}
            src="/collection/female/24.png"
            alt=""
            className="w-64 h-96 object-cover rounded origin-right"
          />
          <motion.img
            style={{ scale: 0.9 }}
            src="/collection/female/32.png"
            alt=""
            className="w-64 h-96 object-cover rounded"
          />
          <motion.img
            src="/collection/female/17.png"
            alt=""
            className="w-64 h-96 object-cover rounded"
          />
          <motion.img
            style={{ scale: 0.9 }}
            src="/collection/male/36.png"
            alt=""
            className="w-64 h-96 object-cover rounded"
          />
          <motion.img
            style={{ scale: 0.8 }}
            src="/collection/male/33.png"
            alt=""
            className="w-64 h-96 object-cover rounded origin-left"
          />
        </motion.div>

        <motion.div
          style={{ opacity: footerOpacity }}
          className="text-4xl md:text-6xl lg:text-8xl text-white font-passion mt-12 font-medium px-4"
        >
          <span className=" font-bold">18.000+</span> unique samurai
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
