"use client"
import React, { useEffect, useState } from 'react';
import styles from "./rulescard.module.scss";

export default function Rulescard() {
    const [textRules, setTextRules] = useState("RULES");
    const [loading, setLoading] = useState(true);

    const animateText = () => {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let frame = 0;
    
        const randomizeText = (txt: string) => {
          return txt
            .split("")
            .map(() => chars[Math.floor(Math.random() * chars.length)])
            .join("");
        };
    
        const intervalId = setInterval(() => {
          if (frame < 30) {
            setTextRules(randomizeText(textRules));
            frame++;
          } else {
            clearInterval(intervalId);
            setTextRules("RULES");
          }
        }, 40);
      };

      useEffect(() => {
        if (!loading) {
          animateText();
        }
      }, [loading]);
      
    return (
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <div className={`${styles.cardSide} ${styles.cardFront}`}>
                <div className={styles.head}>
                    <h1 className={styles.animatedText}>
                        <span className={styles.digitalText} >{textRules}</span>
                    </h1>
                </div>
            </div>
            <div className={`${styles.cardSide} ${styles.cardBack}`}>
              <h2>Back Side</h2>
              <p>This is the back of the card.</p>
            </div>
          </div>
        </div>
      );
};
