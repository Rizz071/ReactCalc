import React from 'react';

import NumPad from '../NumPad/NumPad';
import BtnAction from '../BtnAction/BtnAction';
import ScreenField from '../ScreenField/ScreenField';


function MainCalcPad() {

    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-auto border border-primary shadow-lg bg-body rounded my-5'>
                    <div className='row justify-content-center'>
                        <div className='col mt-5'>
                            <ScreenField />
                        </div>
                    </div>

                    <div className='row justify-content-center'>
                        <div className='col-auto mb-3'>
                            <NumPad />
                        </div>
                        <div className='col-auto mb-3'>
                            <BtnAction className="btn btn-outline-primary" sign='+' /><br />
                            <BtnAction sign='-' /><br />
                            <BtnAction sign='X' /><br />
                            <BtnAction sign='/' /><br />

                        </div>
                        <div className='col-auto mb-3'>
                            <BtnAction sign='=' /><br />
                        </div >
                    </div>
                </div></div>
        </div>
    )
}


export default MainCalcPad;