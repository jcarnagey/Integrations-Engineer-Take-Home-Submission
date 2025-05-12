import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./Login.css"
import { Button, Form } from 'react-bootstrap';

const Login = () => {

  const navigate = useNavigate();
    const[formData,setFormData] = useState({
        email:'',
        password:''
    })

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:3000/auth/login",{
                method: "POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(formData)
            })
            const result = await response.json();
            localStorage.setItem('token', result.token);
            console.log(result);
            navigate("/dashboard");
        } catch (error) {
            console.log(error.message);
        } finally {
            setFormData({
                email: "",
                password: ""
            })
        }
    }

  return (
    <div className='center-form'>
      <Form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <Form.Group>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            name='email'
            required
            placeholder='Enter Email'
            value={formData.email}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            name='password'
            required
            placeholder='Enter Password'
            value={formData.password}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant='dark' type='submit' className='w-100'>
          Login
        </Button>
      </Form>
    </div>
  )
}

export default Login