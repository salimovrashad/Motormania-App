import React from 'react'
import { Container } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import MotoForm from '../MotoForm'
import { editMotoFromDatabase } from '../../../manager/actions/motoAction'

const EditMoto = () => {
    const {id} = useParams();
    const motos = useSelector(p=>p.mr);
    const selectmoto = motos.find(i=>i.id.toString() === id);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
  return (
    <Container className='pb-5'>
        <h1 className='text-center my-3'>Edit Moto</h1>
        <MotoForm editmoto={selectmoto} sendData={(i)=>{
            dispatch(editMotoFromDatabase(selectmoto.id,i))   
            navigate('/admin')

        }}/>
    </Container>
  )
}

export default EditMoto