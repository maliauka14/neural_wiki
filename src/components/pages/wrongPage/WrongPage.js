import { Link } from 'react-router-dom';

import './wrongPage.css'
import wrongPageLogo from './../../../resources/svg/404-error.svg'

const WrongPage = () => {
    return (
        <div className='wrong_page_wrapper'>
            <img src={wrongPageLogo} alt='wrong page logo' className='wrong_page_img' />
            <h1 className='wrong_page_title'>
                Error 404
            </h1>
            <h2 className='wrong_page_subtitle'>
                Please check the link you are referring to. If everything is correct, please report the problem to us.
            </h2>
            <h2 className='wrong_page_redirect'>
                Go to <Link to='/' className='link'> main page</Link>
            </h2>
        </div>
    )
}

export default WrongPage;