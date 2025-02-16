import React, { useState } from "react";
import "./TaxiServiceForm.css"; // Importing the CSS file

function TaxiServiceForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    pickupLocation: "",
    dropoffLocation: "",
    carType: "",
  });

  const [submittedData, setSubmittedData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData([...submittedData, formData]);
    setFormData({ name: "", email: "", pickupLocation: "", dropoffLocation: "", carType: "" });
    alert("Taxi booking submitted successfully!");
  };

  return (
    <div className="form-container">
      <h2>Taxi Service Booking</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label>Pickup Location:</label>
          <input
            type="text"
            name="pickupLocation"
            value={formData.pickupLocation}
            onChange={handleChange}
            placeholder="Enter pickup location"
            required
          />
        </div>
        <div className="form-group">
          <label>Drop-off Location:</label>
          <input
            type="text"
            name="dropoffLocation"
            value={formData.dropoffLocation}
            onChange={handleChange}
            placeholder="Enter drop-off location"
            required
          />
        </div>
        <div className="form-group">
          <label>Car Type:</label>
          <select
            name="carType"
            value={formData.carType}
            onChange={handleChange}
            required
          >
            <option value="">--Select a Car Type--</option>
            <option value="sedan">Sedan</option>
            <option value="suv">SUV</option>
            <option value="luxury">Luxury</option>
          </select>
        </div>
        <button type="submit" className="submit-button">
          Book Taxi
        </button>
      </form>

      {submittedData.length > 0 && (
        <div>
          <h3>Booking Details</h3>
          <table className="data-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Pickup</th>
                <th>Drop-off</th>
                <th>Car Type</th>
              </tr>
            </thead>
            <tbody>
              {submittedData.map((data, index) => (
                <tr key={index}>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.pickupLocation}</td>
                  <td>{data.dropoffLocation}</td>
                  <td>{data.carType}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default TaxiServiceForm;
