import React from 'react';

import { Container, Row, Col, Card } from 'react-bootstrap';




const FruitSeeds = () => {

    const [flowers, setFlowers] = React.useState([]);



    React.useEffect(() => {

        fetch('http://localhost:3000/FruitSeeds')

            .then(response => response.json())

            .then(data => setFlowers(data));

    }, []);



    return (
        <Container style={{maxWidth:'1000px'}}>

           <h1> FRUIT SEEDS</h1>
            <Row>

                {flowers.map((FruitSeeds, index) => (

                    <Col key={index} sm={12} md={6} lg={4} xl={3}>

                        <Card className="my-3">

                            <Card.Img variant="top" img src={FruitSeeds.image} />

                            <Card.Body>

                                <Card.Title>{FruitSeeds.name}</Card.Title>

                            

                            </Card.Body>

                        </Card>

                    </Col>

                ))}

            </Row>

        </Container>

    );

};

export default FruitSeeds

