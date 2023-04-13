import React from "react";
import { HiEye } from "react-icons/hi";
import { AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import Image from "next/image";

const Card = ({ item: { id, img, subTitle, liveLink, repoLink } }: any) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{
        type: "spring",
        Bounce: 0.25,
        duration: 1,
        delay: (0.2 * id) / 2,
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
      <div className={`card__content bottom`}>
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
