import React, { useEffect, useState } from "react";
import { motion, stagger } from "framer-motion";
import AnimatedLetters from "../AnimatedLetters/index";
import Image from "next/image";
import { animationFade } from "../Animation/Motion";
import SectionTitle from "../sectionTitle/SectionTitle";
import { skillsData } from "@/public/data/CardData";

const Skills = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const textArrayname = "Technologies".split("");

  useEffect(() => {
    setLetterClass("text-animate-hover");
  }, []);

  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="row line">
          <SectionTitle text="My Skills" />
          <motion.h2 {...animationFade("bottom", 100)} className="title">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={textArrayname}
              idx={15}
            />
          </motion.h2>
        </div>
        <div className="technologies_container">
          {skillsData.map(({ id, img, text }) => {
            return (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  type: "spring",
                  Bounce: 0.25,
                  duration: 1,
                  delay: 0.1 * id,
                }}
                variants={{
                  hidden: { opacity: 0, scale: 0 },
                  visible: { opacity: 1, scale: 1 },
                }}
                key={id}
                className="tech_item"
              >
                <Image
                  src={img}
                  alt="React"
                  priority={true}
                  className="tech_item_img"
                />
                <span className="tech_item_text">{text}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
