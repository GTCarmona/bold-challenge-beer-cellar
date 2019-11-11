import React from "react"
import Card from "react-bootstrap/Card"

export default function BeerCard(props) {
  const beer = props.selectedBeer.beer
  return (
    <Card key={beer._id}>
      <Card.Img variant="top" src="holder.js/100px160" />
      <Card.Body>
        <Card.Title>{beer.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          <b>Type:</b> {beer.type}
          <br />
          <b>Style:</b> {beer.style}
        </Card.Subtitle>
        <Card.Text>
          <b>Nationality:</b>
          {beer.nationality}
        </Card.Text>

        <Card.Text>{beer.description}</Card.Text>
      </Card.Body>
    </Card>
  )
}
