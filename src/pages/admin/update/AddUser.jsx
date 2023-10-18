import React from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import UserForm from '../UserForm'
import { addUserToDatabase } from '../../../manager/actions/loginAction'

const AddUser = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
  return (
    <Container className='pb-5'>
        <h1 className='text-center my-3'>Add User</h1>
        <UserForm sendData={(i)=>{
                dispatch(addUserToDatabase(i));
                navigate('/usersadmin')
        }}/>
    </Container>
  )
}

export default AddUser