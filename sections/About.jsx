"use client";
import { motion } from "framer-motion";
import { TypingText } from "../components";
import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About SmartHostly" textStyles="text-center" />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[10px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white "
      >
        <span className="font-extrabold text-white">Smarthostly</span> Your Ultimate Event Partner for Movies, Events, Parties and More! {" "}
        <span className="font-extrabold text-white">
          {" "}
          Simplify ticketing and hosting{" "}
        </span>{" "}
        with our smart solutions. From movie premieres to thrilling events and unforgettable parties, {" "}
        <span className="font-extrabold text-white"> Smarthostly </span> ensures seamless planning and execution for every occasion. {" "}
        <span className="font-extrabold text-white">Explore</span> the madness
        of the Smarthostly by scrolling down
      </motion.p>

      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow-down"
        className="w-[18px] h-[28px] object-contain mt-[28px] "
      />
    </motion.div>
  </section>
);

export default About;
