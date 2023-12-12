import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function OurGoal() {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const h1Opacity = useTransform(scrollYProgress, [0.16, 0.2, 0.36], [0, 1, 0]);
  const groupOneDisplay = useTransform(scrollYProgress, (v) =>
    v > 0.16 && v < 0.36 ? "flex" : "none"
  );

  const groupTwoDisplay = useTransform(scrollYProgress, (v) =>
    v > 0.36 && v < 0.56 ? "grid" : "none"
  );
  const groupTwoOpacity = useTransform(
    scrollYProgress,
    [0.36, 0.4, 0.56],
    [0, 1, 0]
  );

  const groupTwoY = useTransform(
    scrollYProgress,
    [0.36, 0.4, 0.56],
    ["100%", "-50%", "-50%"]
  );

  const groupThreeDisplay = useTransform(scrollYProgress, (v) =>
    v > 0.56 && v < 0.76 ? "grid" : "none"
  );

  const groupThreeOpacity = useTransform(
    scrollYProgress,
    [0.56, 0.6, 0.76],
    [0, 1, 0]
  );

  const groupThreeY = useTransform(
    scrollYProgress,
    [0.56, 0.6, 0.76],
    ["100%", "-50%", "-50%"]
  );

  const groupFourDisplay = useTransform(scrollYProgress, (v) =>
    v > 0.76 && v < 0.96 ? "grid" : "none"
  );

  const groupFourOpacity = useTransform(
    scrollYProgress,
    [0.76, 0.8, 0.96],
    [0, 1, 0]
  );

  const groupFourY = useTransform(
    scrollYProgress,
    [0.76, 0.8, 0.96],
    ["100%", "-50%", "-50%"]
  );

  const gradientBgPosition = useTransform(scrollYProgress, (v) => {
    if (v > 0 && v < 1) {
      return "block";
    } else {
      return "none";
    }
  });

  const gradientBgColor = useTransform(
    scrollYProgress,
    [0.1, 0.2, 0.4, 0.6, 0.8, 1],
    [
      "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 100%",
      "linear-gradient(180deg, #500724 0%, rgba(0,0,0,0) 100%",
      "linear-gradient(180deg, #500724 0%, rgba(0,0,0,0) 100%",
      "linear-gradient(180deg, #172554 0%, rgba(0,0,0,0) 100%",
      "linear-gradient(180deg, #052e16 0%, rgba(0,0,0,0) 100%",
      "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 100%",
    ]
  );

  return (
    <motion.section
      ref={targetRef}
      className="min-h-[600vh] py-16 relative px-4 bg-black"
    >
      <motion.div
        style={{
          display: gradientBgPosition,
          opacity: 0.5,
          background: gradientBgColor,
        }}
        className="top-0 left-0 fixed inset-0 bg-red-500"
      ></motion.div>
      <motion.div
        style={{ display: groupOneDisplay }}
        className="sticky top-1/2 flex flex-col items-center -translate-y-1/2 "
      >
        <motion.h1
          style={{ opacity: h1Opacity }}
          className="text-white text-8xl font-passion font-bold mb-2 text-center"
        >
          Our Goal
        </motion.h1>
      </motion.div>
      <motion.div
        style={{
          display: groupTwoDisplay,
          opacity: groupTwoOpacity,
          y: groupTwoY,
        }}
        className="sticky top-1/2 grid grid-cols-1 lg:grid-cols-2 gap-4 -translate-y-1/2"
      >
        <motion.img
          alt="always together"
          loading="lazy"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="col-span-1 h-full object-cover rounded"
          src="/bg5.png"
        />
        <div className="col-span-1 py-16">
          <motion.h3
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="text-red-500 text-6xl xl:text-8xl font-passion xl:text-left"
          >
            Discover the <span className="text-white">Metaverse</span>
          </motion.h3>
          <motion.p
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="font-noto text-white/80 mt-6"
          >
            Step into a realm where the past meets the future. Samurai Conquest
            offers a metaverse experience like no other. Embark on quests,
            explore ancient temples, or simply soak in the breathtaking
            landscapes of a world that seamlessly blends the time-honored
            traditions of the samurai with the limitless potential of the
            metaverse.{" "}
          </motion.p>
        </div>
      </motion.div>

      <motion.div
        style={{
          display: groupThreeDisplay,
          opacity: groupThreeOpacity,
          y: groupThreeY,
        }}
        className="sticky top-1/2 grid grid-cols-1 lg:grid-cols-2 -translate-y-1/2 gap-4"
      >
        <div className="col-span-1 py-16">
          <motion.h3
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="text-red-500 text-6xl xl:text-8xl font-passion xl:text-left"
          >
            Build Your <span className="text-white">Community</span>
          </motion.h3>
          <motion.p
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="font-noto text-white/80 mt-6"
          >
            In Samurai Conquest, power is not only about strength or skill but also about numbers and alliances. Gather your friends and expand your community. Engage in massive battles in the world of Samurai Conquest, strategize in council meetings, and celebrate victories. The larger your community, the stronger your kingdom becomes.

          </motion.p>
        </div>
        <motion.img
          alt="talking agreeing"
          loading="lazy"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="col-span-1 h-full object-cover rounded"
          src="/bg6.png"
        />
      </motion.div>
      <motion.div
        style={{
          display: groupFourDisplay,
          opacity: groupFourOpacity,
          y: groupFourY,
        }}
        className="sticky top-1/2 grid grid-cols-1 lg:grid-cols-2 -translate-y-1/2 gap-4"
      >
        <motion.img
          alt="always together"
          loading="lazy"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="col-span-1 h-full object-cover"
          src="/bg7.png"
        />

        <div className="col-span-1 py-16">
          <motion.h3
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="text-red-500 text-6xl xl:text-8xl font-passion xl:text-left"
          >
            Earn as <span className="text-white">You Play</span>
          </motion.h3>
          <motion.p
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="font-noto text-white/80 text-sm mt-6"
          >
            Samurai Conquest goes beyond mere exploration and conquest. The more you immerse yourself in this expansive world, the greater your chances of earning rewards become. Increased interaction leads to more significant gains. Convert your strategic moves and gaming skills into tangible rewards. The unique world of Samurai Conquest awaits you, catering to experienced players, samurai enthusiasts, and those curious about the metaverse alike. Embark on your adventure, build your legacy, and savor the opportunities that each game brings.
          </motion.p>
        </div>
      </motion.div>
    </motion.section>
  );
}
