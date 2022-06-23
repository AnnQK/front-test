import React from 'react';
import { useSelector } from 'react-redux/es/exports';
import styles from './PhotoBlock.module.scss';
import PhotoCard from '../PhotoCard';
import Skeleton from '../PhotoCard/Skeleton';

function PhotosBlock() {
  const [items, setItems] = React.useState([]);
  const [isShown, setIsShown] = React.useState(9);
  const [isLoading, setIsLoading] = React.useState(false);
  const [selectedIdx, setSelectedIdx] = React.useState([]);
  const category = useSelector((state) => state.filter.categoryFilter.sort);
  const filteredPhotos = items.filter((item) => {
    if (category.length > 0) {
      return item.badgeType === category;
    }
    return item;
  });
  const skeletons = [...new Array(isShown)].map((_, idx) => <Skeleton key={idx} />);
  const deleteHandler = (e) => {
    if (e.keyCode === 46) {
      setItems((prev) => {
        return prev.filter((item) => !selectedIdx.includes(item.id));
      });
    }
  };

  const selectCardHandler = (id) => {
    if (selectedIdx.includes(id)) {
      setSelectedIdx((prev) => {
        return prev.filter((idx) => idx !== id);
      });
    }
    setSelectedIdx((prev) => [...prev, id]);
  };
  const cards = filteredPhotos
    .slice(0, isShown)
    .map((item) => <PhotoCard selectCardHandler={selectCardHandler} key={item.id} {...item} />);

  React.useEffect(() => {
    setIsLoading(true);
    fetch('https://test-front-d6eed-default-rtdb.firebaseio.com/cards.json')
      .then((res) => res.json())
      .then((res) => {
        setItems(res);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <div
        onKeyDown={(e) => {
          deleteHandler(e);
        }}
        tabIndex={0}
        className={styles.block}>
        {isLoading ? skeletons : cards}
      </div>
      <button
        onClick={() => {
          setIsShown((prev) => prev + 9);
        }}
        className={styles.button}>
        Load more
      </button>
    </>
  );
}

export default PhotosBlock;
