import React from 'react';
import Navigation from '../Navigation';
import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles['info-container']}>
        <div className={styles.logo}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="45.651"
            height="43.413"
            viewBox="0 0 45.651 43.413">
            <g id="logo" transform="translate(0.003 -0.004)">
              <g id="Polygon" fill="none" strokeMiterlimit="10">
                <path d="M22.823,0,45.649,16.586,36.93,43.417H8.716L0,16.586Z" stroke="none" />
                <path
                  className={styles.icon}
                  d="M 22.82308006286621 6.184104919433594 L 5.8753662109375 18.49612998962402 L 12.34860992431641 38.41680908203125 L 33.29755020141602 38.41680908203125 L 39.77079772949219 18.49612998962402 L 22.82308006286621 6.184104919433594 M 22.82308006286621 0.003971099853515625 L 45.64878845214844 16.58618927001953 L 36.93015289306641 43.41680908203125 L 8.716007232666016 43.41680908203125 L -0.002628326416015625 16.58618927001953 L 22.82308006286621 0.003971099853515625 Z"
                  stroke="none"
                  fill="#ef6d58"
                />
              </g>
              <path
                id="Polygon-2"
                data-name="Polygon"
                d="M9.033,0l9.035,6.563L14.617,17.185H3.449L0,6.567Z"
                transform="translate(13.29 14)"
                fill="#ef6d58"
              />
            </g>
          </svg>
          <div className={styles.name}>Agency</div>
        </div>
        <Navigation />
        <button className={styles.button}>CONTACT</button>
      </div>
      <div className={styles['about-container']}>
        <h1 className={styles.title}>Portfolio</h1>
        <p className={styles.description}>
          Agency provides a full service range including technical skills, design, business
          understanding.
        </p>
      </div>
    </header>
  );
}

export default Header;
