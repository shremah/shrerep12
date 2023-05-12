import React from 'react';

import{ Container, Row, Col, Card } from 'react-bootstrap';




const Bonsai = () => {

    const [flowers, setFlowers] = React.useState([]);



    React.useEffect(() => {

        fetch('http://localhost:3000/flower')

            .then(response => response.json())

            .then(data => setFlowers(data));

    }, []);



    return (
        <Container style={{maxWidth:'1000px'}}>
            
            <h1>Bonsai Products</h1>

            <Row>

                {flowers.map((flower, index) => (

                    <Col key={index} sm={6} md={6} lg={3} xl={4}>

                        <Card className="my-3">

                            <Card.Img img src={flower.image} />

                            <Card.Body>

                                <Card.Title>{flower.name}</Card.Title>

                              

                            </Card.Body>

                        </Card>

                    </Col>

                ))}

            </Row>

        </Container>

    );

};

export default Bonsai

