import React, { useState } from "react"
import api from "../../api"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

export default function Signup(props) {
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    message: null,
  })

  function handleInputChange(event) {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    })
  }

  function handleClick(e) {
    e.preventDefault()
    let data = {
      username: state.username,
      // email: state.email,
      password: state.password,
    }
    api
      .signup(data)
      .then(result => {
        console.log("SUCCESS!")
        props.history.push("/")
      })
      .catch(err => setState({ message: err.toString() }))
  }
  return (
    <div className="Signup">
      <h2>Signup</h2>
      <form>
        Username:{" "}
        <input
          type="text"
          value={state.username}
          name="username"
          onChange={handleInputChange}
        />{" "}
        <br />
        {/* email:{" "}
        <input
          type="text"
          value={state.email}
          name="name"
          onChange={handleInputChange}
        />{" "}
        <br /> */}
        Password:{" "}
        <input
          type="password"
          value={state.password}
          name="password"
          onChange={handleInputChange}
        />{" "}
        <br />
        <Button variant="secondary" onClick={e => handleClick(e)}>
          Submit
        </Button>
      </form>
      {state.message && <div className="info info-danger">{state.message}</div>}
    </div>
  )
}
