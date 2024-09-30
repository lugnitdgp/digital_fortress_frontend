"use client";
import { useState } from 'react';
import styles from './Positions.module.scss';
import Card from './Card'; // Ensure Card component is imported correctly

export default function Positions() {
    const [pos, setPos] = useState("first");

    return (
        <div className={styles.container}>
            <Card 
                pos={pos} 
                username="Jane Doe" 
                avatar="https://www.w3schools.com/howto/img_avatar.png" 
                score="900" 
            />
            <Card 
                pos="second" 
                username="John Doe" 
                avatar="https://www.w3schools.com/howto/img_avatar.png" 
                score="900" 
            />
            <Card 
                pos="third" 
                username="Jack Doe" 
                avatar="https://www.w3schools.com/howto/img_avatar.png" 
                score="800" 
            />
        </div>
    );
}
