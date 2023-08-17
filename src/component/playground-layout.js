import styles from '../app.module.css';
import React from 'react';
import { PropTypes } from 'prop-types';

export const PlaygroundLayout = ({
	move,
	cells,
	handleCellClick,
	handleRestartButtonClick,
	winner,
}) => {
	console.log("PlaygroundLayout", cells)
	return (
		<div className={styles.app}>
			<button onClick={handleRestartButtonClick}>RESTART</button>
			{winner ? <p>Победитель: {winner}</p> : <p>{move}</p>}
			<div className={styles.playground}>
				{cells.map((cell) => (
					<div
						key={cell.id}
						className={styles.grids}
						onClick={() => handleCellClick(cell.id)}
					>
						{cell.state}
					</div>
				))}
			</div>
		</div>
	);
};

PlaygroundLayout.propTypes = {
	move: PropTypes.string,
	cells: PropTypes.arrayOf(PropTypes.object),
	handleCellClick: PropTypes.func,
	handleRestartButtonClick: PropTypes.func,
	winner: PropTypes.string,
};
