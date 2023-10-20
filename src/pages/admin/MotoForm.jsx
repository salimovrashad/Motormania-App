import { useState } from 'react';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const MotoForm = ({ sendData, editmoto }) => {
    const [image, setPhoto] = useState(editmoto ? editmoto.image : "");
    const [image1, setPhoto1] = useState(editmoto ? editmoto.image1 : "");
    const [image2, setPhoto2] = useState(editmoto ? editmoto.image2 : "");
    const [image3, setPhoto3] = useState(editmoto ? editmoto.image3 : "");
    const [type, setType] = useState(editmoto ? editmoto.type : "");
    const [name, setName] = useState(editmoto ? editmoto.name : "");
    const [describtion, setDescribtion] = useState(editmoto ? editmoto.describtion : "");
    const [describtionaz, setDescribtionaz] = useState(editmoto ? editmoto.describtionaz : "");
    const [price, setPrice] = useState(editmoto ? editmoto.price : "");
    const motoFormSubmit = e => {
        e.preventDefault();
        sendData({
            image: image,
            image1: image1,
            image2: image2,
            image3: image3,
            name: name,
            describtion: describtion,
            describtionaz: describtionaz,
            price: price,
            type: type,
        })
    }
    return (
        <div className="d-flex justify-content-center">
            <Col md={6}>
                <Form onSubmit={motoFormSubmit}>
                    <Form.Group className="mb-3" >
                        <Form.Label>Photo1</Form.Label>
                        <Form.Control value={image} onChange={e => setPhoto(e.target.value)} type="text" placeholder="Enter photo url" />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Photo2</Form.Label>
                        <Form.Control value={image1} onChange={e => setPhoto1(e.target.value)} type="text" placeholder="Enter photo url" />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Photo3</Form.Label>
                        <Form.Control value={image2} onChange={e => setPhoto2(e.target.value)} type="text" placeholder="Enter photo url" />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Photo4</Form.Label>
                        <Form.Control value={image3} onChange={e => setPhoto3(e.target.value)} type="text" placeholder="Enter photo url" />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Type</Form.Label>
                        <Form.Control value={type} onChange={e => setType(e.target.value)} type="text" placeholder="Example: Bikes, Tires, Accessories, Gloves, Jackets, Boots, Helmets" />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Name</Form.Label>
                        <Form.Control value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Enter name" />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Describtion-en</Form.Label>
                        <Form.Control value={describtion} onChange={e => setDescribtion(e.target.value)} type="text" placeholder="Enter describtion" />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Describtion-az</Form.Label>
                        <Form.Control value={describtionaz} onChange={e => setDescribtionaz(e.target.value)} type="text" placeholder="Enter describtionaz" />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Price</Form.Label>
                        <Form.Control value={price} onChange={e => setPrice(e.target.value)} type="text" placeholder="Enter price" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        {editmoto ? "Edit" : "Add"}
                    </Button>
                </Form>
            </Col>
        </div>
    )
}

export default MotoForm