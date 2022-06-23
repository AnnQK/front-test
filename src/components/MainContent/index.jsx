import React from 'react';
import Categories from '../Categories';
import PhotosBlock from '../PhotosBlock';
import styles from './MainContent.module.scss';

function MainContent() {
  return (
    <div className={styles.main}>
      <Categories />
      <PhotosBlock />
    </div>
  );
}

export default MainContent;
