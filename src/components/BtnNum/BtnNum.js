import React from 'react';



function BtnNum({ num, handleBtnNumClickFunction }) {
    return (
        <button className='btn btn-primary btn-lg m-1' onClick={event => handleBtnNumClickFunction(event, num)}>{num}</button>
    )
}

export default BtnNum;