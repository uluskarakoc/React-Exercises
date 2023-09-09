import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Containera() {
  return (
    <Container fluid>
      {/* <Row  className='bg-success'>
      <Col className='bg-info'>1 of 3</Col>
      <Col className='bg-warning' md={9} lg={1}>2 of 3 </Col>
      <Col className='bg-danger'>3 of 3</Col>
    </Row> */}

      {/* <Row className="justify-content-md-center bg-danger">
        <Col className='bg-info' xs lg="2">
          1 of 3
        </Col>
        <Col className='bg-warning' md="auto">Variable width content</Col>
        <Col className='bg-success' xs lg="2">
          3 of 3
        </Col>
      </Row> */}

      {/* <Row >
        <Col className='bg-primary'>1 of 3</Col>
        <Col className='bg-warning' md="auto">Variable width content</Col>
        <Col className='bg-info' xs lg="2">
          3 of 3
        </Col>
      </Row> */}

      {/* <Row>
        <Col className='bg-dark text-light' sm={8}> sm=8</Col>
        <Col className='bg-info' sm={4}> sm=4</Col>
      </Row> */}
      {/* <Row>
        <Col className='bg-danger' sm>sm=true</Col>
        <Col className='bg-warning' sm>sm=true</Col>
        <Col className='bg-success'  sm>sm=true</Col>
      </Row> */}

      {/* <Row>
        <Col className='bg-dark text-light' xs={12} md={8}>
          xs=12 md=8
        </Col>
        <Col className='bg-danger' xs={6} md={4}>
          xs=6 md=4
        </Col>
      </Row> */}

      {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}

      {/* <Row>
        <Col className='bg-warning' xs={6} md={4}>
          xs=6 md=4
        </Col>
        <Col className='bg-secondary' xs={6} md={4}>
          xs=6 md=4
        </Col>
        <Col className='bg-success' xs={6} md={4}>
          xs=6 md=4
        </Col>
      </Row> */}

      {/* Columns are always 50% wide, on mobile and desktop */}

      {/* <Row>
        <Col className='bg-info' xs={6}>xs=6</Col>
        <Col className='bg-light' xs={6}>xs=6</Col>
      </Row> */}

      {/* <Row>
        <Col className="bg-info" xs>
          First, but unordered
        </Col>
        <Col className="bg-secondary" xs={{ order: 12 }}>
          Second, but last
        </Col>
        <Col className="bg-danger" xs={{ order: 1 }}>
          Third, but second
        </Col>
      </Row> */}

      {/* <Row>
        <Col className="bg-info" md={4}>md=4</Col>
        <Col className="bg-danger" md={{ span: 4, offset: 4 }}>{`md={{ span: 4, offset: 4 }}`}</Col>
      </Row>
      <Row>
        <Col className="bg-secondary" md={{ span: 3, offset: 1 }}>{`md={{ span: 3, offset: 3 }}`}</Col>
        <Col className="bg-warning" md={{ span: 3, offset: 1 }}>{`md={{ span: 3, offset: 3 }}`}</Col>
      </Row>
      <Row>
        <Col className="bg-primary" md={{ span: 6, offset: 3 }}>{`md={{ span: 6, offset: 3 }}`}</Col>
      </Row> */}

      {/* <Row>
        <Col className="bg-primary" xs={{ order: "last" }}>First, but last</Col>
        <Col className="bg-danger" xs>Second, but unordered</Col>
        <Col className="bg-success" xs={{ order: "first" }}>Third, but first</Col>
      </Row> */}
      {/* <Row  className="bg-primary" xs={2} md={4} lg={6}>
        <Col className="bg-info">1 of 2</Col>
        <Col className="bg-secondary">2 of 2</Col>
      </Row> */}
      {/* <Row className="bg-primary" xs={1} md={2}>
        <Col className="bg-info" >1 of 3</Col>
        <Col className="bg-secondary">2 of 3</Col>
        <Col className="bg-dark text-light">3 of 3</Col>
      </Row> */}
      {/* <Row  className="bg-primary"xs="auto">
        <Col className="bg-info">1 of 3</Col>
        <Col className="bg-secondary">2 of 3</Col>
        <Col className="bg-warning">3 of 3</Col>
      </Row> */}
      {/* <Row className="bg-warning" md={4}>
        <Col className="bg-danger">1 of 3</Col>
        <Col className="bg-secondary" xs={2} sm={6} md={1} >2 of 3</Col>
        <Col className="bg-dark text-light">3 of 3</Col>
      </Row> */}
      {/* <Row >
        <Col className="bg-danger" xs={2} >responsive</Col>
        <Col className="bg-warning" sm={2} >responsive</Col>
        <Col className="bg-info" md={2}>responsive</Col> 
        <Col className="bg-dark text-light" lg={2}> responsive</Col>
        <Col className="bg-success" xl={2}>responsive</Col>
        <Col className="bg-secondary" xxl={2}>responsive</Col>
      </Row> */}
    </Container>
  );
}

export default Containera;
