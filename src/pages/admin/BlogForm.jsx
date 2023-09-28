import { useState } from 'react';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const BlogForm = ({sendData,editblog}) => {
    const [image,setPhoto] = useState(editblog?editblog.image:"");
    const [name,setName] = useState(editblog?editblog.name:"");
    const [describtion,setDescribtion] = useState(editblog?editblog.describtion:"");
    const blogFormSubmit =e=>{
        e.preventDefault();
        sendData({
            image:image,
            name:name,
            describtion:describtion,
        })
    }
    return (
        <div className="d-flex justify-content-center">
            <Col md={6}>
                <Form onSubmit={blogFormSubmit}>
                    <Form.Group className="mb-3" >
                        <Form.Label>Photo</Form.Label>
                        <Form.Control value={image} onChange={e=>setPhoto(e.target.value)} type="text" placeholder="Enter photo url" />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Name</Form.Label>
                        <Form.Control value={name} onChange={e=>setName(e.target.value)} type="text" placeholder="Enter name" />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Describtion</Form.Label>
                        <Form.Control value={describtion} onChange={e=>setDescribtion(e.target.value)} type="text" placeholder="Enter name" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                       {editblog?"Edit":"Add"}
                    </Button>
                </Form>
            </Col>
        </div>
    )
}

export default BlogForm