import React from 'react'
import { Form, Button } from 'react-bootstrap'
import './Signup.css'

const Signup = () => {
    return (
        <div className='center-form'>
            <Form>
                <h1>Signup</h1>
                <Form.Group>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type='email'
                        name='email'
                        placeholder='Enter Email'
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        type='text'
                        name='first_name'
                        placeholder='Enter First Name'
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        type='text'
                        name='last_name'
                        placeholder='Enter Last Name'
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type='password'
                        name='password'
                        placeholder='Enter Password'
                    />
                </Form.Group>
                <Button variant='dark' type='submit' className='w-100'>
                    Signup
                </Button>
            </Form>
        </div>
    )
}

export default Signup