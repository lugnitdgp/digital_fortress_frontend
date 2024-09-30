import Canvas from "./Canvas";
import styles from "./cards.module.scss";

interface CardProps {
    pos: string;
    username: string;
    avatar: string;
    score: string;
}

const Card: React.FC<CardProps> = ({ pos, username, avatar, score }) => {
    let color;
    if (pos === 'first') color = "#FFD700";
    else if (pos === 'second') color = "#C0C0C0";
    else if (pos === 'third') color = "#cd7f32";

    return (
        <div className={styles.leaderboardItem}>
            <div className={styles.canvasContainer}>
                <Canvas color={color} />
                <div className={styles.userInfo}>
                    <h1 className={styles.position}>{pos}</h1>
                    <img src={avatar} alt="Avatar" className={styles.avatar} />
                    <h1 className={styles.username}>{username}</h1>
                    <h1 className={styles.score}>{score}</h1>
                </div>
            </div>
        </div>
    );
};

export default Card;
