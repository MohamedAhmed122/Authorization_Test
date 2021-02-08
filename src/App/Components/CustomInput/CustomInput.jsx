import React from 'react'

import './StyleCustomInput.css'

export default function CustomInput({ width,...otherPros}) {
    return (
        <div className='custom_input' style={{width: width}}>
            <input {...otherPros}/>
        </div>
    )
}
