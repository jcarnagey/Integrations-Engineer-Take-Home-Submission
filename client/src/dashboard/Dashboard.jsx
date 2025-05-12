import React, { useEffect, useState } from 'react'
import { Container, Row, Table, Col, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
  const token = localStorage.getItem("token");
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/users', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        const result = await response.json();
        setUsers(result);
      } catch (error) {
        console.log(error)
      }
    }
    if (token) {
      fetchUsers();
    } else {
      navigate('/login');
    }
  }, [token, navigate]);

  const handleDelete = async (id) => {
    axios.delete('http://localhost:3000/api/users/'+id)
    .then(res => console.log(res))
    .catch(err => console.log(err))
    .finally(location.reload())
  }

  return (
    <Container>
      <Row>
        <Col>
          <h1 className='text-center'>Dashboard</h1>
          <Link to={'/create-user'} className='btn btn-success mb-2'>Add Customer</Link>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td>{user.first_name + " " + user.last_name}</td>
                  <td>{user.email}</td>
                  <td>
                    <Link to={`/update-user/${user._id}`} className='btn btn-success me-2'>Update</Link> 
                    <Button onClick={(e) => handleDelete(user._id)} className='btn btn-danger'>Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  )
}

export default Dashboard