import React from 'react';
import Button from 'react-bootstrap/esm/Button';


const  BtnAction = (props) => {
    const { sign, handleBtnActionClick } = props

    return (
        <Button variant="primary" type="button" className='my-1' onClick={event => handleBtnActionClick(event, sign)}>{sign}</Button>
    )
}

export default BtnAction;