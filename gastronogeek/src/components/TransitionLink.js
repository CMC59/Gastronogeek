"use client";

import React from "react";
import { useRouter, usePathname } from "next/navigation";
import { useStore } from "@/libs/store";
import Link from "next/link";

export default function TransitionLink({
  url,
  children,
  className,
  onClick,
}) {
  const router = useRouter();
  const currentPathname = usePathname();
  const setIsTransitionActive = useStore(
    (state) => state.setIsTransitionActive
  );

  const handleClick = async (e) => {
    e.preventDefault();
    
    // Call any additional onClick handler passed
    if (onClick) {
      onClick(e);
    }

    const destinationUrl = new URL(url, window.location.origin);
    const destinationPathname = destinationUrl.pathname;

    // Check if destination is different from current path
    if (destinationPathname !== currentPathname) {
      setIsTransitionActive(true);
      
      // More reliable transition timing
      await new Promise(resolve => setTimeout(resolve, 400));
      router.push(url);
    } else {
      // If same path, just navigate without transition
      router.push(url);
    }
  };

  return (
    <Link 
      href={url} 
      onClick={handleClick} 
      className={className}
      scroll={false} // Prevent default scroll behavior
    >
      {children}
    </Link>
  );
}