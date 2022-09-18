import { Link, NavLink } from 'react-router-dom'

import './header.css'
import logo from './../../resources/favicon.ico'

const Header = () => {
    return (
        <header>
            <div className='header_wrapper'>
                <nav>
                    <div className='nav_wrapper'>   
                    <Link exact='true' to='/'>
                        <img src={logo} alt="logo" className='header_logo' />
                    </Link>
                    <NavLink exact activeStyle={{'color':'#0d58da'}} to='/neural_networks' className='header_link'>Neurals</NavLink>
                    <NavLink exact activeStyle={{'color':'#0d58da'}} to='/theory' className='header_link'>Theory</NavLink>
                    <NavLink exact activeStyle={{'color':'#0d58da'}} to='/FAQ' className='header_link'>FAQ</NavLink>
                    <NavLink exact activeStyle={{'color':'#0d58da'}} to='/rules' className='header_link'>Rules</NavLink>
                    </div>
                    <div className='nav_wrapper'>
                        <Link exact='true' to='/login' className='header_link'>Sign in</Link>
                        <Link exact='true' to='/registration' className='header_link regist'>Sign up</Link>
                    </div>
                </nav>
            </div>
        </header >
    )
}

export default Header;