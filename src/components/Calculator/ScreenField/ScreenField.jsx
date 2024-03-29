import React from 'react';


const ScreenField = (props) => {
    const { screenText } = props
    return (
        <input className='form-control fs-5 border border-primary text-end' type='text' value={screenText} readOnly />
    )
}

export default ScreenField;