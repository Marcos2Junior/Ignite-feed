import styles from './Header.module.css';

import imageLogo from '../assets/ignite-logo.svg';

export function Header(){
    return (
        <header className={styles.header}>
          <img src={imageLogo} alt="logotipo do ignite" />
        </header>
    );
}