import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Menu } from '../components/Menu';

const INITIAL_DATA = {
    title: "",
    description: "",
    image: "",
    category: ""
}
function NewProduct() {
    const [data, setData] = useState(INITIAL_DATA);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/categories")
            .then(res => res.json())
            .then(data => setCategories(data));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("https://fakestoreapi.com/products", {
            method: "POST",
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.id)
                    setData(INITIAL_DATA);
            });
    }

    return (
        <div className='container'>
            <Menu />
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Title" name="title" value={data.title} onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formTitle">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" placeholder="Description" name="description" value={data.description} onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formTitle">
                    <Form.Label>Image</Form.Label>
                    <Form.Control type="text" placeholder="Image" name="image" value={data.image} onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })} />
                </Form.Group>
                <Form.Select aria-label="Default select example" name="category" onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}>
                    <option hidden >Choose category</option>
                    {
                        categories.map((category, ind) => <option key={ind} >{category}</option>)
                    }
                </Form.Select>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default NewProduct;