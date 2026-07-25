"use client";

import { motion } from "motion/react";

import Title from "@/components/Title";
import CountdownTimer from "@/components/CountDownTimer";

import { fadeUp, staggerContainer } from "@/lib/animations";


const CountDown = () => {
  return (
    <section id="countDown" className="section">

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col items-center"
      >

        <motion.div variants={fadeUp}>
          <Title title="Counting the days" />
        </motion.div>


        <motion.h3
          variants={fadeUp}
          className="mt-3"
        >
          Until we say{" "}
          <span className="marked-text">
            “I do”
          </span>
        </motion.h3>


        <motion.div variants={fadeUp}>
          <CountdownTimer />
        </motion.div>

      </motion.div>

    </section>
  );
};

export default CountDown;