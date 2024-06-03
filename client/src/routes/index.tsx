import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routesList } from './routes';
import React from 'react';

export const MeAppRouter = () => {
	return (
		<>
			<RouterProvider router={routesList} />
		</>
	);
};
