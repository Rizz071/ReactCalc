import React from 'react';

import { Fragment } from 'react';

import MainCalcPad from '../MainCalcPad/MainCalcPad';




const CalcComponent = (props) => {
    const { num_calc } = props

    const calcArray = []

    const buildCalcs = () => {
        for (let i = 1; i <= num_calc; i++) {
            calcArray.push( <Fragment key={i*i}><MainCalcPad /> </Fragment>)
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