import React from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";

function ListadoPersonas({ personas, seleccionarPersona }) {
  return (
    <Container className="p-3 bg-light rounded-3" fluid="sm">
      <Row>
        <Col>
          <p className="lead">Listado de Personas</p>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Ciudad</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {personas.map((persona) => (
                <tr key={persona.id}>
                  <td>{persona.nombreCompleto}</td>
                  <td>{persona.ciudad}</td>
                  <td>
                    <Button
                      size="sm"
                      variant="outline-primary"
                      className="mx-2"
                      onClick={() => seleccionarPersona(persona)}
                    >
                      Ver
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

export default ListadoPersonas;
