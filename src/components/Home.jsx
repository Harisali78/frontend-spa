import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Form, InputGroup } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
const Home = () => {
  const [sidebar, setSidebar] = useState(false);
  return (
    <div>
      <section id="hero-section" className="px-3">
        <div className="logo text-center my-3">
          <img src="./logo.png" alt="logo" />
        </div>
        <div className="nav-links d-flex justify-content-between align-items-center">
          <FaBars
            className="text-white fs-2"
            onClick={() => setSidebar(!sidebar)}
          />
          <DropdownButton
            id="dropdown-basic-button"
            variant="dark"
            title="All Categories"
          >
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>
          <InputGroup className="w-50">
            <Form.Control
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Text id="basic-addon2">
              <BsSearch />
            </InputGroup.Text>
          </InputGroup>
          <DropdownButton
            id="dropdown-basic-button"
            variant="light"
            title="All Categories"
          >
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>
          <div className="text-white ">
            <AiOutlineShoppingCart className="fs-2" />
            Cart
          </div>
        </div>
        <div id="sidebar" className={`${sidebar?"d-block":"d-none"}`}>
          <h1>Sidebar</h1>
        </div>
      </section>
    </div>
  );
};

export default Home;
