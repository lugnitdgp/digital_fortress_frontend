"use client" ;
import { useState } from 'react';

import styles from './Positions.module.scss';
import clsx from 'clsx';
import Canvas from './Canvas';
// import Matrix from './Matrix';
import Card from "./Card" ;

export default function Positions() {
    const [pos , setPos] = useState("first");
    return (
        <div className={styles.container}>
            <div className={`${styles.leaderboardItem}`}>
                    <div className={styles.canvasContainer}>
                        <Canvas color="#c0c0c0"/>
                        <div className={`${styles.userInfo} , ${styles.second}`}>
                            <h1 className={styles.position}>Second</h1>
                            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" className={styles.avatar}/>
                            <h1 className={styles.username}>John Doe</h1>
                            <h1 className={styles.score}>900</h1>
                        </div>
                    </div>
                    
            </div>
            <Card pos={pos} username="Jane Doe" avatar="https://www.w3schools.com/howto/img_avatar.png" score="900" />
                {/* <div className={`${styles.leaderboardItem} , ${styles.first}`}>
                    <div className={styles.canvasContainer}>
                        <Canvas />
                        <div className={`${styles.userInfo} , ${styles.first}`}>
                            <h1 className={styles.position}>First</h1>
                            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" className={styles.avatar}/>
                            <h1 className={styles.username}>John Doe</h1>
                            <h1 className={styles.score}>900</h1>
                        </div>
                    </div>
                </div> */}
            <Card pos='first' username="John Doe" avatar="https://www.w3schools.com/howto/img_avatar.png" score="1000" />
                <div className={`${styles.leaderboardItem} , ${styles.third}`}>
                <div className={styles.canvas}>
                        <Canvas color="#cd7f32"/>
                    </div>
                    <div className={styles.userInfo}>
                        <h1 className={styles.position}>Third</h1>
                        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" className={styles.avatar}/>
                        <h1 className={styles.username}>John Doe</h1>
                        <h1 className={styles.score}>900</h1>
                    </div>
                </div>
            {/* <Card pos='third' username="Jack Doe" avatar="https://www.w3schools.com/howto/img_avatar.png" score="800" /> */}
        </div>
    );
}