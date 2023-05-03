import React from 'react';


function BtnAction(props) {
    // function handleClick() {
    //     alert('You clicked me!')
    // }

    return (
        <button className='btn btn-primary btn-lg m-1'>{props.sign}</button>
    )
}

export default BtnAction;