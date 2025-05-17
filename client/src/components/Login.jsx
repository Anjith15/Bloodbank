import React, { useState,useContext } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { AuthContext } from "../contexts/AuthContext"
function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const navigate = useNavigate()
  const { login } = useContext(AuthContext)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(
        "http://localhost:3000/user-api/login",
        formData
      )
      const { message, token, payload } = res.data

      if (message === "login success") {
        localStorage.setItem("token", token) // save JWT token
        localStorage.setItem("user", JSON.stringify(payload)) // optional
        login()
        // alert("Login successful!")
        navigate("/") // adjust the route as needed
      } else {
        alert(message) // "Invalid email" or "Invalid password"
      }
    } catch (err) {
      console.error("Login error", err)
      alert("Something went wrong. Please try again.")
    }
  }

  return (
    <div>
      <form className="form container w-50 mt-5 mb-5" onSubmit={handleSubmit}>
        <div className="py-2">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="py-2">
          <label className="form-label">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="text-center py-3">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login
