import { useEffect, useState } from "react";

// id, size, x, y, opacity, animationDuration
type Star = {
    id: number;
    size: number;
    x: number;
    y: number;
    opacity: number;
    animationDuration: number;
};

function StarBackground() {
    const [stars, setStars] = useState<Star[]>([]);

    useEffect(() => {
        generateStars();
    }, []);

    const generateStars = () => {
        const numberOfStars = Math.floor(
            Math.floor(innerWidth * innerHeight) / 1000
        );

        const newStars: Star[] = [];

        for(let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1, // Size between 1 and 3
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5, // Opacity between 0.5 and 1
                animationDuration: Math.random() * 4 + 2 // Duration between 2s and 6s
            });
        };


        setStars(newStars);    
    };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">StarBackground</div>
  )
}

export default StarBackground