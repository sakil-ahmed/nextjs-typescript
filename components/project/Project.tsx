import React, { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters/index";
import Card from "../card/Card";
import { motion } from "framer-motion";
import { card } from "./../../public/data/CardData";
import Link from "next/link";
import SectionTitle from "../sectionTitle/SectionTitle";
import { animationFade } from "../Animation/Motion";

const Project = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const textArrayname = "My Latest Project".split("");

  useEffect(() => {
    setLetterClass("text-animate-hover");
  }, []);

  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <div className="row line">
          <SectionTitle text="Projects" />
          <motion.h2 {...animationFade("bottom", 100)} className="title">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={textArrayname}
              idx={15}
            />
          </motion.h2>
          <motion.div className="card__container">
            {card.map((item) => {
              return <Card key={item.id} item={item} />;
            })}
          </motion.div>
          <div className="project__btns">
            <Link href={"#work"}>View all work</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
