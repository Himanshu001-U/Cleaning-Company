import React from "react";
import "./Register.css";

function Register() {
  return (
    <>
      <div className="details">
        <form>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Enter Your Name"
          />

          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            placeholder="Enter Your Phone Number"
          />
          <label htmlFor="select">Select Services</label>
          <select id="select" name="select" required>
            <option value="">Select a Service</option>
            <option value="service1">Spinal Manupulation</option>
            <option value="service2">Electrotherapy</option>
            <option value="service3">Manual Lymphatic</option>
            <option value="service4">Medical Acupuncutre</option>
            <option value="service5">Therapeutic Exercise</option>
            <option value="service6">Joint Mobilization</option>
          </select>
          <label htmlFor="cleaner">Name</label>
          <select name="cleaner" id="cleaner">
            <option value="">Select a Cleaner</option>
            <option value="cleaner1">John Doe</option>
            <option value="cleaner2">William Smith</option>
            <option value="cleaner3">Marcos deith</option>
            <option value="cleaner4">Tycon ciuye</option>
            <option value="cleaner5">Michael</option>
          </select>
          <button>Make An Appiontment</button>
        </form>
      </div>
    </>
  );
}

export default Register;
