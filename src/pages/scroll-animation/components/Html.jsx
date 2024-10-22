import { gsap } from 'gsap';
import React, { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Html = () => {
  const ref = useRef();

  useEffect(() => {
    // Animate the color of the heading based on scroll position
    gsap.to(ref.current, {
      color: '#292828',
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 80%', // When the top of the element is 80% down the viewport
        end: 'top 20%',   // When the top reaches 20% down the viewport
        scrub: true,      // Smooth scrubbing for gradual transition
        onEnter: () => console.log('Entering the viewport: Hello'),
        onLeave: () => console.log('Leaving the viewport: Hello'),
        onEnterBack: () => console.log('Entering back into the viewport: Hello'),
        onLeaveBack: () => console.log('Leaving back out of the viewport: Hello'),
        onUpdate: (self) => {
          console.log('Current Scroll Position:', self.scroll());
        },
      },
    });

    // Cleanup function to kill the ScrollTrigger instance
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <h1
        ref={ref}
        style={{
          position: 'absolute',
          top: '50vh',
          left: '50vw',
          transform: 'translate(-50%, -50%)',
          color: '#f4b677', // Initial color
        }}
      >
        Hello
      </h1>
      <h1
        style={{
          position: 'absolute',
          top: '140vh',
          left: '50vw',
          transform: 'translate(-50%, -50%)',
          color: '#f4b677',
        }}
      >
        There
      </h1>
      <h1
        style={{
          position: 'absolute',
          top: '250vh',
          left: '50vw',
          transform: 'translate(-50%, -50%)',
          color: '#673ab7',
        }}
      >
        World
      </h1>
    </>
  );
};

export { Html };
