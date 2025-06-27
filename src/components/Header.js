import React from 'react'
import useOnline from '../utils/useOnline';
import { Link } from 'react-router-dom'
// import InstaMart from './InstaMart';
// import About from './About';
import InstaMart from './InstaMart';
// import Login from './Login'
// import Login from './Login'

function Header() {
  const [data,setData] = React.useState('Login');
  const isOnline = useOnline();
  return (
    <div className='header'>
        <img src='https://cdn2.f-cdn.com/contestentries/2426851/74260034/6689bc27dfb41_thumb900.jpg' alt='logo' className='logo'/>
        <div className='nav-items'>
            <ul>
                <Link to={'/'} className='home-link'>
                <li>Home</li>
                </Link>
                <Link to={'/about'} className='link'>
                 <li>About Us</li>
                </Link>
                {/* <a href='/about'>it cases reloading of page and hence not recommended */}
                  {/* <li>About Us</li>
                </a>  */}
                <li>Contact Us</li>
                <li>Cart</li>
                <Link to="/instamart" path={<InstaMart/>} className='link'>InstaMart</Link>
                <p>{isOnline ? '✅' : '🙁'}</p>
                <button className='login-btn' onClick={()=> data === "Login" ? setData('Logout') : setData('Login')}>{data}</button>
            </ul>
        </div>
    </div>
  )
}

export default Header
