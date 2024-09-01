import Canvas from "./Canvas"
import styles from "./Positions.module.scss"

interface CardProps{
    pos : any ;
    username : string ;
    avatar : string ;
    score : string ;
}

const Card : React.FC<CardProps> = ({ pos , username , avatar , score })=>{
    let color , height ;
    if(pos=='first')

    return (
    <div className={`${styles.leaderboardItem}`}>
        <div className={styles.canvasContainer}>
            <Canvas />
            <div className={`${styles.userInfo} , ${styles.pos}`} 
            style={{}}>
                <h1 className={styles.position}>{pos}</h1>
                <img src={avatar} alt="Avatar" className={styles.avatar}/>
                <h1 className={styles.username}>{username}</h1>
                <h1 className={styles.score}>{score}</h1>
            </div>
        </div>
    </div>
    ) ;
}

export default Card ;