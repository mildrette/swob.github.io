import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Blog from '../pages/Blog';
import About from '../pages/About';
import '../App.css';

const LandingPage = () => {
  return (
    <Container fluid className="bg-light text-dark px-4 py-3">
      {/* ===================== Header =========================== */}
      <Row className="justify-content-center mb-4">
        <Col xl={10} lg={12} className="p-4 bg-secondary rounded-3 text-center text-light">
          <div className="py-3">
            <span>SW/OB</span>
            <h1 className="display-5 fw-bold">SMSWithoutBorders</h1>
            <p className="fs-4">
              This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.
            </p>
          </div>
        </Col>
      </Row>

      {/* ===================== About Section =========================== */}
      <Row className="justify-content-center mb-4">
        <Col xl={10} lg={12} className="p-4 bg-white rounded-3 shadow-sm">
          <About />
        </Col>
      </Row>

      {/* ===================== Blog Section =========================== */}
      <Row className="justify-content-center mb-4">
        <Col xl={10} lg={12} className="p-4 bg-white rounded-3 shadow-sm">
          <Blog />
        </Col>
      </Row>

      {/* ===================== Feature Section =========================== */}
      <h2 className="text-center mb-4">Features</h2>
      <Row className="justify-content-center mb-4">
        <Col xl={10} lg={12} className="d-flex flex-wrap bg-white p-4 rounded-3 shadow-sm">
          <Col lg={6} className="mb-4">
            <h2>About Our Project</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu, non consequat magna fermentum ac. Cras ut ultricies eros. Maecenas eros justo, ullamcorper a sapien id, viverra ultrices eros. Morbi sem neque, posuere et pretium eget, bibendum sollicitudin lacus. Aliquam eleifend sollicitudin diam, eu mattis nisl maximus at. Vestibulum a augue placerat, tincidunt risus quis, ornare risus.
            </p>
          </Col>
          <Col lg={6} className="mb-4">
            <img src="https://via.placeholder.com/500x300" alt="About Us" className="img-fluid rounded" />
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default LandingPage;
