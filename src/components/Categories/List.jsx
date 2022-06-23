import styles from './Categories.module.scss';
function List({ categories, onClickCategory, activeCategory }) {
  return (
    <ul className={styles.list}>
      {categories.map((item, idx) => (
        <li
          onClick={() => onClickCategory(item)}
          className={item.name === activeCategory.name ? styles['item-active'] : styles.item}
          key={idx}>
          {item.name}
        </li>
      ))}
    </ul>
  );
}

export default List;
