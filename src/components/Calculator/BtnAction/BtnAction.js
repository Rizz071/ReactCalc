import React from 'react';
import Button from 'react-bootstrap/esm/Button';


function BtnAction({ sign, handleBtnActionClick }) {
    return (
        <Button variant="primary" type="button" size="" className='my-1' onClick={event => handleBtnActionClick(event, sign)}>{sign}</Button>
    )
}

export default BtnAction;