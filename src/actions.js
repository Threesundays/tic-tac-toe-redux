export const SET_CELLS = 'SET_CELLS';
export const SET_MOVE = 'SET_MOVE';
export const SET_WINNER = 'SET_WINNER';

export const setCells = (cells) => ({
	type: SET_CELLS,
	payload: cells,
});

export const setMove = (move) => ({
	type: SET_MOVE,
	payload: move,
});

export const setWinner = (winner) => ({
	type: SET_WINNER,
	payload: winner,
});
