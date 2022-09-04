
import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import { Menu } from "../components/Menu";

export function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then((data) => setProducts(data))
    }, []);

    return (
        <div className="container">
            <Menu />
            <div className="row">
                <Carousel>
                    {
                        products.map(product =>
                            <Carousel.Item key={product.id}>
                                <img
                                    className="d-block w-100"
                                    src={product.image}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>{product.title}</h3>
                                    <p>{product.description}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )
                    }

                </Carousel>
            </div>
        </div>
    );
}