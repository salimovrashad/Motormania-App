import { Button } from 'react-bootstrap';
import React, { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useCart } from 'react-use-cart'
import CollapsibleExample from '../components/CollapsibleExample';
import { Link } from 'react-router-dom';
import { LangContext } from '../context/LangContext';

const CartPage = () => {
    const [lang] = useContext(LangContext);
    const { items, updateItemQuantity, removeItem, isEmpty,cartTotal,emptyCart } = useCart();

    return (
        <>
            <CollapsibleExample />
            {isEmpty ? <h1 className='text-center text-danger'>{lang === "en"?"No Product":"Məhsul Yoxdur"}</h1> : <Container >
                <Row>
                    <Col sm={12} md={9}>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Photo</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map((item, count) => (
                                    <tr>
                                        <th scope="row p-0">{count + 1}</th>
                                        <td><img src={item.image} width={100} alt="" /></td>
                                        <td>{item.name}</td>
                                        <td>{item.price * item.quantity}$</td>
                                        <td>
                                            <Button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</Button>
                                            <span className='mx-2'>{item.quantity}</span>
                                            <Button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</Button>
                                        </td>
                                        <td><Button variant='danger' onClick={() => removeItem(item.id)}>X</Button></td>
                                    </tr>
                                ))}


                            </tbody>
                        </table>
                    </Col>
                    <Col sm={12} md={3}>
                        <ul class="list-group">
                            <li class="list-group-item"><h3>Total Pirce</h3></li>
                            <li class="list-group-item"><h4 className='text-warning'>{cartTotal}$</h4></li>
                            <li class="list-group-item"><Button onClick={()=>{emptyCart()}} variant='danger'>Clear cart</Button>
                            <Link to='/checkout'><Button variant='success ms-3'>Checkout</Button></Link></li>
                        
                        </ul>
                    </Col>
                </Row>
            </Container>}
        </>
    )
}

export default CartPage