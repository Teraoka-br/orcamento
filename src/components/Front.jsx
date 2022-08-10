import { useContext } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";

export default function Front (){
const {param,calcular} = useContext(Context)
    return (
        
        <Container>    
          <Row>
<Col className="ml-5"></Col>    

            <Form className="mt-5">
            <Col className="mt-5">
      <Form.Group className="mb-5" controlId="formBasicEmail">
        
        <Form.Control type="text" placeholder="Nome" />
        
        <Form.Control className="mt-5" type="text" placeholder="Largura" />
        
        <Form.Control className="mt-5" type="text" placeholder="Comprimento" />
        
        <Form.Control className="mt-5" type="text" placeholder="Profundidade" />
        <Form.Text className="text-muted">
        </Form.Text>
        </Form.Group>
      </Col>
      <Col className="mr-5"></Col>
      
      <Button variant="primary" type="submit">
        Calcular
      </Button>
    </Form>
    </Row>
     </Container>
  
  )
    }

