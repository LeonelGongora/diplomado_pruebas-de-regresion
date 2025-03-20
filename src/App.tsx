//import { useState } from 'react'
import './App.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
function App() {
  //const [count, setCount] = useState(0)

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
              <Card.Img variant="top" src="..." />
              <Card.Body>
                <Card.Title>Example Card</Card.Title>
                <Card.Text>This is an example React card</Card.Text>
                <Button variant="primary">Example Button</Button>
              </Card.Body>
            </Card>

          </Col>

          <Col>

            <Card style={{ minWidth: '18rem', margin: '20px' }}>
              <Card.Img variant="top" src="..." />
              <Card.Body>
                <Card.Title>Example Card</Card.Title>
                <Card.Text>This is an example React card</Card.Text>
                <Button variant="primary">Example Button</Button>
              </Card.Body>
            </Card>

          </Col>

          <Col>

            <Card style={{ minWidth: '18rem', margin: '20px' }}>
              <Card.Img variant="top" src="..." />
              <Card.Body>
                <Card.Title>Example Card</Card.Title>
                <Card.Text>This is an example React card</Card.Text>
                <Button variant="primary">Example Button</Button>
              </Card.Body>
            </Card>

          </Col>
        </Row>

      </Container>

    </>
  )
}

export default App
