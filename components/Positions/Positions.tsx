"use client" ;
import styles from './Positions.module.scss';
import Card from "./Card" ;
import leaderboard from "@/data.json";

export default function Positions() {
    const data = leaderboard.slice(0, 3);
    return (
        <div className={styles.container}>
            <Card pos='second' username="Jane Doe" avatar="https://www.w3schools.com/howto/img_avatar.png" score="900" />
            <Card pos='first' username="John Doe" avatar="https://www.w3schools.com/howto/img_avatar.png" score="1000" />
            <Card pos='third' username="Jack Doe" avatar="https://www.w3schools.com/howto/img_avatar.png" score="800" />
        </div>
    );
}