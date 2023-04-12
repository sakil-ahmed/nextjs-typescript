import React from "react";
import SectionTitle from "../sectionTitle/SectionTitle";
import Image from "next/image";
import image from "./../../assets/image.webp";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { animationFade } from "./../Animation/Motion";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <SectionTitle text="About Me" />
        <div className="row line">
          <motion.div {...animationFade("left", -100)} className="about_image">
            <Image src={image} alt="Sakil Ahmed" priority={true} />
          </motion.div>
          <div className="about_content">
            <motion.h2 {...animationFade("bottom", 100)} className="title">
              Welcome to Sakil, Best Web Development Services
            </motion.h2>
            <motion.h5 {...animationFade("bottom", 100)} className="sub_title">
              I have 1+ years of experiences in web Development for give you
              better services.
            </motion.h5>
            <motion.p {...animationFade("bottom", 100)} className="description">
              A wonderful serenity has taken possession of my entire soul, like
              these sweet mornings of spring which I enjoy with my whole heart.
              I am alone, and feel the charm of existence in this spot, which
              was created for the bliss of souls like mine. I am so happy, my
              dear friend, so absorbed in the exquisite
            </motion.p>
            <motion.div
              {...animationFade("bottom", 100)}
              className="counter_container"
            >
              <p className="">
                <CountUp
                  className="project_counter"
                  enableScrollSpy={true}
                  scrollSpyOnce={true}
                  end={20}
                  suffix="+"
                />
                <span>Projects Completed</span>
              </p>
              <p className="">
                <CountUp
                  className="client_counter"
                  enableScrollSpy={true}
                  scrollSpyOnce={true}
                  end={10}
                  suffix="+"
                />
                <span>Happy clients</span>
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
