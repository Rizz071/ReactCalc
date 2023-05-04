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
                        <div className='col mb-3'>
                            <BtnAction sign='&#43;' /><br />
                            <BtnAction sign='&#8722;' /><br />
                            <BtnAction sign='&#215;' /><br />
                            <BtnAction sign='&#247;' /><br />

                        </div>
                        <div className='col mb-3'>
                            <BtnAction sign='&#61;' /><br />
                        </div >
                    </div>
                </div></div>
        </div>
    )
}


export default MainCalcPad;