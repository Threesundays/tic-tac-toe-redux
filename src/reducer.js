import { SET_CELLS, SET_MOVE, SET_WINNER } from './actions';
import { INITIAL_CELLS, MOVE_X } from './constants';

export const initialState = {
	cells: INITIAL_CELLS,
	move: MOVE_X,
	winner: '',
};

export const gameReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_CELLS:
			return { ...state, cells: action.payload };
		case SET_MOVE:
			return { ...state, move: action.payload };
		case SET_WINNER:
			return { ...state, winner: action.payload };
		default:
			return state;
	}
};
