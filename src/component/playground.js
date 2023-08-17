import { PlaygroundLayout } from './playground-layout';
import { INITIAL_CELLS, MOVE_O, MOVE_X } from '../constants';
import { setCells, setMove, setWinner } from '../actions';
import store from '../store';

export const Playground = () => {
	const { cells, move, winner } = store.getState();


	const handleRestartButtonClick = () => {
		store.dispatch(setCells(INITIAL_CELLS));
		store.dispatch(setMove(MOVE_X));
		store.dispatch(setWinner(''));
	};

	const handleCellClick = (id) => {

		const nextMove = move === MOVE_X ? MOVE_O : MOVE_X;
		store.dispatch(setMove(nextMove));

		const nextSymbol = nextMove === MOVE_O ? 'X' : 'O';
		const updatedCells = cells.map((cell) =>
			cell.id === id ? { ...cell, state: nextSymbol } : cell,
		);

		store.dispatch(setCells(updatedCells));
		const winnerAction = checkWinner(updatedCells);
		if (winnerAction) {
			store.dispatch(winnerAction);
		}
	};

	const checkWinner = (updatedCells) => {
		const winningCombinations = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];

		for (const combination of winningCombinations) {
			const [a, b, c] = combination;
			if (
				updatedCells[a].state &&
				updatedCells[a].state === updatedCells[b].state &&
				updatedCells[b].state === updatedCells[c].state
			) {
				store.dispatch(setWinner(updatedCells[a].state));
				store.dispatch(setCells(INITIAL_CELLS));
				break;
			}
		}
	};
	return (
		<PlaygroundLayout
			move={move}
			cells={cells}
			handleCellClick={handleCellClick}
			handleRestartButtonClick={handleRestartButtonClick}
			winner={winner}
		/>
	);
};
