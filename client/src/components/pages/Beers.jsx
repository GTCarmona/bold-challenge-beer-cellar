import React, { useEffect, useState } from "react"
import api from "../../api"
import Card from "react-bootstrap/Card"
import CardDeck from "react-bootstrap/CardDeck"
import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/Col"
import BeerCard from "../BeerCard"

export default function Beers() {
  const [state, setState] = useState({ beers: [], search: "" })

  useEffect(() => {
    api
      .getBeers()
      .then(beers => {
        setState({ ...state, beers: beers })
      })
      .catch(err => console.log(err))
  }, [])

  function handleChange(e) {
    setState({
      ...state,
      search: e.target.value,
    })
  }
  function filterBySearch(beer) {
    return beer.type.includes(state.search) || beer.style.includes(state.search)
  }
  console.log(state)
  return (
    <div className="Beers">
      <h2>List of Beers</h2>
      <Form.Row>
        <Col>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Select Style</Form.Label>
            <Form.Control
              as="select"
              value={state.search}
              name="style"
              onChange={handleChange}
            >
              <option>See All</option>
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
              value={state.search}
              name="type"
              onChange={handleChange}
              placeholder="type"
            >
              <option>See All</option>
              <option>Malt</option>
              <option>Stout</option>
              <option>Ale</option>
              <option>Lager</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Form.Row>

      <CardDeck>
        {state.beers
          .filter(beer => filterBySearch(beer))
          .map(beer => (
            <BeerCard selectedBeer={{ beer }} />
          ))}
      </CardDeck>
    </div>
  )
}
