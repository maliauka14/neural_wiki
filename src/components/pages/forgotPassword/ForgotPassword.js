import ReCAPTCHA from "react-google-recaptcha";
import { Link } from 'react-router-dom';

import './forgotPassword.css'
import logo from './../../../resources/favicon.ico'


const ForgotPassword = () => {
    const siteKey = '6LfsmfkfAAAAAN3cPaOqz2yeT6e11FTE4txlJI1o';
    //const secretKey = '6LfsmfkfAAAAAH23-QWuK0avMEAuCBXCV6kVYfKz';

    return (
        <section className='forgot_password'>
            <Link to='/'>
                <img src={logo} alt='logo' className='forgot_password_logo' />
            </Link>
            <h1 className='forgot_password_helper'>
                Reset your password
            </h1>
            <div className='forgot_password_form'>
                <p className='forgot_password_helper_form'>
                    Enter your user account's verified email address and we will send you a password reset link.
                </p>
                <input
                    type="text"
                    name="login"
                    id="login_field"
                    className="forgot_password_input_field"
                    autoCapitalize="off"
                    autoCorrect="off"
                    autoComplete="username"
                    autoFocus="autofocus"
                />
                <p className='forgot_password_helper_form'>Verify your account</p>
                <div className="forgot_password_captcha">
                    <div className="captcha">
                        <ReCAPTCHA
                            sitekey={siteKey}
                            size="normal"
                            theme="dark"
                            badge="inline"
                            style={{ 'margin': '0 auto' }}
                        />
                    </div>
                </div>
                <button className='submit'>
                    Send password reset email.
                </button>
            </div>
        </section>
    )
}

export default ForgotPassword;