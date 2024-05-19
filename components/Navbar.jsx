"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../styles";
import { navVariants } from "../utils/motion";
import search from "../public/search.svg";
import menu from "../public/menu.svg";
import logo from "../public/logo.png";


const Navbar = () => (
  // NOTE we can declare tags with motion like this for whichever tag we want to animate
  <nav className={`${styles.xPaddings} py-8 relative`}>
    <motion.div
      variants={navVariants}
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="absolute w-[50%] inset-0 gradient-01"
    />

    <motion.div
      variants={navVariants}
      whileInView="show"
      className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
    >
      {/* <Image
        src={search}
        alt="search-Icon"
        className="w-[24px] h-[24px] object-contain"
      /> */}

      <div className="font-bold text-[24px] leading-[30px] text-white ">
        <Image
          src={logo}
          alt="logo-Icon"
          className="w-[80%] h-[80%] object-contain"
        />
      </div>
      {/* <Image
        src={menu}
        alt="menu-Icon"
        className="w-[24px] h-[24px]"
      /> */}
    </motion.div>
  </nav>
);

export default Navbar;
