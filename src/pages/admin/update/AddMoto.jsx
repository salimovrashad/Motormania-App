import React from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addMotoToDatabase } from '../../../manager/actions/motoAction'
import MotoForm from '../MotoForm'

const AddMoto = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <Container className='pb-5'>
      <h1 className='text-center my-3'>Add Moto</h1>
      <MotoForm sendData={(i) => {
        dispatch(addMotoToDatabase(i));
        navigate('/admin')
      }} />
    </Container>
  )
}

export default AddMoto