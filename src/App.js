import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import ListadoPersonas from "./ComponentesPersona/ListadoPersonas";
import DetallePersona from "./ComponentesPersona/DetallePersona";

function App() {
  const URL_API = "https://63065667c0d0f2b8011b3cf9.mockapi.io/personas";

  const [personas, setPersonas] = useState([]);

  const [personaSeleccionada, setPersonaSeleccionada] = useState(null);

  const buscarPersonas = async () => {
    const respuesta = await fetch(URL_API);
    const datos = await respuesta.json();
    setPersonas(datos);
  };

  useEffect(() => {
    buscarPersonas();
  }, []);

  return (
    <Container>
      <h1>Componentes Persona</h1>

      <Row>
        <Col>
          <ListadoPersonas
            personas={personas}
            seleccionarPersona={setPersonaSeleccionada}
          />
        </Col>
        <Col>
          {personaSeleccionada && (
            <DetallePersona registro={personaSeleccionada} />
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
