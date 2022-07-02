import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = (props) => {
  const [searchText, setSearchText] = useState("");

  const onSearchChange = (e) => {
    setSearchText(e.target.value);
    props.onSubmit(e.target.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    props.onSubmit(searchText);
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Spotify</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="" onClick={() => props.onClickHandler(true)}>
              Home
            </Nav.Link>
            {/* <Nav.Link href="#action2">Link</Nav.Link> */}
            <Nav.Link href="" onClick={() => props.onClickHandler(false)}>
              Add Song
            </Nav.Link>
          </Nav>
          <Form className="d-flex" onSubmit={onSubmitHandler}>
            <Form.Control
              type="search"
              placeholder="Search"
              value={searchText}
              onChange={onSearchChange}
              className="me-2"
              aria-label="Search"
            />
            <Button type="submit" variant="outline-success">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
