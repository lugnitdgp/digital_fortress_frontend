import { forwardRef, Ref } from 'react';
import styles from './style.module.scss';
import Magnetic from '../magnetic';

interface HeaderProps {
  // Define any other props that might be passed to Header
  // Example: title?: string;
}

const Header = forwardRef<HTMLDivElement, HeaderProps>(function index(props, ref: Ref<HTMLDivElement>) {
  return (
    <div className={styles.header}>
      <Magnetic>
        <div className={styles.burger}>
          <div ref={ref} className={styles.bounds}></div>
        </div>
      </Magnetic>
    </div>
  );
});

export default Header;
