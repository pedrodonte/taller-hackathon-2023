import React from "react";
import { Col, Container, Row, Card, ListGroup } from "react-bootstrap";
function DetallePersona({ registro }) {
  return (
    <Container className="p-1">
      <Container className="p-3 bg-light rounded-3" fluid="sm">
        <Row>
          <Col>
            <Card>
              <Card.Img variant="top" src={registro.avatar} />
              <Card.Body>
                <Card.Title>{registro.nombreCompleto}</Card.Title>
                <Card.Text>
                  <strong>Registro actualizado:</strong>{" "}
                  {registro.registroActualizado}
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Ciudad: {registro.ciudad}</ListGroup.Item>
                <ListGroup.Item>Telefono: {registro.telefono}</ListGroup.Item>
                <ListGroup.Item>Tramo: {registro.tramo}</ListGroup.Item>
                <ListGroup.Item>Genero: {registro.genero}</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">Operación 1</Card.Link>
                <Card.Link href="#">Operación 2</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default DetallePersona;
