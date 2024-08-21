import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./ImgViewField.module.scss";

const ImgViewField = ({
  src,
  alt,
  className = "",
  onErrorSrc = "../../../assets/icons/icon-image.svg",
}) => {
  const [loaded, setLoaded] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);

  const handleError = () => {
    setCurrentSrc(onErrorSrc);
  };

  const handleLoad = () => {
    setLoaded(true);
  };

  return (
    <div className={`${styles.imageContainer} ${className}`}>
      <img
        src={currentSrc}
        alt={alt}
        className={`${styles.image} ${!loaded ? styles.blur : ""}`}
        onError={handleError}
        onLoad={handleLoad}
        loading="lazy"
      />
    </div>
  );
};

ImgViewField.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  className: PropTypes.string,
  onErrorSrc: PropTypes.string,
};

export default ImgViewField;
