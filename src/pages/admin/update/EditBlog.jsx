import React from 'react'
import { Container } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import BlogForm from '../BlogForm'
import { editBlogFromDatabase } from '../../../manager/actions/blogAction'

const EditBlog = () => {
    const {id} = useParams();
    const blogs = useSelector(p=>p.br);
    const selectblog = blogs.find(i=>i.id.toString() === id);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
  return (
    <Container className='pb-5'>
        <h1 className='text-center my-3'>Edit Blog</h1>
        <BlogForm editblog={selectblog} sendData={(i)=>{
            dispatch(editBlogFromDatabase(selectblog.id,i))   
            navigate('/blogadmin')

        }}/>
    </Container>
  )
}

export default EditBlog