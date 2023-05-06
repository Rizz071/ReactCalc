import React from 'react';


function ScreenField({ screenText }) {
    return (
        <input className='form-control mb-3 fs-5 border border-primary text-end' type='text' value={screenText} readOnly />
    )
}

export default ScreenField;