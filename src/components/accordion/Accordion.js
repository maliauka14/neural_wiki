import React, { useState } from 'react'
import { FaArrowDown, FaArrowUp } from 'react-icons/fa'
import './accordion.css'

const Accordion = ({ title, text }) => {
    const [active, setActive] = useState(false)

    return (
        <div className='question' onClick={() => setActive(!active)}>
            <div className="question_main">
                <h4 className='question_title'>
                    {title}
                </h4>
                <button className='btn'>
                    {active ? <FaArrowUp /> : <FaArrowDown />}
                </button>
            </div>
            {active && <p className='text'>{text}</p>}
        </div>
    )

}

export default Accordion;