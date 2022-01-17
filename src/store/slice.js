import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
	name: 'portfolio',
	initialstate: {
		value: 0
	},
	reducers: {
		test: state => {
			state.value = 'test'
		}
	}
});

export const { test } = slice.actions;

export default slice.reducer;
