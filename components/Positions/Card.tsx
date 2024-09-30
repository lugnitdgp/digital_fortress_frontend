"use client";
import { useState } from 'react';
import Canvas from "./Canvas"
import styles from "./Card.module.css"

interface CardProps{
    pos : string ;
    username : string ;
    avatar : string ;
    score : string ;
}

const Card : React.FC<CardProps> = ({ pos , username , avatar , score })=>{
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
       setIsHover(true);
    };
 
    const handleMouseLeave = () => {
       setIsHover(false);
    };

    let color , height = "12rem";
    if(pos === 'first'){
        color = "#FFD700";
        height = "15rem"
    }
    else if(pos === 'second'){
        color = "#C0C0C0";
    }
    else{
        color = "#CD7F32";
    }

    const cardStyle = {
        borderRadius: "0.5rem",
        boxShadow: `0 0 4px ${color}`,
        height: height ,
        border: `2px solid ${color}`,
        transition: "all 0.3s ease-in-out",
        backgroundColor: isHover ? color: "rgba(0, 0, 0, 0.2)",
        display: "flex",
        justifyContent: "center",

    }

    return (
    <div className={styles.leaderboardItem}  style={{height:height}}>
        <div className={styles.canvasContainer} style={{height:height}}>
            <Canvas color={color}/>
            <div className={styles.userInfo} style={cardStyle}
            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <p className={styles.position}>{pos.toUpperCase()}</p>
                <div className={styles.user}>
                    <img src={avatar} alt="Avatar" className={styles.avatar}/>
                    <div className={styles.userDetails}>
                        <p className={styles.username}>{username}</p>
                        <p className={styles.score}>Score: {score}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    ) ;
}

export default Card ;