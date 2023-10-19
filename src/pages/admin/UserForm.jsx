import { useState } from 'react';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const UserForm = ({sendData,edituser}) => {
    const [name,setName] = useState(edituser?edituser.name:"");
    const [email,setEmail] = useState(edituser?edituser.email:"");
    const [password,setPassword] = useState(edituser?edituser.password:"");
    const userFormSubmit =e=>{
        e.preventDefault();
        sendData({
            name:name,
            email:email,
            password:password
        })
    }
    
    return (
        <div className="d-flex justify-content-center">
            <Col md={6}>
                <Form onSubmit={userFormSubmit}>
                    <Form.Group className="mb-3" >
                        <Form.Label>Name</Form.Label>
                        <Form.Control value={name} onChange={e=>setName(e.target.value)} type="text" required placeholder="Enter name" />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Email</Form.Label>
                        <Form.Control value={email} onChange={e=>setEmail(e.target.value)} type="text" required placeholder="Enter mail" />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Password</Form.Label>
                        <Form.Control value={password} onChange={e=>setPassword(e.target.value)} type="password" required placeholder="Enter password" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                       {edituser?"Edit":"Add"}
                    </Button>
                </Form>
            </Col>
        </div>
    )
}

export default UserForm