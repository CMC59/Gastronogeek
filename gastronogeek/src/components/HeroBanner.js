import React from 'react';
import Button from '@mui/material/Button';
import styles from './HeroBanner.module.css'; // Import the CSS module

const HeroBanner = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Welcome to Our Amazing Platform</h1>
        <p className={styles.heroDescription}>
          Discover the power of innovation and creativity. Join us on this exciting journey!
        </p>
        <Button className={styles.ctaButton}>Get Started</Button>
      </div>
      <div className={styles.overlayTop}></div>
      <div className={styles.overlayBottom}></div>
    </div>
  );
};

export default HeroBanner;
