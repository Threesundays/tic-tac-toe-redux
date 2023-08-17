import React, { useState, useEffect } from 'react';
import { Playground } from './component/playground';
import store from './store';

export const App = () => {
	const [, forceUpdate] = useState();

	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			forceUpdate({});
		});

		return () => unsubscribe();
	}, []);

	return (
		<React.StrictMode>
			<Playground />
		</React.StrictMode>
	);
};
