import React from 'react';
import Button from 'react-bootstrap/esm/Button';



function BtnNum({ num, handleBtnNumClickFunction }) {
    return (
        <Button variant="primary" type="button" size="" className='m-1' onClick={event => handleBtnNumClickFunction(event, num)}>{num}</Button>
    )
}

export default BtnNum;