import React from 'react';

import { Container, Row, Col, Card } from 'react-bootstrap';




const OrganicManure = () => {

    const [flowers, setFlowers] = React.useState([]);



    React.useEffect(() => {

        fetch('http://localhost:3000/OrganicManure')

            .then(response => response.json())

            .then(data => setFlowers(data));

    }, []);



    return (
        <Container style={{maxWidth:'1000px'}}>

           <h1> ORGANIC MANURE</h1>
            <Row>

                {flowers.map((OrganicManure, index) => (

                    <Col key={index} sm={12} md={6} lg={4} xl={4}>

                        <Card className="my-3">

                            <Card.Img variant="top" img src={OrganicManure.image} />

                            <Card.Body>

                                <Card.Title>{OrganicManure.name}</Card.Title>

                                <Card.Text>{OrganicManure.description}</Card.Text>

                            </Card.Body>

                        </Card>

                    </Col>

                ))}

            </Row>

        </Container>

    );

};

export default OrganicManure

