"use client";

import { motion } from "motion/react";

import Title from "@/components/Title";
import RSVPForm from "../../components/RSVPForm";

import { fadeUp, staggerContainer, scaleIn } from "@/lib/animations";


const RSVP = () => {
  return (
    <section className="section bg-section">
      <motion.div variants={fadeUp}>
        <Title title="Kindly respond" />
      </motion.div>


      <motion.h3 variants={fadeUp}>
        Will you join us?
      </motion.h3>


      <motion.p
        variants={fadeUp}
        className="text-center text-md text-primary font-light py-3 max-w-[380px]"
      >
        We would be honoured by your presence. Please reply by the first of August.
      </motion.p>


      <RSVPForm />
    </section>
  )
}

export default RSVP;