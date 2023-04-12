import React from "react";
import { HiEye } from "react-icons/hi";
import { AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { animationFade } from "../Animation/Motion";

const Card = ({ item: { id, img, subTitle, liveLink, repoLink } }: any) => {
  const [direction, setDirection] = useState("bottom");

  const handleMouseEnter = (event: any) => {
    const card = event.target;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.x;
    const y = event.clientY - rect.y;

    if (x <= rect.width / 3) {
      setDirection("left");
    } else if (x >= (rect.width * 2) / 3) {
      setDirection("right");
    } else if (y <= rect.height / 3) {
      setDirection("top");
    } else if (y >= (rect.height * 2) / 3) {
      setDirection("bottom");
    } else {
      setDirection("bottom");
    }
  };

  return (
    <motion.div
      onMouseEnter={handleMouseEnter}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{
        type: "spring",
        Bounce: 0.25,
        duration: 1,
        delay: 0.2 * id,
      }}
      variants={{
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
      }}
      className="card__box"
    >
      <div className="card__thumbnail">
        <Image src={img} alt="Project Thumbnail" priority={true} />
      </div>
      <div className={`card__content ${direction}`}>
        <h3>Website Development</h3>
        <p>{subTitle}</p>
        <div className="icons">
          <a href={liveLink} target="_blank">
            <HiEye size={"25px"} />
          </a>
          <a href={repoLink} target="_blank">
            <AiFillGithub size={"25px"} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
