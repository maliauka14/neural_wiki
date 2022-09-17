import { Link } from 'react-router-dom';
import './authorization.css'
import logo from './../../../resources/favicon.ico'

const Authorization = () => {
    return (
        <section className='authorization'>
            <Link to='/'>
                <img src={logo} alt='logo' className='auth_logo' />
            </Link>
            <h1 className='auth_helper'>
                Sign in to NeuralWiki
            </h1>
            <div className='auth_form'>
                <p className='auth_helper_form'>Email</p>
                <input
                    type="text"
                    name="login"
                    id="login_field"
                    className="auth_input_field"
                    autoCapitalize="off"
                    autoCorrect="off"
                    autoComplete="username"
                    autoFocus="autofocus"
                />
                <div className='auth_password_helper_form'>
                    <p className='auth_helper_form'>Password</p>
                    <Link exact to="password_reset" className='auth_helper_form link forgot_link'>Forgot password?</Link>
                </div>
                <input
                    type="password"
                    name="password"
                    id="password"
                    className="auth_input_field"
                    autoComplete="current-password"
                />
                <button className='submit'>
                    Sign in
                </button>
            </div>
            <div className='registration'>
                New to NeuralWiki?  <Link exact to='/registration' className='
                link'>Create an account</Link>
            </div>
        </section>
    )
}

export default Authorization;