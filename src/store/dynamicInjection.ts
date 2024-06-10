import React from 'react';
import { Reducer, Slice } from '@reduxjs/toolkit';
import getReducersFromSlices from './getReducer';
import { rootReducer } from './reducer';

export type SlicesType = Slice[];

const injectReducersGroupedByCommonKey = async (slices: SlicesType) => {
	const reducers = getReducersFromSlices(slices);

	if (reducers) {
		Object.keys(reducers).forEach((key) => {
			const reducer = reducers[key] as Reducer;

			if (!key || !reducer) {
				return;
			}

			rootReducer.inject(
				{
					reducerPath: key,
					reducer
				},
				{
					overrideExisting: true
				}
			);
		});
	}

	return true;
};

const injectReducer =
	<P extends object>(slices: SlicesType) =>
	(WrappedComponent: React.FC<P>) => {
		injectReducersGroupedByCommonKey(slices);

		return function WithInjectedReducer(props: P) {
			return <WrappedComponent {...props} />;
		};
	};

export default injectReducer;
