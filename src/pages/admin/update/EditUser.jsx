import React from 'react'
import { Container } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import UserForm from '../UserForm'
import { editUserFromDatabase } from '../../../manager/actions/loginAction'

const EditUser = () => {
    const {id} = useParams();
    const users = useSelector(p=>p.lr);
    const selectuser = users.find(i=>i.id.toString() === id);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
  return (
    <Container className='pb-5'>
        <h1 className='text-center my-3'>Edit User</h1>
        <UserForm edituser={selectuser} sendData={(i)=>{
            dispatch(editUserFromDatabase(selectuser.id,i))   
            navigate('/usersadmin')

        }}/>
    </Container>
  )
}

export default EditUser