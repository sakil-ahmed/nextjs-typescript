import React from "react";
import Marquee from "react-fast-marquee";
import {useTranslation} from "react-i18next";

const Marque = () => {
  const {t} = useTranslation()
  return (
    <div style={{ position: "relative" }}>
      <div className="marque__container line">
        <Marquee speed={50}>
          {[...Array(10)].map((value, index, array)=>{
            return(
              <p style={{display:"block"}} key={index}>{t("Ialwaystrytoputmybestservicetomyclient")}</p>
            )
          })}
        </Marquee>
      </div>
    </div>
  );
};

export default Marque;
