import React from 'react'
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

function Search() {
  return (
    <InputGroup size="sm" className="mb-3" style={{marginTop : 15, padding : 2}}>
        <InputGroup.Text id="inputGroup-sizing-lg">بحث</InputGroup.Text>
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-lg"
        />
    </InputGroup>
  )
}

export default Search