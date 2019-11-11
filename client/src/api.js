import axios from "axios"

console.log(process.env.NODE_ENV)

const service = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "/api"
      : `http://${window.location.hostname}:5000/api`,

  withCredentials: true,
})

const errHandler = err => {
  console.error(err)
  if (err.response && err.response.data) {
    console.error("API response", err.response.data)
    throw err.response.data.message
  }
  throw err
}

export default {
  service: service,

  // This method is synchronous and returns true or false
  // To know if the user is connected, we just check if we have a value for localStorage.getItem('user')
  isLoggedIn() {
    return localStorage.getItem("user") != null
  },

  getLocalStorageUser() {
    return JSON.parse(localStorage.getItem("user"))
  },

  // ----------------------- USER AUTHENTICATION METHODS -------------------
  signup(userInfo) {
    return service
      .post("/signup", userInfo)
      .then(res => {
        localStorage.setItem("user", JSON.stringify(res.data))
        return res.data
      })
      .catch(errHandler)
  },

  login(username, password) {
    return service
      .post("/login", {
        username,
        password,
      })
      .then(res => {
        localStorage.setItem("user", JSON.stringify(res.data))
        return res.data
      })
      .catch(errHandler)
  },

  logout() {
    localStorage.removeItem("user")
    return service.get("/logout")
  },
  // ----------------------- BEERS METHODS -------------------
  getBeers() {
    return service
      .get("/beers")
      .then(res => res.data)
      .catch(errHandler)
  },

  addBeer(data) {
    return service
      .post("/beers", data)
      .then(res => res.data)
      .catch(errHandler)
  },

  getBeerDetail(beerId) {
    return service
      .get(`/beers/${beerId}`)
      .then(res => res.data)
      .catch(errHandler)
  },
  getBeerByTypes(beerId) {
    return service
      .get(`/beers/${beerId}`)
      .then(res => res.data)
      .catch(errHandler)
  },

  // addPicture(file) {
  //   const formData = new FormData()
  //   formData.append('picture', file)
  //   return service
  //     .post('/endpoint/to/add/a/picture', formData, {
  //       headers: {
  //         'Content-Type': 'multipart/form-data',
  //       },
  //     })
  //     .then(res => res.data)
  //     .catch(errHandler)
  // },
}
