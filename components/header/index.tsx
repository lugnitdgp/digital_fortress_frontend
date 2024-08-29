import React, { forwardRef, Ref } from 'react';
import styles from './style.module.scss';
import Magnetic from '../magnetic';

interface HeaderProps {
  onClick?: () => void; // Add this line to accept an onClick prop
}

const Header = forwardRef<HTMLDivElement, HeaderProps>(function Header(props, ref: Ref<HTMLDivElement>) {
  const { onClick, ...rest } = props; 

  return (
    <div className={styles.header} onClick={onClick} {...rest}>
      <Magnetic>
        <div className={styles.burger}>
          <div ref={ref} className={styles.bounds}></div>
        </div>
      </Magnetic>
    </div>
  );
});

export default Header;
