import './App.css';
// import { Link } from 'react-router-dom';
import React from 'react';
import Body from './components/Body';
import Header from './components/Header';
import About from './components/About';
import { Outlet } from 'react-router-dom';
// import About from './components/About';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { createBrowserRouter,RouterProvider } from 'react-router-dom';

//chunking
//lazy loading
//Code Splitting
//Dynamic Importing
//code splitting
//On demand loading

// const InstaMart = lazy(() => import('./components/InstaMart'));
// const About = lazy(()=>import('./components/About'));

const App = () => {
  
  return (
    <div className="App">
      <Header />
      <Outlet />
      {/* <About />
      <Body/> */}
    </div>
  );
}

// const AppRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "/about",
//     element: <About/>,
//   },
// ]);


// export const appRouter = () => {
//   return (
//     // <React.Suspense fallback={<h1>Loading...</h1
//   <nav>
//     <Link to="/" path={<Body/>}>Home</Link>
//     <Link to="/about">About</Link>
//     <Link to="/contact">Contact</Link>
//     <Link to="/instamart" path={<InstaMart/>}>InstaMart</Link>
//   </nav>
//   )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
export default App;
