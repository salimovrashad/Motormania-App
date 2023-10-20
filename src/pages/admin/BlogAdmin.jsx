import { Button, Col, Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeBlogFromDatabase } from '../../manager/actions/blogAction';

function BlogAdmin() {
  const blogs = useSelector(p => p.br);
  const dispatch = useDispatch();
  return (
    <Container className='py-5'>
      <Link className="btn btn-danger my-4 me-2" to="/about">About</Link>
      <Link className="btn btn-danger my-4 me-2" to="/blogadmin/add">Add Blog</Link>
      <Link className="btn btn-danger my-4" to="/admin">Product Admin</Link>
      <Col md={12}>
        <Table className='table-dark' bordered='1px' hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Photo</th>
              <th>Name</th>
              <th>ShortDes</th>
              <th>Describtion</th>
              <th>Edit</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((item, count) => (
              <tr key={count}>
                <td>{count + 1}</td>
                <td><img src={item.image} width={100} alt="" /></td>
                <td>{item.name}</td>
                <td>{item.shortdes}</td>
                <td>{item.describtion}</td>
                <td><Link className='btn btn-warning' to={`/blogadmin/edit/${item.id}`}>Edit</Link></td>
                <td><Button onClick={() => { dispatch(removeBlogFromDatabase(item.id)) }} variant='danger'>X</Button></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Col>
    </Container>
  );
}

export default BlogAdmin;