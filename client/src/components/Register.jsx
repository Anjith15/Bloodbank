import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { FaUserAlt } from "react-icons/fa";

function Register() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    age: "",
    gender: "",
    bloodGroup: "",
    phoneNumber: "",
    weight: "",
    city: "",
    state: "",
    pinCode: "",
    lastDonationDate: "",
  })

  function handleChange(e) {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    let res = null

    res = await axios.post("http://localhost:3000/user-api/user", formData)
    // alert("User created")
    let { message, payload } = res.data
    console.log(message)
    console.log(payload)
    navigate("/login")
  }
  return (
    <div>
      <form className="form container w-50 mt-5 mb-5" onSubmit={handleSubmit}>
        <div className="py-2">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="py-2">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
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
          />
        </div>
        <div className="py-2">
          <label className="form-label">Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="py-2">
          <label className="form-label">Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="form-control"
          >
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className="py-2">
          <label className="form-label">Blood Group</label>
          <select
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleChange}
            className="form-control"
          >
            {["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"].map((bg) => (
              <option key={bg} value={bg}>
                {bg}
              </option>
            ))}
          </select>
        </div>
        <div className="py-2">
          <label className="form-label">Phone Number</label>
          <input
            type="number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="py-2">
          <label className="form-label">Weight</label>
          <input
            type="number"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="py-2">
          <label className="form-label">City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="py-2">
          <label className="form-label">State</label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="py-2">
          <label className="form-label">Pincode</label>
          <input
            type="number"
            name="pinCode"
            value={formData.pinCode}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="py-2">
          <label className="form-label">Last Donation Date</label>
          <input
            type="date"
            name="lastDonationDate"
            value={formData.lastDonationDate}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="text-center py-3">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default Register
