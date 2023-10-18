import React from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addUserToDatabase } from '../manager/actions/loginAction'
import UserForm from './admin/UserForm'
import AdminNav from '../components/AdminNav'

const SignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
  return (
    <>
    <AdminNav />
    <Container className='pb-5'>
        <h1 className='text-center my-3'>Sign Up</h1>
        <UserForm sendData={(i)=>{
                dispatch(addUserToDatabase(i));
                navigate('/login')
        }}/>
    </Container>
    </>
  )
}

export default SignUp