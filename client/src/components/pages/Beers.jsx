import React, { useEffect, useState } from "react"
import api from "../../api"
import CardDeck from "react-bootstrap/CardDeck"
import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/Col"
import BeerCard from "../BeerCard"
import Button from "react-bootstrap/Button"

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

  function sortByName() {
    const sortedArray = state.beers.sort((a, b) => {
      if (a.name > b.name) {
        return 1
      }
      if (a.name < b.name) {
        return -1
      }
      return 0
    })
    console.log(sortedArray)
    setState({
      ...state,
      beers: sortedArray,
    })
  }

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
              <option></option>
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
              <option></option>
              <option>Malt</option>
              <option>Stout</option>
              <option>Ale</option>
              <option>Lager</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Form.Row>
      <Button variant="secondary" onClick={sortByName}>
        Click to Sort by Beer name
      </Button>
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
