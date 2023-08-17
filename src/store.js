import {gameReducer, initialState} from './reducer'

const createStore = (reducer, initialState) => {
	let state = initialState;
    let listeners = [];

	return {
		dispatch: (action) => {
			state = reducer(state, action);
            listeners.forEach(listener => listener());
		},
		getState: () => state,
		subscribe: (listener) => {
            listeners.push(listener);

            // Возвращаем функцию отписки
            return () => {
                listeners = listeners.filter(l => l !== listener);
            };
        }
	};
};
const store = createStore(gameReducer, initialState);
export default store;
