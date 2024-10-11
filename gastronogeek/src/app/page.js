import React from 'react';
import Image from 'next/image';
import Header from '../components/Header';
import styles from './page.module.css'; // Styles spécifiques à la page, optionnel
// import Hero from '@/components/Hero';
import Card from '../components/Card';
// import HeroBanner from '@/components/HeroBanner';
import HeroSlider from '../components/HeroSlider';

export default function Home() {
  const handleButtonClick = () => {
    alert('Button clicked!');
  };

  return (
    <>
      <Header />
      <HeroSlider />
      {/* <Hero /> */}
      {/* <div className={styles.isolatedCard}>
        <Card />
        <Card />
        <Card />
      </div> */}
    </>
  );
}
