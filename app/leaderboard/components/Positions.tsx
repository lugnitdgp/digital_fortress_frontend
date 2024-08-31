import styles from './Positions.module.scss';
import clsx from 'clsx';
import Canvas from './Canvas';
// import Matrix from './Matrix';

export default function Positions() {

    return (
        <div className={styles.container}>
            <div className={`${styles.leaderboardItem} , ${styles.second}`}>
                    <div className={styles.canvas}>
                        <Canvas />
                    </div>
                    <div className={styles.userInfo}>
                        <h1 className={styles.position}>Second</h1>
                        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" className={styles.avatar}/>
                        <h1 className={styles.username}>John Doe</h1>
                        <h1 className={styles.score}>900</h1>
                    </div>
                </div>
                <div className={`${styles.leaderboardItem} , ${styles.first}`}>
                    {/* <div className={styles.canvas}>
                        <Canvas />
                    </div> */}
                    <div className={styles.userInfo}>
                        <h1 className={styles.position}>First</h1>
                        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" className={styles.avatar}/>
                        <h1 className={styles.username}>John Doe</h1>
                        <h1 className={styles.score}>900</h1>
                    </div>
                </div>
                <div className={`${styles.leaderboardItem} , ${styles.third}`}>
                <div className={styles.canvas}>
                        <Canvas />
                    </div>
                    <div className={styles.userInfo}>
                        <h1 className={styles.position}>Third</h1>
                        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" className={styles.avatar}/>
                        <h1 className={styles.username}>John Doe</h1>
                        <h1 className={styles.score}>900</h1>
                    </div>
                </div>
        </div>
    );
}