import React from 'react'

import './StyleCustomButton.css'

export default function CustomButton({width, title, otherProps}) {
    return (
        <button className='custom_button' {...otherProps} style={{width: width}} >{title}</button>
    )
}
