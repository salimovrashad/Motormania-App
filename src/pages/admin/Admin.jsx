import { Button, Col, Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeMotoFromDatabase } from '../../manager/actions/motoAction';

function Admin() {
    const motos = useSelector(p=>p.mr);
    const dispatch = useDispatch();

  return (
   <Container className='py-5'>
    <Link className="btn btn-danger my-4 me-2" to="/shop">Shop</Link>        
    <Link className="btn btn-danger my-4 me-2" to="/admin/add">Add Product</Link> 
    <Link className="btn btn-danger my-4" to="/blogadmin">Blog Admin</Link>
    <Link className="btn btn-danger my-4" to="/usersadmin">Users Admin</Link>

        <Col md={12}>
        <Table className='table-dark' bordered='1px' hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Photo</th>
          <th>Photo1</th>
          <th>Photo2</th>
          <th>Photo3</th>
          <th>Type</th>
          <th>Name</th>
          <th>Describtion</th>
          <th>Describtion-Az</th>
          <th>Price</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {motos.map((item,count)=>(
        <tr key={count}>
          <td>{count+1}</td>
          <td><img src={item.image} width={100} alt="" /></td>
          <td><img src={item.image1} width={100} alt="" /></td>
          <td><img src={item.image2} width={100} alt="" /></td>
          <td><img src={item.image3} width={100} alt="" /></td>
          <td>{item.type}</td>
          <td>{item.name}</td>
          <td>{item.describtion}</td>
          <td>{item.describtionaz}</td>
          <td>{item.price} $</td>
          <td><Link className='btn btn-warning' to={`/admin/edit/${item.id}`}>Edit</Link></td>
          <td><Button onClick={()=>{dispatch(removeMotoFromDatabase(item.id))}} variant='danger'>X</Button></td>
        </tr>
        ))}
        
      
      </tbody>
    </Table>
        </Col>
   </Container>
  );
}

export default Admin;