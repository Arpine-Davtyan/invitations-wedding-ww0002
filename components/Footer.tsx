"use client";

import { motion } from "motion/react";

import { weddingInfo } from "@/lib/contstants";
import { fadeUp, staggerContainer } from "@/lib/animations";


const Footer = () => {
    return (
        <footer>
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
            >

                <motion.h2 variants={fadeUp}>
                    {weddingInfo.name1} & {weddingInfo.name2}
                </motion.h2>


                <motion.p
                    variants={fadeUp}
                    className="text-xs mt-2 text-center tracking-[4px]"
                >
                    {weddingInfo.date}
                </motion.p>

            </motion.div>
        </footer>
    )
}

export default Footer;