import { useEffect, useState } from "react";

export const SpaceBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    createStars();
    createMeteors();

    const handleResize = () => {
      createStars();
    };

    window.addEventListener('resize', handleResize); // Update stars on window resize
    return () => window.removeEventListener('resize', handleResize); // Cleanup listener on unmount
  }, []);

  // Create stars based on screen size
  const createStars = () => {
    const numOfStars = Math.floor((window.innerWidth * window.innerHeight) / 10000); // Sets number of stars based on screen size
    const newStars = [];

    for (let star = 0; star < numOfStars; star++) {
      newStars.push({ 
        id: star, // Unique identifier for each star
        size: Math.random() * 3 + 1, // Random size between 1 and 4
        x: Math.random() * 100, // Random x position
        y: Math.random() * 100, // Random y position
        opacity: Math.random() * 0.5 + 0.5, // Random opacity between 0.5 and 1,
        animationDuration: Math.random() * 3 + 5 // Random animation duration between 5 and 8 seconds
      });
    }

    setStars(newStars);
  }

  // Create meteors at random intervals
  const createMeteors = () => {
    const numOfMeteors = 5; // Sets number of meteors
    const newMeteors = [];

    for (let meteor = 0; meteor < numOfMeteors; meteor++) {
      newMeteors.push({ 
        id: meteor, // Unique identifier for each meteor
        size: Math.random() * 5 + 1, // Random size between 1 and 4
        x: Math.random() * 100, // Random x position
        y: Math.random() * 20, // Random y position
        delay: Math.random() * 15, // Random delay between 0.5 and 1
        animationDuration: Math.random() * 3 + 3 // Random animation duration between 2 and 5 seconds
      });
    }

    setMeteors(newMeteors);
  }

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      { stars.map((star) => (
        <div 
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
          width: `${star.size}px`, // Width and height based on star size
          height: `${star.size}px`, // Width and height based on star size
          left: `${star.x}%`, // Positioning based on random x and y
          top: `${star.y}%`, // Positioning based on random x and y
          opacity: star.opacity, // Opacity based on random value
          animationDuration: `${star.animationDuration}s` // Animation duration based on random value
        }}
      />
      ))}

      { meteors.map((meteor) => (
        <div 
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: `${meteor.size * 50}px`, // Width and height based on meteor size
            height: `${meteor.size * 0.5}px`, // Width and height based on meteor size
            left: `${meteor.x}%`, // Positioning based on random x and y
            top: `${meteor.y}%`, // Positioning based on random x and y
            animationDelay: meteor.delay, // Delay based on random value
            animationDuration: `${meteor.animationDuration}s` // Animation duration based on random value
          }}
        />
      ))}
    </div>
  )
}