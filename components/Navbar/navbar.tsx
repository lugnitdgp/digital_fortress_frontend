import { forwardRef, useRef } from "react";
import Header from "../header";
import navbar from "./navbar.module.scss";
import StickyCursor from "../stickyCursor/";
import { DrawerDemo } from "../sidebar/sidebar";
export default function Navbar() {
  const stickyElement = useRef(null);
  return (
    <div className={navbar.nav}>
        <DrawerDemo></DrawerDemo>
      <Header ref={stickyElement} />
      <StickyCursor stickyElement={stickyElement} />
      <div className={navbar.Options}>
        <h1>HOME</h1>
        <h1>RULES</h1>
        <h1>LEADERBOARD</h1>
      </div>
    </div>
  );
}
