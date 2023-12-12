import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function SamuraiConquest() {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const gradientBgColor = useTransform(
    scrollYProgress,
    [0.1, 0.2, 0.4, 0.6, 0.8, 1],
    [
      "linear-gradient(135deg, #000000 0%, #0c4a6e 100%",
      "linear-gradient(135deg, #0c4a6e 0%, #000000 100%",
      "linear-gradient(135deg, #000000 0%, #312e81 100%",
      "linear-gradient(135deg, #312e81 0%, #701a75 100%",
      "linear-gradient(135deg, #701a75 0%, #000000 100%",
      "linear-gradient(135deg, #000000 0%, #881337 100%",
    ]
  );

  const headerOpacity = useTransform(
    scrollYProgress,
    [0.1, 0.25, 0.35],
    [0, 1, 0]
  );

  const headerDisplay = useTransform(scrollYProgress, (v) =>
    v > 0.1 && v < 0.35 ? "block" : "none"
  );

  const gradientBgPosition = useTransform(scrollYProgress, (v) => {
    if (v > 0 && v < 1) {
      return "block";
    } else {
      return "none";
    }
  });

  const storyOpacity = useTransform(
    scrollYProgress,
    [0.35, 0.45, 0.55],
    [0, 1, 0]
  );

  const storyDisplay = useTransform(scrollYProgress, (v) =>
    v > 0.35 && v < 0.55 ? "flex" : "none"
  );

  const storyY = useTransform(
    scrollYProgress,
    [0.35, 0.45, 0.55],
    [100, 0, 100]
  );

  const story2Opacity = useTransform(
    scrollYProgress,
    [0.55, 0.65, 0.75],
    [0, 1, 0]
  );

  const story2Display = useTransform(scrollYProgress, (v) =>
    v > 0.55 && v < 0.75 ? "flex" : "none"
  );

  const story2Y = useTransform(
    scrollYProgress,
    [0.55, 0.65, 0.75],
    [100, 0, 100]
  );

  const story3Opacity = useTransform(
    scrollYProgress,
    [0.75, 0.85, 0.95],
    [0, 1, 0]
  );

  const story3Display = useTransform(scrollYProgress, (v) =>
    v > 0.75 && v < 0.95 ? "flex" : "none"
  );

  const story3Y = useTransform(
    scrollYProgress,
    [0.75, 0.85, 0.95],
    [100, 0, 100]
  );

  return (
    <motion.section
      ref={targetRef}
      className="h-[800vh] relative px-8 bg-black w-screen"
    >
      <motion.div
        style={{
          display: gradientBgPosition,
          opacity: 0.5,
          background: gradientBgColor,
        }}
        className="top-0 left-0 fixed h-full max-h-screen w-screen bg-red-500 bg-no-repeat"
      ></motion.div>

      <motion.div className="sticky top-1/2 lg:top-1/2 -translate-y-1/2  w-full bg-samurai-conquest bg-cover bg-center">
        <div className="z-50 h-full flex flex-col items-center relative">
          <motion.h1
            style={{ opacity: headerOpacity, display: headerDisplay }}
            className="text-4xl md:text-6xl lg:text-8xl font-poppins font-black text-white text-center"
          >
            WHO ARE <br />
            SAMURAI CONQUEST?
          </motion.h1>
          <motion.div
            className="flex flex-col justify-center items-center"
            style={{ opacity: storyOpacity, display: storyDisplay, y: storyY }}
          >
            <p className="text-4xl tracking-[.8px] font-black !text-white font-poppins uppercase">
              Samurai Conquest Game Story
            </p>
            <div className="font-poppins text-[#777] lg:w-1/2 mx-auto mt-6 flex flex-col gap-2">
              <p>
                In ancient times, there exists a mysterious continent inhabited
                solely by samurai. This land is known as Samurai Conquest. The
                natural resources on this continent are limited, leading to
                fierce competition among its inhabitants. Within this land,
                communities form their own kingdoms, battling other kingdoms in
                a grand arena.
              </p>
              <p>
                The kingdoms formed by these communities consist of samurai from
                various villages and cities. Each samurai possesses unique
                attributes and skills, providing strategic advantages in
                battles.
              </p>
              <p>
                Leaders of these kingdoms aim to expand their territories by
                winning wars and forging strategic alliances. However, in this
                world, victory isn&apos;t achieved by swordsmanship alone.
                Intelligence, strategy, and diplomacy are equally important.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="flex flex-col justify-center items-center"
            style={{
              opacity: story2Opacity,
              display: story2Display,
              y: story2Y,
            }}
          >
            <p className="text-4xl tracking-[.8px] font-black !text-white font-poppins uppercase">
              Primary Objectives of the Game
            </p>
            <div className="font-poppins text-[#777] lg:w-1/2 mx-auto mt-6 flex flex-col gap-2">
              <p>
                <b>Kingdoms: </b> Players work to lead their kingdoms to victory. In this process, players must establish dominance in regions by collaborating with communities or engaging in battles with rival kingdoms.

              </p>
              <p>
                <b>Developing Strategy: </b> Players should communicate effectively with other players within their kingdoms and implement tactical warfare strategies crucial for success in the game by making informed decisions together.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="flex flex-col justify-center items-center"
            style={{
              opacity: story3Opacity,
              display: story3Display,
              y: story3Y,
            }}
          >
            <p className="text-4xl tracking-[.8px] font-black !text-white font-poppins uppercase">
              Primary Objectives of the Game
            </p>
            <div className="font-poppins text-[#777] lg:w-1/2 mx-auto mt-6 flex flex-col gap-2">
              <p>
                <b>Diplomacy and Alliances:</b> Players can become stronger by
                forming alliances with other kingdoms. These alliances offer
                advantages in wars and allow players to utilize resources more
                effectively.
              </p>
              <p>
                <b>Samurai Enhancement: </b>
                 Players can strengthen their samurai, giving them more
                advantages in battles and helping them dominate over opponents. Coming Soon
              </p>{" "}
              <p className="pb-12">
                <b>Resource Management: </b>
                Players can elevate their kingdoms, gain more power in battles, and achieve superiority over other kingdoms by managing the resources of their kingdoms.
              </p>{" "}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}

{
  /**
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            style={{ opacity: divGroupOpacity }}
            className="mt-12 h-[34rem] overflow-hidden relative grid grid-cols-3 gap-12"
          >
            <div className="font-noto text-white/80  before:absolute before:h-full before:inset-0 before:bg-black/20 before:rounded before:-z-10 p-4 font-medium mt-2 text-sm flex flex-col gap-8 overflow-y-auto story-scroll lg:pr-4 h-full">
              <p className="text-lg font-black !text-white">
                <i>Samurai Conquest Game Story</i>
              </p>
              <p>
                In ancient times, there exists a mysterious continent inhabited
                solely by samurai. This land is known as Samurai Conquest. The
                natural resources on this continent are limited, leading to
                fierce competition among its inhabitants. Within this land,
                communities form their own kingdoms, battling other kingdoms in
                a grand arena.
              </p>
              <p>
                The kingdoms formed by these communities consist of samurai from
                various villages and cities. Each samurai possesses unique
                attributes and skills, providing strategic advantages in
                battles.
              </p>
              <p>
                Leaders of these kingdoms aim to expand their territories by
                winning wars and forging strategic alliances. However, in this
                world, victory isn&apos;t achieved by swordsmanship alone.
                Intelligence, strategy, and diplomacy are equally important.
              </p>
            </div>
            <div className="font-noto text-white/80  before:absolute before:h-full before:inset-0 before:bg-black/20 before:rounded before:-z-10 p-4 font-medium mt-2 text-sm flex flex-col gap-8 overflow-y-auto story-scroll lg:pr-4 h-full">
              <p className="text-lg font-black !text-white">
                <i>Primary Objectives of the Game</i>
              </p>
              <p>
                <i>
                  Establishing Kingdoms: Players take an active role in the
                  Samurai Conquest world by forming their own kingdoms. During
                  this kingdom-establishing process, players can gain
                  territories by collaborating with communities or by battling
                  opposing kingdoms.
                </i>
              </p>
              <p>
                <b className="text-white">Developing Strategy:</b> Players
                formulate their strategies for battles, deciding on tactics
                crucial for success in the game.
              </p>
            </div>
            <div className="font-noto text-white/80  before:absolute before:h-full before:inset-0 before:bg-black/20 before:rounded before:-z-10 p-4 font-medium mt-2 text-sm flex flex-col gap-8 overflow-y-auto story-scroll lg:pr-4 h-full">
              <p>
                <b className="text-white">Diplomacy and Alliances:</b> Players
                can become stronger by forming alliances with other kingdoms.
                These alliances offer advantages in wars and allow players to
                utilize resources more effectively.
              </p>
              <p>
                <b>Samurai Enhancement:</b>
                Players can strengthen their samurai, giving them more
                advantages in battles and helping them dominate over opponents.
              </p>{" "}
              <p className="pb-12">
                <b className="text-white">Resource Management:</b>
                By managing their kingdom&apos;s resources, players can create a
                more formidable kingdom, ensuring greater strength in battles
                and gaining an edge over other kingdoms.
              </p>{" "}
            </div>
          </motion.div>

*/
}
