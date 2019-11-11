import React, { useEffect, useState } from "react"
import api from "../../api"
import Container from "react-bootstrap/Container"
import BeerCard from "../BeerCard"

export default function BeerDetail(props) {
  const [beer, setBeer] = useState({})

  useEffect(() => {
    api
      .getBeerDetail(props.match.params.id)
      .then(beer => {
        setBeer(beer)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="BeerDetail">
      <h1>Beer Details</h1>
      <Container>
        <h2>{beer.name}</h2> <br />
        <h4> Type:</h4>
        {beer.type}
        <h4>Style:</h4> {beer.style}
        <h4>Description</h4>
        <p>{beer.description}</p>
        <h4>Nationality</h4>
        <p>{beer.nationality}</p>
      </Container>
    </div>
  )
}
