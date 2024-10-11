"use client"; // Ensure this is a client-side component

import React, { useEffect } from 'react';

const MouseFollower = () => {
  useEffect(() => {
    // Check if window is defined (to ensure we're on the client side)
    if (typeof window !== 'undefined') {
      // Load the GSAP and Mouse Follower scripts
      const script1 = document.createElement('script');
      script1.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/gsap.min.js';
      script1.async = true;

      const script2 = document.createElement('script');
      script2.src = 'https://unpkg.com/mouse-follower@1/dist/mouse-follower.min.js';
      script2.async = true;

      // Append scripts to the document body
      document.body.appendChild(script1);
      document.body.appendChild(script2);

      // Initialize Mouse Follower once both scripts are loaded
      const initMouseFollower = () => {
        if (window.MouseFollower) {
          new window.MouseFollower({
            speed: 0.55,
            ease: 'expo.out',
            visible: true,
            visibleOnState: false,
            stateDetection: {
              '-pointer': 'a, button',
            },
          });
        }
      };

      // Wait for the scripts to load
      script2.onload = initMouseFollower;

      // Clean up on unmount
      return () => {
        document.body.removeChild(script1);
        document.body.removeChild(script2);
      };
    }
  }, []);

  return null;
};

export default MouseFollower;
