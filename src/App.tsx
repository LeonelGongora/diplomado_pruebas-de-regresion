import { useState } from 'react'
import './App.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
//import Bateria from '../public/Bateria_Pearl.jpg';
function App() {
  const [modalCarrito, setModalCarrito] = useState(false);

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home" className="mx-auto">Grupo Yalasoft</Navbar.Brand>
        </Container>
      </Navbar>

      <Container className="mt-5">
        <Row>
          <Col>
            <Card style={{ minWidth: '18rem', margin: '20px' }}>
              <Card.Img variant="top" src= "/Bateria_Pearl.jpg" alt="image" style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title>Pearl bateria acustica – Export EXX725SP/C</Card.Title>
                <Card.Text>Acabado lacado, Capas de álamo y caoba, Configuración 10-12-14-16-22.</Card.Text>
                <Row>
                  <Col>
                    <Button variant="warning" onClick={() => setModalCarrito(true)}>Añadir al carrito</Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
, 
          <Col >
            <Card style={{ minWidth: '18rem', margin: '20px' }}>
              <Card.Img variant="top" src= "/Fundacion.jpg" alt="image" style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title>La Trilogia de la Fundación</Card.Title>
                <Card.Text>La Trilogía de la Fundación está considerada la mejor serie de la ciencia ficción universal. Fue galardonada en 1966 con un premio Hugon</Card.Text>
                <Row>
                  <Col>
                    <Button variant="warning" onClick={() => setModalCarrito(true)}>Añadir al carrito</Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ minWidth: '18rem', margin: '20px' }}>
              <Card.Img variant="top" src= "/Led_Zeppelin.jpg" alt="image" style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title>Led Zeppelin IV</Card.Title>
                <Card.Text>Es el cuarto álbum de estudio de la banda de rock inglesa Led Zeppelin, lanzado el 8 de noviembre de 1971 </Card.Text>
                <Row>
                  <Col>
                    <Button variant="warning" onClick={() => setModalCarrito(true)}>Añadir al carrito</Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

      </Container>
      

      <Modal
        show={modalCarrito}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        onHide={() => setModalCarrito(false)}
        centered
      >
        <Modal.Header closeButton className="bg-success text-white" style={{ border: 'none' }}>
          <Modal.Title id="contained-modal-title-vcenter">
            Correcto!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-success text-white" style={{ border: 'none' }}>

          <div className='container-fluid'>
            <div className='fw-bold' style={{ fontSize: '24px' }}>Su producto se agregó al carrito.</div>
          </div>
        </Modal.Body>
        <Modal.Footer className="bg-success text-white" style={{ border: 'none' }}>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default App
