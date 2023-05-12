import React from 'react';

import { Container, Row, Col, Card } from 'react-bootstrap';




const GardeningTools = () => {

    const [flowers, setFlowers] = React.useState([]);



    React.useEffect(() => {

        fetch('http://localhost:3000/GardeningTools')

            .then(response => response.json())

            .then(data => setFlowers(data));

    }, []);



    return (
        <Container style={{maxWidth:'1000px'}}>

           <h1> GARDENINNG TOOLS</h1>
            <Row>

                {flowers.map((GardeningTools, index) => (

                    <Col key={index} sm={12} md={6} lg={4} xl={3}>

                        <Card className="my-3">

                            <Card.Img variant="top" img src={GardeningTools.image} />

                            <Card.Body>

                                <Card.Title>{GardeningTools.name}</Card.Title>

                                <Card.Text>{GardeningTools.description}</Card.Text>

                            </Card.Body>

                        </Card>

                    </Col>

                ))}

            </Row>

        </Container>

    );

};

export default GardeningTools

