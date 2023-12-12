import classNames from "classnames";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import lodash from "lodash";
import SamuraiShowSection from "@/components/section/samurai-show.section";
import LandingSection from "@/components/section/landing";
import WhoAre from "@/components/section/who-are";
import Collection from "@/components/section/collection";
import SamuraiConquest from "@/components/section/samurai-conquest";
import OurGoal from "@/components/section/our-goal";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

let images: any[] = [];

for (let i = 1; i <= 36; i++) {
  images.push(`/collection/male/${i}.png`);
  images.push(`/collection/female/${i}.png`);
}

images = lodash.shuffle(images);

export function Section2() {
  const [selected, setSelected] = useState(1);

  const collectionName =
    selected == 1 ? "female" : selected == 2 ? "male" : "shogun";

  const sectionBacgroundGradient =
    selected == 1
      ? "from-red-500/20"
      : selected == 2
      ? "from-green-500/20"
      : "from-yellow-500/20";

  const sectionClass = classNames(
    "min-h-screen relative flex flex-col lg:justify-center px-8 bg-gradient-to-br via-black/50 to-black/50 transition-all py-72 xl:gap-0 gap-20",
    sectionBacgroundGradient
  );

  const cardClass = classNames(
    "flex w-full md:flex-row flex-col bg-black/50 [&.active]:bg-white/80 [&.active]:text-black [&:not(.active)_p]:text-white/30 [&.active]:scale-105 transition text-white p-4 backdrop-blur-sm cursor-pointer hover:scale-105 hover:bg-white/80 hover:text-black group hover:backdrop-blur-sm hover:shadow-xl"
  );

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className={sectionClass}
    >
      <motion.h1
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        className="font-passion text-center lg:text-left text-white text-8xl z-50"
      >
        RARITY
      </motion.h1>
      <div className="mt-12 flex flex-row xl:flex-col xl:w-80 gap-2 z-50">
        <motion.div
          onClick={() => setSelected(1)}
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className={classNames(cardClass, selected == 1 && "active")}
        >
          <img
            loading="lazy"
            src="/art/726.png"
            alt="Female Samurai"
            className="w-20 h-20 shrink-0 bg-gray-500"
          />
          <div className="flex flex-col mt-4 md:mt-0 md:ml-4">
            <h2 className="font-passion text-3xl">Female</h2>
            <p className="font-open font-medium mt-2 group-hover:text-black">
              3000/3000
            </p>
          </div>
        </motion.div>
        <motion.div
          onClick={() => setSelected(2)}
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className={classNames(cardClass, selected == 2 && "active")}
        >
          <img
            alt="Male Samurai"
            loading="lazy"
            src="/art/20.png"
            className="w-20 h-20 shrink-0 bg-gray-500"
          />
          <div className="flex flex-col mt-4 md:mt-0 md:ml-4">
            <h2 className="font-passion text-3xl">Male</h2>
            <p className="font-open font-medium mt-2 group-hover:text-black">
              3000/3000
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 0.5 }}
          transition={{ delay: 0.3 }}
          className={classNames(
            cardClass,
            selected == 3 && "active",
            "cursor-not-allowed"
          )}
        >
          <img
            alt="Shogun Samurai"
            loading="lazy"
            src="/art/37.png"
            className="w-20 h-20 shrink-0 bg-gray-500"
          />
          <div className="flex flex-col mt-4 md:mt-0 md:ml-4">
            <h2 className="font-passion text-3xl">Shogun</h2>
            <p className="font-open font-medium mt-2 group-hover:text-black">
              0/0
            </p>
          </div>
        </motion.div>
      </div>
      <div className="xl:absolute xl:-translate-y-1/2 xl:-translate-x-1/2 xl:top-1/2 xl:left-1/2 z-50">
        <div className="relative z-50">
          <div className="relative flex justify-center z-50">
            <AnimatePresence mode="wait">
              <motion.div
                key={collectionName + 2}
                initial={{ x: 100, opacity: 0, rotate: "2deg" }}
                whileInView={{ x: 0, opacity: 0.5, rotate: "-2deg" }}
                exit={{ x: 100, opacity: 0, rotate: "2deg" }}
                className="w-80 p-4 bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-900/50 rounded border border-blue-800 absolute scale-95 opacity-50 z-40 mr-72 -rotate-2"
              >
                <img
                  src={`/collection/${collectionName}/36.png`}
                  className="h-96 object-cover rounded"
                />
              </motion.div>

              <motion.div
                key={collectionName + 1}
                initial={{ x: -100, opacity: 0, rotate: "-2deg" }}
                whileInView={{ x: 0, opacity: 0.5, rotate: "2deg" }}
                exit={{ x: -100, opacity: 0, rotate: "-2deg" }}
                className="w-80 p-4 bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-900/50 rounded border border-yellow-800 absolute scale-95 opacity-50 z-40 ml-72 rotate-2"
              >
                <img
                  src={`/collection/${collectionName}/14.png`}
                  className="h-96 object-cover rounded"
                />
              </motion.div>

              <motion.div
                key={collectionName}
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                className="w-80 p-4 z-50 bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-900/80 rounded border border-pink-800"
              >
                <img
                  src={`/collection/${collectionName}/20.png`}
                  className="h-96 object-cover rounded"
                />

                <div className="flex flex-col">
                  <h1 className="text-xl font-phudu mt-4 text-white font-semibold">
                    SamuraiConquest #20
                  </h1>

                  <div className="mt-2 flex flex-col gap-1 text-white/80 font-poppins text-sm">
                    <div className="flex justify-between">
                      <span>Price</span>
                      <span>0.55 SWC</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Rarity</span>
                      <span className="text-pink-500">Mistic</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            <div
              style={{
                transform: "rotate3d(1, 0, 0, 80deg)",
              }}
              className="bg-neutral-200/5 w-96 h-96 rounded-full border-2 border-neutral-200/10 blur-3xl absolute bottom-0 -mb-64 opacity-50"
            />
          </div>
        </div>
      </div>
      <div className="xl:absolute xl:right-10 xl:top-1/2 xl:-translate-y-1/2 xl:w-96 xl:text-left text-center">
        <div className="flex flex-col relative">
          <h1 className="font-phudu text-white text-4xl font-bold">
            18.000 <br/> Unique Variants
          </h1>
          <p className="mt-4 font-poppins text-[#777]">
            In the Samurai Conquest collection, all Samurai classes has 18.000
            unique variants. <br />
            
          </p>
        </div>
      </div>
    </motion.section>
  );
}

