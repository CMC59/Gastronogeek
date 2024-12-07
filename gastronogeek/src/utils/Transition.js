"use client";

import React, { forwardRef } from "react";
import Image from "next/image";
import styles from "./Transition.module.css";

const Transition = forwardRef((_, ref) => {
  return (
    <div 
      ref={ref} 
      className={`fixed inset-0 z-[9999] bg-black origin-left ${styles.transition} overflow-hidden`}
    >
      <div className={styles.titleOverlay}>
        <h1 className={styles.colorTitle}>Gastronogeek</h1>
      </div>
      <div className="absolute inset-0 bg-black opacity-70"></div>
    </div>
  );
});

Transition.displayName = 'Transition';

export default Transition;
