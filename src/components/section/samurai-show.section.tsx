import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function SamuraiShowSection() {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    document.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });

    setWindowWidth(window.innerWidth);
  }, []);

  const samuraiItemOpacity = useTransform(
    scrollYProgress,
    [0.2, 0.3, 0.4],
    [0, 1, 0]
  );
  const samuraiItemScale = useTransform(scrollYProgress, [0.1, 0.3], [0.8, 1]);
  const samuraiItemY = useTransform(scrollYProgress, [0.1, 0.3], [200, 0]);
  const samuraiItemX_One = useTransform(scrollYProgress, [0.1, 0.3], [200, 0]);
  const samuraiItemX_Two = useTransform(scrollYProgress, [0.1, 0.3], [-200, 0]);
  const samuraiHidden = useTransform(scrollYProgress, (v) => {
    if (v > 0.3) return "hidden";
    return "visible";
  });

  const samuraiItemMainOpacity = useTransform(
    scrollYProgress,
    [0.1, 0.3, 0.55, 0.75, 0.9],
    [0, 1, 1, 1, 0]
  );

  const samuraiItemMainScale = useTransform(
    scrollYProgress,
    [0.1, 0.3, 0.55, 0.75, 1],
    [0.8, 1, 1.25, 1.25, 1]
  );
  const samuraiMainItemY = useTransform(
    scrollYProgress,
    [0.1, 0.3, 0.55, 0.75, 0.8, 1],
    ["5", "0vh", "25vh", "25vh", "25vh", "0vh"]
  );
  const samuraiMainItemX = useTransform(
    scrollYProgress,
    [0.1, 0.3, 0.55, 0.75, 0.8, 1],
    ["0", "0vw", "-25vw", "-25vw", "-25vw", "0vw"]
  );

  const textOpacity = useTransform(
    scrollYProgress,
    [0.55, 0.75, 0.8],
    [0, 1, 0]
  );

  const divDisplay = useTransform(scrollYProgress, (v) => {
    if (v > 0.4) return "none";
    return "block";
  });

  const h1 = useTransform(scrollYProgress, [0.2, 0.25, 0.4], [0, 1, 0]);

  const p = useTransform(scrollYProgress, [0.2, 0.25, 0.4], [0, 1, 0]);

  const backgroundGradient = useTransform(
    scrollYProgress,
    [0.1, 0.3, 0.4],
    [
      "linear-gradient(180deg, #0a0a0a50 0%, #3b076450 100%)",
      "linear-gradient(180deg, #3b076450 0%, #0a0a0a50 100%)",
      "linear-gradient(180deg, #0a0a0a50 0%, #4c051950 100%)",
    ]
  );

  return (
    <motion.section
      style={{
        background: backgroundGradient,
        backgroundRepeat: "no-repeat",
      }}
      ref={targetRef}
      className="min-h-[600vh] relative z-20 w-screen"
    >
      <motion.div className="sticky top-[10vh] flex flex-col">
        <motion.div className=" flex justify-center gap-4">
          <motion.img
            style={{
              opacity: samuraiItemOpacity,
              scale: samuraiItemScale,
              y: samuraiItemY,
              display: samuraiHidden,
              x: samuraiItemX_One,
            }}
            className="h-96 w-80 object-cover rounded-xl origin-top -z-10"
            src="/collection/female/1.png"
            alt=""
          />
          <motion.img
            style={{
              opacity: samuraiItemMainOpacity,
              scale: windowWidth > 1024 ? samuraiItemMainScale : 1,
              y: windowWidth > 1024 ? samuraiMainItemY : 0,
              x: windowWidth > 1024 ? samuraiMainItemX : 0,
            }}
            className="h-96 w-80 object-cover rounded-xl -mt-8 z-50"
            src="/collection/male/1.png"
            alt=""
          />

          <motion.img
            style={{
              opacity: samuraiItemOpacity,
              scale: samuraiItemScale,
              y: samuraiItemY,
              display: samuraiHidden,
              x: samuraiItemX_Two,
            }}
            className="h-96 w-80 object-cover rounded-xl -z-10"
            src="/collection/female/2.png"
            alt=""
          />
        </motion.div>
        <motion.div
          style={{
            opacity: textOpacity,
            x: windowWidth > 1024 ? "45vw" : "0",
          }}
          className=" text-white absolute lg:text-left text-center bottom-5 md:bottom-[10vh] lg:bottom-auto lg:px-0 px-4 md:translate-x-0 -translate-y-1/2 md:top-1/2"
        >
          <h1 className="text-5xl md:text-6xl xl:text-8xl mb-4 font-jakosta">
            Samurai Conquest
          </h1>

          <p className="md:w-1/2 font-noto text-white/80">
          Samurai Legends: Samurai Conquests is not just a game; it&apos;s also a community experience. You can communicate with other players, form alliances, and achieve great victories together.
          </p>
        </motion.div>
        <motion.div
          style={{
            opacity: divDisplay,
          }}
          className="flex flex-col text-center items-center lg:mt-24 lg:px-0 px-4"
        >
          <motion.h1
            style={{
              opacity: h1,
            }}
            className="text-white text-7xl font-poppins font-bold"
          >
            Samurai Collection
          </motion.h1>
          <motion.p
            style={{
              opacity: p,
            }}
            className="text-white font-poppins md:w-1/2 mx-auto text-white/80 mt-4"
          >
            A sustainable play-to-earn NFT game where you lead mighty samurai warriors on epic conquests!
          </motion.p>
        </motion.div>
      </motion.div>
      <img className="absolute bottom-0 left-0" src="/trees.svg" />
    </motion.section>
  );
}
