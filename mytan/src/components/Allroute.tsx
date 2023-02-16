import { ReactQueryDevtools } from '@tanstack/react-query-devtools/build/lib/devtools';
import React from 'react';
import { useRoutes } from "react-router-dom";
import Detailspost from './Detailspost';
import PostGet from './PostGet';


const Allroute = () =>{

 let element = useRoutes([
		{
			path: "/",
			element: <PostGet />,
		},
		{
			path: "/detail/:id",
			element: <Detailspost/>,
		},
	
	]);
	return element;
}


export default Allroute