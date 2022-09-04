import React, { useEffect, useState } from 'react';
import { Card, CardGroup, Col, Row } from 'react-bootstrap';
import { Menu } from '../components/Menu';

export function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    return (
        <>
            <Menu />
            <div className='container'>
                <Row xs={1} md={2} className="g-4">
                    {products.map((product, idx) => (
                        <Col key={product.id}>
                            <Card>
                                <Card.Img variant="top" src={product.image} />
                                <Card.Body>
                                    <Card.Title>{product.title}</Card.Title>
                                    <Card.Text>
                                        {product.description}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </>
    );
}