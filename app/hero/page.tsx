"use client";

import { weddingInfo } from "@/lib/contstants";
import { CaretDownIcon } from "@phosphor-icons/react/dist/ssr";
import { motion } from "motion/react";

import { fade, fadeUp, scaleIn, staggerContainer } from "@/lib/animations";


const Hero = () => {
    const scrollDown = () => {
        document
            .getElementById("countDown")
            ?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="hero bg-section">
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="flex flex-col items-center"
            >
                <motion.h4 variants={fade}>
                    Together with their families
                </motion.h4>

                <motion.h1 variants={fadeUp}>
                    {weddingInfo.name1}
                    <span className="marked-text flex-col-center">
                        and
                    </span>
                    {weddingInfo.name2}
                </motion.h1>

                <motion.div
                    variants={scaleIn}
                    className="w-16 h-px bg-foreground opacity-25 mx-auto"
                />

                <motion.p
                    variants={fadeUp}
                    className="text-3xl text-dark font-cormorant-garamond my-2.5"
                >
                    {weddingInfo.date}
                </motion.p>


                <motion.p
                    variants={fadeUp}
                    className="font-jost text-sm font-light"
                >
                    {weddingInfo.location}
                </motion.p>
            </motion.div>

            <motion.button
                variants={fade}
                initial="hidden"
                animate="visible"
                transition={{
                    delay: 1.5,
                }}
                onClick={scrollDown}
                className="absolute bottom-14 cursor-pointer animate-bounce"
                aria-label="Scroll down"
            >
                <CaretDownIcon
                    size={20}
                    weight="light"
                />
            </motion.button>
        </section>
    );
};

export default Hero;