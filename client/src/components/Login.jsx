import React, { useRef } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { v4 } from 'uuid'


export default function Login({setId}) {

  const idRef = useRef()

  function fromSubmitHandler(e) {
    e.preventDefault()

    setId(idRef.current.value)
  }

  function genreteNewUid(e) {
    setId(v4())
  }

  return (
    <Container>
      <Form onSubmit={fromSubmitHandler}>
        <Form.Group>
          <Form.Label>enter your ID</Form.Label>
          <Form.Control type='text' ref={idRef}></Form.Control>
        </Form.Group>
        <Button type='submit' className='mr-2'>Login</Button>
        <Button variant='secondary' onClick={genreteNewUid}>create new ID</Button>
      </Form>
    </Container>
  )
}
