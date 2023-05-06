import React from 'react';


function BtnAction({ sign, handleBtnActionClick }) {
    // function handleClick() {
    //     alert('You clicked me!')
    // }

    return (
        <button className='btn btn-primary m-1' onClick={event => handleBtnActionClick(event, sign)}>{sign}</button>
    )
}

export default BtnAction;