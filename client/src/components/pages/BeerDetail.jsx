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
        console.log(beer)
        setBeer(beer)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="BeerDetail">
      <h1>Beer Details</h1>
      <Container>
        <BeerCard selectedBeer={{ beer }} />
      </Container>
    </div>
  )
}
