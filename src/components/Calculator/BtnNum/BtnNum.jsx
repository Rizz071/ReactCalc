import React from 'react';
import Button from 'react-bootstrap/esm/Button';



const BtnNum = (props) => {
    const { num, handleBtnNumClickFunction } = props

    return (
        <Button variant="primary" type="button" className='m-1' onClick={event => handleBtnNumClickFunction(event, num)}>{num}</Button>
    )
}

export default BtnNum;