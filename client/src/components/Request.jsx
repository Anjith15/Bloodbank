import React,{useState} from 'react'
import axios from 'axios'
import { FaUserAlt } from "react-icons/fa";
import { differenceInDays } from 'date-fns';

function Request() {
    const [bloodGroup, setBloodGroup] = useState("");
    const [matchedUsers, setMatchedUsers] = useState([]);
    async function handleSearch() {
        if (!bloodGroup) return alert("Please select a blood group");
        try {
          const res = await axios.get(`http://localhost:3000/user-api/users/${bloodGroup}`);
          if (res.data.message === "Users found") {
            setMatchedUsers(res.data.payload);
          } else {
            setMatchedUsers([]);
            alert("No users with this blood group found");
          }
        } catch (error) {
          console.error("Search error:", error);
          alert("Error fetching users");
        }
      };
      
  return (
    <div className=''>
        <div className="mb-3">
            <label className="form-label">Required Blood Group</label>
            <div className="d-flex gap-2">
                <select className="form-select" value={bloodGroup}
onChange={(e) => setBloodGroup(e.target.value)}required>
            <option value="">Select</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
        </select>
    <button type="button" className="btn btn-secondary" onClick={handleSearch}>
      Search
    </button>
  </div>
</div>
{matchedUsers.length > 0 ? (
  <div className="row">
    {matchedUsers.map((user) => (
      <div className="col-md-4 mb-3" key={user._id}>
        <div className="card shadow-sm">
          <div className="card-body d-flex align-items-center">
            {/* Icon on the left */}
            <div className="me-3">
              <FaUserAlt size={40} />
            </div>
            {/* User details on the right */}
            <div>
              <h5 className="card-title text-primary">{user.username}</h5>
              <p className="card-text">
                <strong>Email:</strong> {user.email}<br />
                <strong>Blood Group:</strong> {user.bloodGroup}<br />
                <strong>Phone:</strong> {user.phoneNumber || "N/A"}<br />
                <strong>Location:</strong> {user.city || "N/A"}<br/>
                <strong>Last Donation Date:</strong>{differenceInDays(new Date(),new Date(user.lastDonationDate))}
              </p>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
) : (
  <p>No users found.</p>
)}

    </div>
  )
}

export default Request