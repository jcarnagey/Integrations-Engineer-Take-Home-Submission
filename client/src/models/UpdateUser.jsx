import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import User from './User'

const UpdateUser = () => {
    const { id } = useParams();

    const navigate = useNavigate();
    const[formData,setFormData] = useState({
        email:'',
        first_name:'',
        last_name:'',
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
            const response = await fetch(`http://localhost:3000/api/users/${id}`,{
                method: "PUT",
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(formData)
            })
            const result = await response.json();
            console.log(result);
            navigate("/dashboard");
        } catch (error) {
            console.log(error.message);
        } finally {
            setFormData({
                email: "",
                first_name: "",
                last_name: "",
                password: ""
            })
        }
    }

    return (
        <div className='center-form'>
            <Form onSubmit={handleSubmit}>
                <h1>Edit User</h1>
                <Form.Group>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type='email'
                        name='email'
                        placeholder='Enter Email'
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        type='text'
                        name='first_name'
                        placeholder='Enter First Name'
                        value={formData.first_name}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        type='text'
                        name='last_name'
                        placeholder='Enter Last Name'
                        value={formData.last_name}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type='password'
                        name='password'
                        placeholder='Enter Password'
                        value={formData.password}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Button variant='dark' type='submit' className='w-100'>
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default UpdateUser