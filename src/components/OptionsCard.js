import React, { useState } from 'react';
import InputNumber from 'react-input-number';
import { Button, Form, Modal } from "react-bootstrap";
export default function OptionsCard({ setOptions }) {

    const [length, setLength] = useState(0);
    const [lower, setLower] = useState("false");
    const [upper, setUpper] = useState("false");
    const [number, setNumber] = useState("false");
    const [special, setSpecial] = useState("false");

    // Modal controls
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const saveOptions = (e) => {
        e.preventDefault();
        setOptions({
            length: length,
            lower: lower,
            upper: upper,
            number: number,
            special: special
        });
        console.log(length, lower, upper, number, special)
        setShow(false);
    }

    return (
        <>
            <Button variant="info" size="lg" style={{ color: "white" }} onClick={handleShow}>
                Password Options
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Options</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <div>
                            <h6>Password Length</h6>
                            <InputNumber
                                min={5}
                                max={100}
                                step={1}
                                value={length}
                                onChange={setLength}
                            />
                        </div>
                        <div>
                            <h6>Lowercase Letters</h6>
                            <Form.Check
                                inline
                                type="radio"
                                label="Yes"
                                value="true"
                                onClick={(e) => setLower(e.target.value)}
                            />
                            <Form.Check
                                inline
                                type="radio"
                                label="No"
                                value="false"
                                onClick={(e) => setLower(e.target.value)}
                            />
                        </div>
                        <div>
                            <h6>Uppercase Letters</h6>
                            <Form.Check
                                inline
                                type="radio"
                                label="Yes"
                                value="true"
                                onClick={(e) => setUpper(e.target.value)}
                            />
                            <Form.Check
                                inline
                                type="radio"
                                label="No"
                                value="false"
                                onClick={(e) => setUpper(e.target.value)}
                            />
                        </div>
                        <div>
                            <h6>Numbers</h6>
                            <Form.Check
                                inline
                                type="radio"
                                label="Yes"
                                value="true"
                                onClick={(e) => setNumber(e.target.value)}
                            />
                            <Form.Check
                                inline
                                type="radio"
                                label="No"
                                value="false"
                                onClick={(e) => setNumber(e.target.value)}
                            />
                        </div>
                        <div>
                            <h6>Special Characters</h6>
                            <Form.Check
                                inline
                                type="radio"
                                label="Yes"
                                value="true"
                                onClick={(e) => setSpecial(e.target.value)}
                            />
                            <Form.Check
                                inline
                                type="radio"
                                label="No"
                                value="false"
                                onClick={(e) => setSpecial(e.target.value)}
                            />
                        </div>
                    </Form>
                </Modal.Body>
                <Modal.Footer style={{ justifyContent: "center" }}>
                    <Button variant="primary" onClick={(e) => saveOptions(e)}>
                        Save Options
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )

}