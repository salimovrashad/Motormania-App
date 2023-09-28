import React from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import BlogForm from '../BlogForm'
import { addBlogToDatabase } from '../../../manager/actions/blogAction'

const AddBlog = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
  return (
    <Container className='pb-5'>
        <h1 className='text-center my-3'>Add Blog</h1>
        <BlogForm sendData={(i)=>{
                dispatch(addBlogToDatabase(i));
                navigate('/blogadmin')
        }}/>
    </Container>
  )
}

export default AddBlog