// import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Search from './Search';


export default function Body() {



    return (
        <main>
            <Search />
            <Container fluid className="main-content">
                <Row className="d-flex">
                    <Col lg={3} className="left-column">
                        left column
                    </Col>
                    <Col lg={9} className="right-column">
                        right column
                    </Col>
                </Row>
            </Container>

        </main>
    )
}
