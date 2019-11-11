import React, { useEffect, useState } from "react"
import api from "../../api"
import Card from "react-bootstrap/Card"
import CardDeck from "react-bootstrap/CardDeck"

export default function Beers() {
  const [beers, setBeers] = useState([])
  useEffect(() => {
    api
      .getBeers()
      .then(beers => {
        setBeers(beers)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="Beers">
      <h2>List of Beers</h2>
      <CardDeck>
        {beers.map(beer => (
          <Card key={beer._id}>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>{beer.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Type: {beer.type}
                <br />
                Style: {beer.style}
              </Card.Subtitle>

              <Card.Text>{beer.description}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </CardDeck>
    </div>
  )
}
