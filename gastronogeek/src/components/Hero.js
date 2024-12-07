import React from 'react';
import styles from './Hero.module.css';
import Image from 'next/image';


const Hero = () => {
    return (
      <div className={styles.hero}>
        <Image 
          src="/images/gastro.jpg" 
          alt="Hero Background" 
          layout="fill" 
          objectFit="cover" 
          objectPosition="center" 
          priority 
        />
        <div className={styles.content}>
          <h1 className={styles.title}>Bienvenue sur Gastronogeek</h1>
          <p className={styles.subtitle}>Découvrez nos recettes</p>
        </div>
      </div>
    );
  };
  
  export default Hero;