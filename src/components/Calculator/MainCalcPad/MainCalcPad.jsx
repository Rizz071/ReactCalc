import React from 'react';
import { useState } from 'react';

import NumPad from '../NumPad/NumPad';
import BtnAction from '../BtnAction/BtnAction';
import ScreenField from '../ScreenField/ScreenField';

let Num;
let Action = ''
let oldAction = ''
let flag = 0

function MainCalcPad() {

    const [screenText, setScreenText] = useState(0)

    function handleBtnNumClick(event, numBtn) {

        if (Action !== '' && flag === 1) {
            setScreenText(String(numBtn))
            flag = 0
        }
        else if (numBtn === '±') {
            setScreenText(String(Number(screenText) * (-1)));
        }
        else {
            setScreenText(Number(String(screenText) + String(numBtn)))
        }



    }


    function handleBtnActionClick(event, sign) {

        if (sign === 'C') {
            setScreenText('0');
        }  

        if (sign !== '=') {
            Num = Number(screenText)
            Action = sign
            flag = 1;
        }

        if (sign === '=' && !Action) {
            Num = Number(screenText)
            Action = oldAction
            flag = 1;
        }

        if (sign === '=' && Action) {

            if (Action === '+') {
                setScreenText(Num + Number(screenText));
            }
            if (Action === '−') {
                setScreenText(Num - Number(screenText));
            }
            if (Action === '×') {
                setScreenText(Num * Number(screenText));
            }
            if (Action === '÷') {
                setScreenText(Num / Number(screenText));
            }

            flag = 1;
            oldAction = Action;
            Action = '';
        }
    }

    return (
        <div className='col-auto border border-primary shadow bg-body rounded m-4'>
            <div className='row justify-content-center'>
                <div className='col-auto mt-5'>
                    <ScreenField screenText={screenText} />
                </div>
            </div>

            <div className='row justify-content-center'>
                <div className='col-auto mb-3'>
                    <NumPad handleBtnNumClickFunction={handleBtnNumClick} />
                </div>
                <div className='col-auto mb-3'>
                    <BtnAction sign='&#43;' handleBtnActionClick={handleBtnActionClick} /><br />
                    <BtnAction sign='&#8722;' handleBtnActionClick={handleBtnActionClick} /><br />
                    <BtnAction sign='&#215;' handleBtnActionClick={handleBtnActionClick} /><br />
                    <BtnAction sign='&#247;' handleBtnActionClick={handleBtnActionClick} /><br />
                </div>
                <div className='col-auto mb-3'>
                    <BtnAction sign='C' handleBtnActionClick={handleBtnActionClick} /><br />
                    {/* <BtnAction sign='CE' handleBtnActionClick={handleBtnActionClick} /><br /> */}
                    <BtnAction sign='&#61;' handleBtnActionClick={handleBtnActionClick} />
                </div >
            </div>
        </div>
    )
}


export default MainCalcPad;