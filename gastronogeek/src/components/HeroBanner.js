import React from 'react';
import Button from '@mui/material/Button';
import styles from './HeroBanner.module.css'; // Import the CSS module

const HeroBanner = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <p className={styles.heroDescription}>
        </p>
        {/* <Button className={styles.ctaButton}>Get Started</Button> */}
      </div>
      <div className={styles.overlayTop}></div>
      <div className={styles.overlayBottom}></div>
    </div>
  );
};

export default HeroBanner;
