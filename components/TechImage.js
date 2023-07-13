import React from "react";
import Image from "next/image";
import styles from "../styles/Images.module.css";

const TechImage = ({ src, alt }) => {
  return (
    <div className={styles.icon_container}>
      <Image className={styles.icon} src={src} sizes="100vw" fill alt={alt} />
    </div>
  );
};

export default TechImage;
