import React, { useState, useRef } from "react";
import Header from "../header";
import StickyCursor from "../stickyCursor/";
import styles from "./navbar.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXing } from '@fortawesome/free-brands-svg-icons'; // Example icon

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const stickyElement = useRef(null);

  function handleHeaderClick() {
    setIsSidebarOpen(!isSidebarOpen);
  }

  return (
    <div>
      <div className={`${styles.nav} ${isSidebarOpen ? styles.hidden : ''}`}>
        <Header ref={stickyElement} onClick={handleHeaderClick} />
        <StickyCursor stickyElement={stickyElement} />
        <div className={styles.Options}>
          <h1>HOME</h1>
          <h1>RULES</h1>
          <h1>LEADERBOARD</h1>
        </div>
      </div>
      <div className={`${styles.sidebar} ${isSidebarOpen ? styles.open : ''}`}>
        <div className={styles.sidebarContent}>
          <FontAwesomeIcon className={styles.close}icon={faXing} style={{cursor:'pointer'}} onClick={handleHeaderClick}/>
          <div className={styles.navOptions}>
            <h1>HOME</h1>
            <h1>RULES</h1>
            <h1>LEADERBOARD</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
