import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	collapsed: false,
	toggled: false,
	broken: false,
}

const commonSlice = createSlice({
	name: 'common',
	initialState,
	reducers: {
		setCollapsed: (state, action) => {
			state.collapsed = action.payload
		},
		setToggled: (state, action) => {
			state.toggled = action.payload
		},
		setBroken: (state, action) => {
			state.broken = action.payload
		},
	},
})

export const { setCollapsed, setToggled, setBroken } = commonSlice.actions

export const getCollapsedState = (state) => state.common.collapsed
export const getToggledState = (state) => state.common.toggled
export const getBrokenState = (state) => state.common.broken

export default commonSlice.reducer
