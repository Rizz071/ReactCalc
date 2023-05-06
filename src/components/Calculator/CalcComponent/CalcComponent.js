import React from 'react';

import MainCalcPad from '../MainCalcPad/MainCalcPad';




function CalcComponent({ num_calc }) {
    const calcArray = []

    const buildCalcs = () => {
        console.log(num_calc)
        for (let i = 1; i <= num_calc; i++) {
            calcArray.push(<MainCalcPad />)
            console.log(i)
        }
        return calcArray
    }


    return (
        <div className='container'>
            <div className='row justify-content-center'>
                {buildCalcs()}
            </div>
        </div>
    )
}

export default CalcComponent;