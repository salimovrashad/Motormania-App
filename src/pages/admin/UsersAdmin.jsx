import { Button, Col, Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeUserFromDatabase } from '../../manager/actions/loginAction';

function UsersAdmin() {
    const users = useSelector(p=>p.lr);
    const dispatch = useDispatch();

  return (
   <Container className='py-5'>
    <Link className="btn btn-danger my-4 me-2" to="/about">About</Link>        
    <Link className="btn btn-danger my-4 me-2" to="/usersadmin/add">Add User</Link>  
    <Link className="btn btn-danger my-4 me-2" to="/admin">Product Admin</Link>
    <Link className="btn btn-danger my-4" to="/blogadmin">Blog Admin</Link>
        <Col md={12}>
        <Table className='table-dark' bordered='1px' hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Password</th>
        </tr>
      </thead>
      <tbody>
        {users.map((item,count)=>(
            <tr key={count}>
          <td>{count+1}</td>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.password}</td>
          <td><Link className='btn btn-warning' to={`/usersadmin/edit/${item.id}`}>Edit</Link></td>
          <td><Button onClick={()=>{dispatch(removeUserFromDatabase(item.id))}} variant='danger'>X</Button></td>
        </tr>
        ))}
        
      
      </tbody>
    </Table>
        </Col>
   </Container>
  );
}

export default UsersAdmin;