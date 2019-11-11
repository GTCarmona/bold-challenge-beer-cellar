import React, { useEffect, useState } from "react"
import api from "../../api"

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
      {beers.map(beer => (
        <li key={beer._id}>{beer.name}</li>
      ))}
    </div>
  )
}
