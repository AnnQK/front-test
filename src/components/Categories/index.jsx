import { useSelector, useDispatch } from 'react-redux';
import { setCategory } from '../../redux/slices/filterSlice';
import Dropdown from './Dropdown';
import List from './List';

function Categories() {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.filter.categoryFilter);
  const categories = [
    { name: 'Show All', sort: '' },
    { name: 'Design', sort: 'design' },
    { name: 'Branding', sort: 'branding' },
    { name: 'Illustration', sort: 'illustration' },
    { name: 'Motion', sort: 'motion' },
  ];

  return (
    <>
      <Dropdown
        activeCategory={category}
        categories={categories}
        onClickCategory={(item) => dispatch(setCategory(item))}
      />
      <List
        activeCategory={category}
        categories={categories}
        onClickCategory={(item) => dispatch(setCategory(item))}
      />
    </>
  );
}

export default Categories;
