import React from 'react';

import { Container, Row, Col, Card } from 'react-bootstrap';

import Sidebar from "./Sidebar";


const FlowerSapling = () => {

    const [flowers, setFlowers] = React.useState([]);



    React.useEffect(() => {

        fetch('http://localhost:3000/FlowerSapling')

            .then(response => response.json())

            .then(data => setFlowers(data));

    }, []);



    return (
       
        <Container style={{maxWidth:'1000px'}}>

           <h1> FLOWER SAPLINGS</h1>
            <Row>

                {flowers.map((FlowerSapling, index) => (

                    <Col key={index} sm={12} md={6} lg={4} xl={3}>

                        <Card className="my-3">

                            <Card.Img variant="top" img src={FlowerSapling.image} />

                            <Card.Body>

                                <Card.Title>{FlowerSapling.name}</Card.Title>

                                <Card.Text>{FlowerSapling.description}</Card.Text>

                            </Card.Body>

                        </Card>

                    </Col>

                ))}

            </Row>

        </Container>

    );

};

export default FlowerSapling

