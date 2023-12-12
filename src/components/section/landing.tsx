import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function LandingSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const targetRef = useRef(null);

  const h1Controls = useAnimation();
  const pControls = useAnimation();
  const buttonControls = useAnimation();

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const sectionY = useTransform(scrollYProgress, [0.1, 0.5], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.5], [0, 1]);

  const onTimeUpdate = () => {
    const video = videoRef.current!;

    if (video.currentTime > 1) {
      h1Controls.start({ opacity: 1, scale: 1 });
    }

    if (video.currentTime > 2) {
      pControls.start({ opacity: 1, scale: 1 });
    }

    if (video.currentTime > 3) {
      buttonControls.start({ opacity: 1, scale: 1 });
    }
  }

  return (
    <motion.section
      ref={targetRef}
      style={{ y: sectionY, opacity }}
      className="min-h-screen relative before:absolute before:z-40 before:inset-0 before:bg-black/70 flex flex-col items-center justify-center w-screen"
    >
      <video
        ref={videoRef}
        onTimeUpdate={onTimeUpdate}
        className="absolute w-screen h-screen object-cover z-10 object-center"
        autoPlay
        muted
      >
        <source src="/output.webm" type="video/webm" />
        <source src="/output.mp4" type="video/mp4" />
      </video>
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={h1Controls}
        className="font-jakosta text-center px-8 text-8xl lg:text-[10rem] text-white z-50"
      >
        Samurai Conquest
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, scale: 0.8 }}
        animate={pControls}
        className="font-noto lg:w-1/2 text-center text-white/80 z-50 text-xl px-8 lg:mt-0 mt-4"
      >
        Next generation NFT board game with{" "}
        <span className="text-xl font-semibold text-blue-500"></span> unique
        Samurai NFTs on {" "}
        <span className="font-semibold text-green-500">BNB Chain</span>.
      </motion.p>

      <div className="flex lg:flex-row flex-col gap-8 mt-12">
        <motion.a
          href="https://play.samuraiconquest.com"
          target="_blank"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={buttonControls}
          transition={{ delay: 0.1 }}
          className="z-50 text-red-500 px-6 py-3 rounded border border-transparent hover:border-red-500 font-semibold font-noto"
        >
          Play Game <i className="ri-arrow-right-line"></i>
        </motion.a>
        <motion.a
          href="https://linktr.ee/samuraiconquest"
          target="_blank"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={buttonControls}
          transition={{ delay: 0.2 }}
          className="z-50 text-white px-6 py-3 rounded border border-transparent hover:border-white font-semibold font-noto"
        >
          Join Community <i className="ri-arrow-right-line"></i>
        </motion.a>
        <motion.a
          href="https://drive.google.com/file/d/1bGhG1iwm43-XcNAl1Z7V5quyUv13jfkd/view?usp=sharing"
          target="_blank"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={buttonControls}
          transition={{ delay: 0.3 }}
          className="z-50 text-white px-6 py-3 rounded border border-transparent hover:border-white font-semibold font-noto"
        >
          Whitepaper <i className="ri-arrow-right-line"></i>
        </motion.a>
      </div>
    </motion.section>
  );
}
