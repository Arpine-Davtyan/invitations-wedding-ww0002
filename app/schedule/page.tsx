"use client";

import { motion } from "motion/react";

import { scheduleItems, weddingInfo } from "@/lib/contstants";
import { ChurchIcon, CheersIcon, MapPinIcon } from "@phosphor-icons/react";

import { fadeUp, scaleIn, staggerContainer } from "@/lib/animations";


const Schedule = () => {
    return (
        <section className="section">

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="flex max-sm:flex-col w-full max-size justify-around gap-8"
            >

                {scheduleItems.map((item, index) => (
                    <motion.div
                        key={index}
                        variants={fadeUp}
                        className="flex-col-center gap-1"
                    >
                        <motion.h4 variants={fadeUp}>
                            {item.title}
                        </motion.h4>

                        <motion.div
                            variants={scaleIn}
                            className="flex-center w-[55px] h-[55px] mt-8"
                        >
                            {item.icon === "ChurchIcon" && (
                                <ChurchIcon
                                    size={50}
                                    weight="duotone"
                                    className="text-primary"
                                />
                            )}

                            {item.icon === "CheersIcon" && (
                                <CheersIcon
                                    size={50}
                                    weight="duotone"
                                    className="text-primary"
                                />
                            )}
                        </motion.div>

                        <motion.span
                            variants={fadeUp}
                            className="text-4xl text-primary font-cormorant-garamond mb-2"
                        >
                            {item.time}
                        </motion.span>

                        <motion.p
                            variants={fadeUp}
                            className="text-md text-primary font-light"
                        >
                            {item.location}
                        </motion.p>
                        <motion.a
                            variants={fadeUp}
                            href={item.mapUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-map"
                        >
                            <MapPinIcon size={20} weight="fill" />
                            Open in Maps
                        </motion.a>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Schedule;