import { createSlice } from '@reduxjs/toolkit';

const initialFilterState = { categoryFilter: { name: 'Show All', sort: '' } };

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialFilterState,
  reducers: {
    setCategory(state, action) {
      state.categoryFilter = action.payload;
    },
  },
});

export const { setCategory } = filterSlice.actions;
export default filterSlice.reducer;
