import React, { useRef } from 'react';
import styles from "./ranktiles.module.scss";

export default function Tiles() {
  const data = [
    { title: "Ford", rank: "1" },
    { title: "UFC", rank: "2" },
    { title: "Lincoln", rank: "3" },
    { title: "Royal Caribbean", rank: "4" },
    { title: "Sleepiq", rank: "5" },
    { title: "NFL", rank: "6" },
    { title: "Nike", rank: "7" },
  ];

  const spanRef = useRef<HTMLSpanElement>(null);

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const relX = e.pageX - rect.left;
    const relY = e.pageY - rect.top;

    if (spanRef.current) {
      spanRef.current.style.top = `${relY}px`;
      spanRef.current.style.left = `${relX}px`;
    }
  };

  const handleMouseOut = (e: React.MouseEvent<HTMLDivElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const relX = e.pageX - rect.left;
    const relY = e.pageY - rect.top;

    if (spanRef.current) {
      spanRef.current.style.top = `${relY}px`;
      spanRef.current.style.left = `${relX}px`;
    }
  };

  return (
    <div className={styles.outerDiv}>
      {data.map((item, index) => (
        <div
          key={index}
          className={styles.clippedRectangle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseOut}
        >
          <p>{item.title}</p>
          <p>{item.rank}</p>
        </div>
      ))}
    </div>
  );
}