export function Section1() {
  return (
    <section
      id="section1"
      className="flex flex-col items-center justify-center py-72"
    >
      <h1 className="text-8xl font-passion text-white px-8">
        8000 UNIQUE SAMURAI
      </h1>
      <p className="font-passion text-white/60 px-8 mb-12">
        <i>BRAVELY FIGHTING FOR THE HONOR OF THEIR LORDS AND KINGDOMS</i>
      </p>

      <div className="grid grid-cols-6 lg:grid-cols-12 px-8">
        {images.map((image, index) => (
          <motion.img
            alt="Samurai"
            loading="lazy"
            key={index}
            src={image}
            className="w-96 h-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.01 }}
          />
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <LandingSection />
      <SamuraiShowSection />
      <WhoAre />
      <Collection />
      <SamuraiConquest />
      <OurGoal />
      <Section2 />
      <section className="lg:min-h-screen flex flex-col items-center justify-center px-8 py-12">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-poppins font-black text-white">
          ROADMAP
        </h1>
        <p className="font-poppins text-white/60 lg:text-base text-sm lg:w-1/3 text-center">
          <i>
            Samurai Conquest is a long-term project that will continue to be
            developed and improved over time. We are committed to providing a
            unique metaverse experience for our community.
          </i>
        </p>

        <div className="flex lg:flex-row flex-col gap-12 w-full h-max overflow-x-auto">
          <RoadmapItem
            name="Stage #0"
            options={[
              {
                label: "Launch on Testnet",
              },
              {
                label: "Distribution of the First 2k Samurai",
              },
              {
                label: "Partnerships",
              },
            ]}
            delay={0.1}
          />
          <RoadmapItem
            name="Stage #1"
            options={[
              {
                label: "Initial Testnet Feedback and Report",
              },
              {
                label: "Distribution of the First 5k Samurai",
              },
             
              {
                label: "Introduction of the $SamuraiConquest Token",
              },
            ]}
            delay={0.2}
          />
          <RoadmapItem
            name="Stage #2"
            options={[
              {
                label: "Integration with Layerzero",
              },
              {
                label: "Multichain Integration",
              },
              {
                label: "Implementation of Chainlink automation systems",
              },
              {
                label: "Introduction of SamuraiDAO",
              },
              {
                label: "Metaverse Marketing Initiatives",
              },
            ]}
            delay={0.3}
          />
          <RoadmapItem
            name="Stage #3"
            options={[
              {
                label: "Performance Enhancements and Bug Fixes",
              },
              {
                label: "User Experience Improvements",
              },
            ]}
            delay={0.4}
          />
        </div>
      </section>
      <section className="lg:min-h-screen overflow-hidden bg-no-repeat bg-cover px-8 py-64 flex flex-col gap-12 items-center relative">
        <motion.h1
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-8xl font-passion text-white z-50 text-center"
        >
          Our Team
        </motion.h1>
        <motion.p
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="font-noto text-white/90 font-medium lg:w-1/3 text-center z-50"
        >
          <i>
            Our team is composed of experienced developers, designers, and a
            marketing team that is ready to take on the challenge of creating a
            unique metaverse experience.
          </i>
        </motion.p>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            <TeamMember
              name="Dmitri Petrov"
              role="Team Lead"
              github="https://github.com/musxos"
              description="I'm here."
              image="/team/76.png"
            />
            <TeamMember
              name="Quazeom"
              role="Community Manager"
              description="I'm here."
              image="/team/91.png"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export function TeamMember({
  name,
  role,
  description,
  image,
  github,
  twitter,
  linkedin,
}: any) {
  return (
    <div className="flex flex-col rounded-lg p-4 bg-neutral-900">
      <div className="flex lg:flex-row flex-col relative gap-4">
        <div className="shrink-0">
          <img
            className="h-full lg:w-32 h-32 object-cover rounded-lg"
            src={image}
          />
        </div>
        <div className="flex flex-col relative">
          <div className="px-3 py-1 bg-neutral-800 text-white w-max font-inter rounded-full text-xs">
            {role}
          </div>
          <div className="font-poppins font-semibold text-lg mt-1 text-white">
            {name}
          </div>
          <div className="relative w-72">
            <div className="text-sm font-poppins text-[#777]">
              {description}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 flex justify-center lg:justify-end font-medium text-white font-poppins gap-4 text-sm">
      { twitter &&   <a href={twitter} target="_blank" className="flex items-center gap-2">
          Twitter
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </a>}
      {github &&   <a href={github} target="_blank" className="flex items-center gap-2">
          Github
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </a>}
        {linkedin && <a href={linkedin} target="_blank" className="flex items-center gap-2">
          Linkedin
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </a>}
      </div>
    </div>
  );
}

export function RoadmapItem({ delay, name, options = [] }: any) {
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ delay: delay }}
      className="mt-12 flex flex-col xl:w-80 min-w-[20rem] gap-4"
    >
      <h1 className="text-2xl text-white font-semibold font-poppins">
        <i>{name}</i>
      </h1>
      {options.map((option: any, i: number) => (
        <div
          key={i}
          className="bg-neutral-900 p-4 flex items-center xl:h-20 font-poppins"
        >
          {option.finish && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10 stroke-green-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          )}
          {!option.finish && (
            <div className="w-6 h-6 rounded-full border border-white/50 shrink-0"></div>
          )}
          <div className="ml-4">
            <h2
              className={
                "font-noto text-lg " +
                (option.finish
                  ? "text-green-500 font-poppins"
                  : "text-white/50")
              }
            >
              {option.label}
            </h2>
          </div>
        </div>
      ))}
    </motion.div>
  );
}
