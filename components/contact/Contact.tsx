import React, { useEffect, useState } from "react";

import AnimatedLetters from "../AnimatedLetters/index";
import Form from "./form/Form";
import { motion } from "framer-motion";
import { animationFade } from "../Animation/Motion";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const [letterClass, setLetterClass] = useState("text-animate");
  const Arrayname = "Send me a Message".split("");

  useEffect(() => {
    setLetterClass("text-animate-hover");
  }, []);

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="row line">
          <div className="visible__rotate__text">
            <h1>Contat Me</h1>
          </div>
          <div className="from__wraper">
            <motion.h2
              {...animationFade("bottom", 100)}
              className="contact__title"
            >
              <AnimatedLetters
                letterClass={letterClass}
                strArray={Arrayname}
                idx={15}
              />
            </motion.h2>
            <motion.p
              {...animationFade("bottom", 100)}
              className="contact__description"
            >
              {t("Youremailaddresswillnotbepublished.Allfieldsarerequired")}
            </motion.p>
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
