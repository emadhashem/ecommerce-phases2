import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import "./search.style.css";

function Search() {
  return (
    <div className="searchWrapper">
      <InputGroup
        size="lg"
        className="mb-3 inputWrapper"
        style={{ marginTop: 15, padding: 2 }}
      >
        <InputGroup.Text className="btn" id="inputGroup-sizing-lg">بحث</InputGroup.Text>
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-lg"
          placeholder="...أكتب ما تبحث عنه"
          className="input"
        />
      </InputGroup>
    </div>
  );
}

export default Search;
