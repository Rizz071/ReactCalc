import React from 'react';

import { Fragment } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import BtnNum from '../BtnNum/BtnNum';



function NumPad({ handleBtnNumClickFunction }) {

    const row_1 = ['7', '8', '9']
    const row_2 = ['4', '5', '6']
    const row_3 = ['1', '2', '3']
    const row_4 = ['.','0', '±']

    // const row_1_mapped = row_1.map(i => <Fragment key={i}><BtnNum num={i} handleBtnNumClickFunction={handleBtnNumClickFunction} /></Fragment>)
    // const row_2_mapped = row_2.map(i => <Fragment key={i}><BtnNum num={i} handleBtnNumClickFunction={handleBtnNumClickFunction} /></Fragment>)
    // const row_3_mapped = row_3.map(i => <Fragment key={i}><BtnNum num={i} handleBtnNumClickFunction={handleBtnNumClickFunction} /></Fragment>)
    // const row_4_mapped = row_4.map(i => <Fragment key={i}><BtnNum num={i} handleBtnNumClickFunction={handleBtnNumClickFunction} /></Fragment>)

    return (

        <Container className='m-0 p-0'>
            <Row className='m-0 p-0 justify-content-between'>
                <Col className='col-auto m-0 p-0'>
                    <div className="d-grid">
                        <BtnNum num={'7'} handleBtnNumClickFunction={handleBtnNumClickFunction} />
                        <BtnNum num={'4'} handleBtnNumClickFunction={handleBtnNumClickFunction} />
                        <BtnNum num={'1'} handleBtnNumClickFunction={handleBtnNumClickFunction} />
                        <BtnNum num={'.'} handleBtnNumClickFunction={handleBtnNumClickFunction} />
                    </div>
                </Col>
                <Col className='col-auto m-0 p-0'>
                    <div className="d-grid">
                        <BtnNum num={'8'} handleBtnNumClickFunction={handleBtnNumClickFunction} />
                        <BtnNum num={'5'} handleBtnNumClickFunction={handleBtnNumClickFunction} />
                        <BtnNum num={'2'} handleBtnNumClickFunction={handleBtnNumClickFunction} />
                        <BtnNum num={'0'} handleBtnNumClickFunction={handleBtnNumClickFunction} />
                    </div>
                </Col>
                <Col className='col-auto m-0 p-0'>
                    <div className="d-grid">
                        <BtnNum num={'9'} handleBtnNumClickFunction={handleBtnNumClickFunction} />
                        <BtnNum num={'6'} handleBtnNumClickFunction={handleBtnNumClickFunction} />
                        <BtnNum num={'3'} handleBtnNumClickFunction={handleBtnNumClickFunction} />
                        <BtnNum num={'±'} handleBtnNumClickFunction={handleBtnNumClickFunction} />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}


export default NumPad;