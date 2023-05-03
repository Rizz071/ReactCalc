import React from 'react';


function BtnNum(props) {
    // function handleClick() {
    //     alert('You clicked me!')
    // }

    return (
        <button className='btn btn-primary btn-lg m-1'>{props.num}</button>
    )
}

export default BtnNum;