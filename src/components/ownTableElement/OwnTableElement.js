import { Link } from 'react-router-dom';
import './ownTableElement.css';


const OwnTableElement = () => {

    const arr = ['srcnn', 'cnn', 'neural network', 'perceptrone']


    return (
        <div className='table_element'>
            <Link to="/" className='link'>
                <h3 className='own_table_title'>Some name of neurals</h3>
            </Link>
            <h4>Little bit description of some neural network Little bit description of some neural network </h4>
            <div className='tags'>
                {arr.map((element, index) => <span key={index} className='tag'>{element}</span>)}
            </div>
        </div>
    )
}


export default OwnTableElement;