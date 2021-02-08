import React from 'react'

import './StyleCustomButton.css'

export default function CustomButton({width, onClick, title, otherProps}) {
    return (
        <button onClick={onClick} className='custom_button' {...otherProps} style={{width: width}} >{title}</button>
    )
}
