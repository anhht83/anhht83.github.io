import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import SearchForm from '../components/SearchForm';

const DefaultLayout = () => {
  return (
    <>
      <header>
        <Navbar bg="dark" variant="dark" expand="sm" fixed="top">
          <div className="container-lg">
            <Navbar.Brand>OMDb</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="">
              <Nav className="me-auto"></Nav>
              <SearchForm />
            </Navbar.Collapse>
          </div>
        </Navbar>
      </header>
      <main className="container-xl">
        <Outlet />
      </main>
      <footer className="text-muted py-4">
        <div className="container-xl">
          <p className="mb-1">
            WebApp Challenge <a href="mailto:@anhht83@gmail.com">@anhht83@gmail.com</a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default DefaultLayout;
