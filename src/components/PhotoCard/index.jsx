import React from 'react';
import Badge from '../Badge';
import styles from './PhotoCard.module.scss';

function PhotoCard(props) {
  const [isActive, setIsActive] = React.useState(false);
  const isMobile = window.innerWidth <= 1040;
  const onClickHandler = () => {
    if (!isMobile) {
      setIsActive(!isActive);
      props.selectCardHandler(props.id);
    }
    return;
  };
  return (
    <div className={`${styles.card} ${isActive && styles['card-active']}`}>
      <img
        onClick={() => {
          onClickHandler();
        }}
        className={styles.image}
        src={props.imgUrl}
        alt=""
      />
      <Badge badgeName={props.badgeName} badgeType={props.badgeType} />
      <span className={styles.title}>{props.title}</span>
    </div>
  );
}

export default PhotoCard;
