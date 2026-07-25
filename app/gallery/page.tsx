"use client";

import Image from "next/image";
import { motion } from "motion/react";

import GalleryItems from "@/components/GalleryItems";
import Title from "@/components/Title";
import { weddingInfo } from "@/lib/contstants";

import { fadeUp, scaleIn, staggerContainer } from "@/lib/animations";


const Gallery = () => {
    return (
        <section className="section bg-section">

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="flex flex-col items-center"
            >

                <motion.div variants={scaleIn} className="w-full">
                    <Image
                        src={weddingInfo.mainImage}
                        alt="Main Image"
                        width={1200}
                        height={800}
                        className="max-size w-full h-auto mb-6"
                    />
                </motion.div>


                <motion.div variants={fadeUp}>
                    <Title title="Our story in frames" />
                </motion.div>


                <motion.div variants={fadeUp}>
                    <GalleryItems />
                </motion.div>

            </motion.div>

        </section>
    );
};

export default Gallery;