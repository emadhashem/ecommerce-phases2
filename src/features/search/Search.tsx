import React, { useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
// import "./search.style.css";
import "./search.scss";
import { useNavigate } from "react-router-dom";

function Search() {
  const [text, settext] = useState("");
  const navigate = useNavigate();
  function handleSearchBtn(e : any) {
    e.preventDefault()
    if (!text.trim()) return;
    navigate("/search/" + text);
  }
  return (
    <div className="searchWrapper">
      <InputGroup
        size="lg"
        className="mb-3 inputWrapper"
        style={{ marginTop: 15, padding: 2 }}
      >
        <InputGroup.Text
          onClick={handleSearchBtn}
          className="btn"
          id="inputGroup-sizing-lg"
        >
          بحث
        </InputGroup.Text>
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-lg"
          placeholder="...أكتب ما تبحث عنه"
          className="input"
          value={text}
          onChange={(e) => settext(e.target.value)}
        />
      </InputGroup>
    </div>
  );
}

export default Search;
