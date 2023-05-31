import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function Brand() {
  return (
    <Container
      style={{
      
        backgroundColor: "rgb(105, 99, 99)",
        color: "white",
        height:'15vh',
        justifyContent:'center'
      }}
    >
      <Row className="justify-content-md-center">
        <h1>The Generics</h1>
      </Row>
    </Container>
  );
}

export default Brand;
