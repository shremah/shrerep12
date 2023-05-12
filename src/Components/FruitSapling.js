import React from 'react';

import { Container, Row, Col, Card } from 'react-bootstrap';




const FruitSapling = () => {

    const [flowers, setFlowers] = React.useState([]);



    React.useEffect(() => {

        fetch('http://localhost:3000/FruitSapling')

            .then(response => response.json())

            .then(data => setFlowers(data));

    }, []);



    return (
        <Container style={{maxWidth:'1000px'}}>

           <h1> FRUIT SAPLINGS</h1>
            <Row>

                {flowers.map((FruitSapling, index) => (

                    <Col key={index} sm={12} md={6} lg={4} xl={3}>

                        <Card className="my-3">

                            <Card.Img variant="top" img src={FruitSapling.image} />

                            <Card.Body>

                                <Card.Title>{FruitSapling.name}</Card.Title>

                                <Card.Text>{FruitSapling.description}</Card.Text>

                            </Card.Body>

                        </Card>

                    </Col>

                ))}

            </Row>

        </Container>

    );

};

export default FruitSapling

