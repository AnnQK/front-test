import React from 'react';
import styles from './Navigation.module.scss';

function Navigation() {
  const links = ['About', 'Services', 'Pricing', 'Blog'];
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {links.map((link, idx) => {
          return (
            <li key={idx}>
              <a className={styles.link} href="#">
                {link}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navigation;
