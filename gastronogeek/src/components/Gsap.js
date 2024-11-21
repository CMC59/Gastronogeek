'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CustomEase } from 'gsap/CustomEase';
import Flip from 'gsap/Flip';

export default function GSAP({ children }) {
  // Enregistrer les plugins GSAP
  gsap.registerPlugin(ScrollTrigger, CustomEase, Flip);

  useEffect(() => {
    // Créer les animations personnalisées
    CustomEase.create('bezier', '0.33, 1, 0.68, 1');
    CustomEase.create('transition', '0.76, 0, 0.24, 1');
    CustomEase.create('textReveal', '0.65, 0, 0.35, 1');

    // Exemple de ScrollTrigger pour afficher la progression du défilement
    ScrollTrigger.create({
      start: 0,
      end: 'max',
      onUpdate: (self) => {
        gsap.to(document.querySelector('#scroll-progress'), {
          width: `${self.progress * 100}%`,
          duration: 0.1,
          ease: 'none',
        });
      },
    });
  }, []); // S'exécute au montage du composant

  return children;
}
