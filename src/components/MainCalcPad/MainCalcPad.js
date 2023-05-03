import React from 'react';

import NumPad from '../NumPad/NumPad';
import BtnAction from '../BtnAction/BtnAction';
import ScreenField from '../ScreenField/ScreenField';


function MainCalcPad() {

    return (
        <div className='container'>
            <div className='row justify-content-center'>

                <div className='row justify-content-center'>
                    <div className='col-auto my-3'>
                        <ScreenField />
                    </div>
                </div>

                <div className='row justify-content-center'>
                    <div className='col-auto my-3'>
                        <NumPad />
                    </div>
                    <div className='col-auto my-3'>
                        <BtnAction className="btn btn-outline-primary" sign='+' /><br />
                        <BtnAction sign='-' /><br />
                        <BtnAction sign='X' /><br />
                        <BtnAction sign='/' /><br />

                    </div>
                    <div className='col-auto my-3'>
                        <BtnAction sign='=' /><br />
                    </div >
                </div>
            </div>
        </div>
    )
}


export default MainCalcPad;