import React, { useState } from "react";
import DisplayCard from "./components/DisplayCard";
import Navbar from "./components/Navbar";
import OptionsCard from "./components/OptionsCard";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, Jumbotron, Row, InputGroup, FormControl } from "react-bootstrap";
import Footer from "./components/Footer";

function App() {

  const [password, setPassword] = useState("Oops! Set your password options before generating.");
  const [showPass, setShowPass] = useState(false);
  const [copy, setCopy] = useState({
    text: "Copy",
    variant: "outline-secondary"
  })
  const [options, setOptions] = useState({
    length: 0,
    lower: true,
    upper: true,
    number: true,
    special: true
  });

  const handleCopyClick = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(password);
    setCopy({ text: "Copied", variant: "outline-success" });
  }

  const handleResetClick = (e) => {
    e.preventDefault();
    setPassword("Oops! Set your password options before generating.");
    setShowPass(false);
    setCopy({ text: "Copy", variant: "secondary" });
  }


  return (
    <div style={{ minHeight: "calc(100vh - 70px)" }}>
      <Navbar />
      <Container >
        <Jumbotron style={{ marginTop: "100px" }}>
          <Container>
            <Row>
              <Col style={{ textAlign: "center" }}>
                <h1>Password Generator</h1>
                <p>Choose your desired password options and then generate a password!</p>
              </Col>
            </Row>
            <Row >
              <Col style={{ textAlign: "right" }}>
                <OptionsCard
                  options={options}
                  setOptions={setOptions}
                />
              </Col>
              <Col style={{ textAlign: "left" }}>
                <DisplayCard
                  setPassword={setPassword}
                  setShowPass={setShowPass}
                  options={options}
                  password={password}
                />
              </Col>
            </Row>
            <Row style={{ justifyContent: "center", marginTop: "20px" }}>
              {showPass === (true) && (
                <Col sm="6" style={{ textAlign: "center" }}>
                  <InputGroup size="lg">
                    <FormControl aria-describedby="inputGroup-sizing-sm" value={password}></FormControl>
                    {password !== ("Oops! Set your password options before generating.") && (
                      <InputGroup.Append>
                        <Button variant={copy.variant} onClick={(e) => handleCopyClick(e)}>{copy.text}</Button>
                        <Button variant="outline-danger" onClick={(e) => handleResetClick(e)}>Reset</Button>
                      </InputGroup.Append>
                    )}
                  </InputGroup>
                </Col>
              )}
            </Row>
          </Container>
        </Jumbotron>
      </Container>
      <Container fixed="bottom" style={{ textAlign: "center" }}>
        <Footer />
      </Container>
    </div>
  );
}

export default App;
