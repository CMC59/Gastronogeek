"use client";

import React, { useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import Transition from "@/utils/Transition";
import { useStore } from "@/libs/store";

export default function PageTransition({ children }) {
  const pathname = usePathname();
  const overlayRef = useRef(null);
  const contentRef = useRef(null);

  const { isTransitionActive, setIsTransitionActive } = useStore();

  // Initial setup: hide overlay
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(overlayRef.current, { scaleX: 0 });
    });

    return () => ctx.revert();
  }, []);

  // Transition effect
  useEffect(() => {
    if (!isTransitionActive) return;

    const tl = gsap.timeline();

    tl.fromTo(
      overlayRef.current,
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 0.4,
        transformOrigin: "left",
        ease: "power4.inOut",
      }
    )
      .to(overlayRef.current, {
        scaleX: 0,
        duration: 0.4,
        transformOrigin: "right",
        ease: "power4.inOut",
        delay: 0.6,
      })
      .call(() => {
        setIsTransitionActive(false);
      });
  }, [isTransitionActive, setIsTransitionActive]);

  return (
    <>
      <div key={pathname} ref={contentRef}>
        {children}
      </div>
      <Transition 
        ref={overlayRef} 
      />
    </>
  );
}