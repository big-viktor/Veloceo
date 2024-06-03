import React, { Component } from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import Home from '../pages/Home';
import ProtectedPage from '../pages/ProtectedPage';
import Layout from '../components/Layout1.jsx';

export const routesList = createBrowserRouter([
	{
		path: '/',
		element: <Outlet />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: 'protected',
				element: <ProtectedPage />,
			},
		],
	},
]);
