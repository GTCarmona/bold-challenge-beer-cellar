import React, { useState } from "react"
import api from "../../api"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"

export default function AddBeer(props) {
  const [state, setState] = useState({
    name: "",
    type: "",
    style: "",
    description: "",
    nationality: "",
  })
  const [message, setMessage] = useState(null)

  console.log(state)

  function handleInputChange(event) {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    })
  }

  function handleClick(e) {
    e.preventDefault()
    let data = {
      name: state.name,
      type: state.type,
      style: state.style,
      description: state.description,
      nationality: state.nationality,
    }
    api
      .addBeer(data)
      .then(result => {
        console.log("SUCCESS!", result)
        setTimeout(() => {
          setMessage(`Your beer '${state.name}' has been added to your list`)
          setMessage(null)
        }, 2000)
        setState({
          name: "",
          type: "",
          style: "",
          description: "",
          nationality: "",
        })
      })
      .catch(err => setState({ message: err.toString() }))
  }
  return (
    <div className="AddBeer">
      <h2>Add beer</h2>

      <Container>
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={state.name}
              name="name"
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              value={state.description}
              name="description"
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Row>
            <Col>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Select Style</Form.Label>
                <Form.Control
                  as="select"
                  value={state.style}
                  name="style"
                  onChange={handleInputChange}
                >
                  <option disabled>Select style</option>
                  <option>Amber</option>
                  <option>Blonde</option>
                  <option>Brown</option>
                  <option>Cream</option>
                  <option>Dark</option>
                  <option>Pale</option>
                  <option>Strong</option>
                  <option>Wheat</option>
                  <option>IPA</option>
                  <option>Red</option>
                  <option>Pilsner</option>
                  <option>Honey</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Select type</Form.Label>
                <Form.Control
                  as="select"
                  value={state.type}
                  name="type"
                  onChange={handleInputChange}
                  placeholder="type"
                >
                  <option disabled>Select style</option>
                  <option>Malt</option>
                  <option>Stout</option>
                  <option>Ale</option>
                  <option>Lager</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Form.Row>
          <Button onClick={e => handleClick(e)}>Submit</Button>
        </Form>

        {message && <div className="info">{message}</div>}
      </Container>
    </div>
  )
}
