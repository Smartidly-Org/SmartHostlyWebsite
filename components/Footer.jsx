"use client";

import { motion } from "framer-motion";
import { socials } from "../constants";
import styles from "../styles";
import { footerVariants } from "../utils/motion";
import Image from "next/image";
import headset from "../public/headset.svg";

const Footer = () => (
  <footer
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">
          Smart your events
        </h4>
        <button
          type="button"
          className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]"
        >
          <Image
            src={headset}
            alt="headset"
            className="w-[24px] h-[24px] object-contain"
          />

          <a href="/contact" class="font-normal text-[16px] text-white">
            Contact us
          </a>
        </button>

        <div className="flex flex-col">
          <div className="mb-[50px] h-[2px] bg-white opacity-10" />

          <div className="flex items-center justify-between flex-wrap gap-4">
            <h4 className="font-extrabold text-[24px] text-white">Smarthostly</h4>
            <p className="font-normal text-[14px] text-white opacity-50">
              Copyright © 2024 - Smarthostly. DT Privacy Technologies AB. All rights reserved.
              <p> </p>
              <a href="/terms" class="font-normal underline text-[16px] text-white">
                Terms of Service
              </a>
              &nbsp; | &nbsp;
              <a href="/privacy" class="font-normal underline text-[16px] text-white">
                Privacy Policy
              </a>
            </p>

            <div className="flex gap-4">
              {socials.map((social) => (
                <Image
                  key={social.name}
                  src={social.url}
                  alt={social.name}
                  className="w-[24px] h-[24px] object-contain cursor-pointer"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
export default Footer;
