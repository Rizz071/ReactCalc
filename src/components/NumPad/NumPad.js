import React from 'react';

import BtnNum from '../BtnNum/BtnNum';



function NumPad() {

    const row_1 = ['7', '8', '9']
    const row_2 = ['4', '5', '6']
    const row_3 = ['1', '2', '3']
    const row_4 = ['0']

    const row_1_mapped = row_1.map(i => <BtnNum num={i} />)
    const row_2_mapped = row_2.map(i => <BtnNum num={i} />)
    const row_3_mapped = row_3.map(i => <BtnNum num={i} />)
    const row_4_mapped = row_4.map(i => <BtnNum num={i} />)

    return (
        <div>
            {row_1_mapped}<br />
            {row_2_mapped}<br />
            {row_3_mapped}<br />
            {row_4_mapped}
        </div>
    )
}


export default NumPad;