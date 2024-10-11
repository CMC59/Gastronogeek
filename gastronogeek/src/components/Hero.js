import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}> 
          Découvrez l'Art de la Cuisine
        </h1>
        <p className={styles.paragraph}>
            Des recettes délicieuses, des astuces de chef, et plus encore
        </p>
        <div className={styles.ctaButtons}>
          <Link href="/recettes" className={`${styles.btn} ${styles.btnPrimary}`}>
            Voir les Recettes
          </Link>
        </div>
      </div>
      <div className={styles.heroImage}> 
        <Image
                src="/images/spices-black-background-space-text.jpg"
                alt="Plat délicieux"
                width={800}
                height={600}
            />
      </div>
    </div>
  );
}

export default Hero;
