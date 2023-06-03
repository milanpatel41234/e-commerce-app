import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function Brand() {
  return (
    <Container
      style={{
        position:'relative',
        backgroundColor: "rgb(105, 99, 99)",
        color: "white",
        height:'11rem',
        paddingTop:'5.5rem',
        marginBottom:'.5rem'
      }}
    >
      <Row className="justify-content-md-center">
        <h1><i>The Generics</i></h1>
      </Row>
    </Container>
  );
}

export default Brand;
