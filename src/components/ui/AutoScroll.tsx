"use client";

import { useEffect } from "react";

export default function AutoScroll() {
  useEffect(() => {
    // Check if we've already scrolled this session
    const hasScrolled = sessionStorage.getItem("hasAutoScrolled");
    if (hasScrolled) return;
    
    sessionStorage.setItem("hasAutoScrolled", "true");

    let animationFrameId: number;
    let isCancelled = false;

    // Cancel animation if user tries to scroll manually
    const cancelScroll = () => {
      isCancelled = true;
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };

    window.addEventListener("wheel", cancelScroll, { passive: true });
    window.addEventListener("touchstart", cancelScroll, { passive: true });
    window.addEventListener("mousedown", cancelScroll, { passive: true });

    // Wait 1.5 seconds after page load before starting to scroll
    const timeoutId = setTimeout(() => {
      if (isCancelled) return;
      
      const targetScroll = window.innerHeight * 0.4; // Scroll down 40% of the viewport height
      const duration = 2500; // 2.5 seconds duration for a slow, smooth scroll
      const startPosition = window.scrollY;
      let startTime: number | null = null;

      function animation(currentTime: number) {
        if (isCancelled) return;
        
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        
        // Easing function (easeInOutQuad) for a natural feel
        const easeProgress = progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2;
        
        window.scrollTo(0, startPosition + targetScroll * easeProgress);

        if (timeElapsed < duration) {
          animationFrameId = requestAnimationFrame(animation);
        } else {
          // Clean up listeners when done
          window.removeEventListener("wheel", cancelScroll);
          window.removeEventListener("touchstart", cancelScroll);
          window.removeEventListener("mousedown", cancelScroll);
        }
      }

      animationFrameId = requestAnimationFrame(animation);
    }, 1500);

    return () => {
      clearTimeout(timeoutId);
      cancelScroll();
      window.removeEventListener("wheel", cancelScroll);
      window.removeEventListener("touchstart", cancelScroll);
      window.removeEventListener("mousedown", cancelScroll);
    };
  }, []);

  return null;
}
