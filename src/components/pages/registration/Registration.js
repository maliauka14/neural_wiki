import { Link } from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha";

import logo from './../../../resources/favicon.ico'
import './registration.css';


const Registration = () => {
    const siteKey = '6LfsmfkfAAAAAN3cPaOqz2yeT6e11FTE4txlJI1o';

    return (
        <section className='registrat'>
            <Link to="/">
                <img src={logo} alt='logo' className='registration_logo' />
            </Link>
            <h1 className='registration_helper'>
                Registration to NeuralWiki
            </h1>
            <div className='registration_form'>
                <p className='registration_helper_form'>Email</p>
                <input
                    type="text"
                    name="login"
                    id="login_field"
                    className="registration_input_field"
                    autoCapitalize="off"
                    autoCorrect="off"
                    autoComplete="username"
                    autoFocus="autofocus"
                />
                <div className='registration_password_helper_form'>
                    <p className='registration_helper_form'>Password</p>
                </div>
                <input
                    type="password"
                    name="password"
                    id="password"
                    className="registration_input_field"
                    autoComplete="current-password"
                />
                <p className='registration_helper_form'>Name</p>
                <input
                    type="text"
                    name="name"
                    id="name_field"
                    className="registration_input_field"
                    autoCapitalize="off"
                    autoCorrect="off"
                />
                <ReCAPTCHA
                    sitekey={siteKey}
                    className='registration_captcha'
                    size="normal"
                    theme="dark"
                    badge="inline"
                    style={{ 'margin': '0 auto' }}
                />
                <button className='submit'>
                    Registration
                </button>
            </div>
            <div className='sign'>
                Already have an account?
                <Link exact='true' to='/login' className='link'>
                    Sign in
                </Link>
            </div>
        </section>
    )
}


export default Registration;