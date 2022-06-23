import React from 'react';
import styles from './Categories.module.scss';

function Dropdown({ onClickCategory, activeCategory, categories }) {
  const [isShown, setIsShown] = React.useState(false);

  return (
    <div
      className={styles.dropdown}
      onClick={() => {
        setIsShown(!isShown);
      }}>
      <div className={styles['dropdown-label']}>
        <span>{activeCategory.name}</span>
        <svg
          className={styles['dropdown-icon']}
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="6"
          viewBox="0 0 10 6">
          <path id="Triangle" d="M5,6l5-6H0Z" />
        </svg>
      </div>
      {isShown && (
        <div className={styles['dropdown-block']}>
          <ul className={styles['dropdown-list']}>
            {categories.map((item, idx) => (
              <li
                onClick={() => {
                  setIsShown(false);
                  onClickCategory(item);
                }}
                className={
                  item.name === activeCategory.name
                    ? styles['dropdown-active']
                    : styles['dropdown-item']
                }
                key={idx}>
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
