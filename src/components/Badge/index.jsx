import React from 'react';
import { setCategory } from '../../redux/slices/filterSlice';
import { useDispatch } from 'react-redux';
import styles from './Badge.module.scss';

function Badge({ badgeName, badgeType }) {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => {
        dispatch(
          setCategory({
            name: badgeName,
            sort: badgeType,
          }),
        );
      }}
      className={styles.badge}>
      <span className={styles.name}>{badgeName}</span>
    </div>
  );
}

export default Badge;
