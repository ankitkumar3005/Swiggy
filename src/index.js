import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Shimmer from './components/Shimmer';
import Error from './components/Error';
import Body from './components/Body';
import RestaurantMenu from './components/RestaurantMenu';

const About = lazy(()=>import('./components/About'));
const InstaMart = lazy(() =>import ('./components/InstaMart'));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error/>, 
    children: [
      {
        path: "/",
        element:<Body/>,
      },
      {
        path: "/about",
        element:<About/>,
      },
      {
        path: "/instamart",
        element: <InstaMart/>,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu/>,
      }
    ]
  },
  {
    path: "/about",
    element: <Suspense fallback={<h1>Loading...</h1>}>
      <About/>
    </Suspense>,
  },
  {
    path: "/contact",
    element: <h1>Contact Us</h1>
  },
  {
    path: "/instamart",
    element: <Suspense fallback={<Shimmer/>}>
      <InstaMart/>
    </Suspense>,
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);
