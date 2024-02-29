// ./src/app/Register/page.tsx
"use client"; // Mark the component as a Client Component
import React, { useState } from 'react';
// import { saveSubmission } from '../../data/database'; // Import saveSubmission function
import { mapCountriesData } from './countries'; // Import the function to map countries data

function Register() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    gender: '',
    country: '',
  });

  const [submissionStatus, setSubmissionStatus] = useState('');

  const countries = mapCountriesData();

  const formValue = (event: any) => {
    setFormData({ ...formData, [event.target.name]: event.target.value.trim() });
  };  

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
      const res = await fetch("Register/api", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          formData
        }),
      });
      const {msg} = await res.json();
      console.log(msg);
    }

  return (
    <div className="max-w-xl mx-auto p-6 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-md shadow-md">
      <h2 className="text-3xl font-semibold text-white text-center mb-6">Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="fullName" className="block text-sm font-medium text-white">Full Name:</label>
          <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-white">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-white">Phone Number:</label>
          <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <div className="mb-4">
          <fieldset className="mb-2">
            <legend className="block text-sm font-medium text-white">Gender:</legend>
            <div className="flex items-center">
              <input type="radio" id="male" name="gender" value="male" onChange={handleChange} className="mr-2" />
              <label htmlFor="male" className="mr-4 text-white">Male</label>
              <input type="radio" id="female" name="gender" value="female" onChange={handleChange} className="mr-2" />
              <label htmlFor="female" className="mr-4 text-white">Female</label>
              <input type="radio" id="other" name="gender" value="other" onChange={handleChange} className="mr-2" />
              <label htmlFor="other" className="text-white">Other</label>
            </div>
          </fieldset>
        </div>
        <div className="mb-4">
          <label htmlFor="country" className="block text-sm font-medium text-white">Country:</label>
          <select id="country" name="country" value={formData.country} onChange={formValue} className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:border-indigo-500">
            <option value="">Select...</option>
            {countries.map((country, index) => (
              <option key={index} value={country.name}>{country.name}</option>
            ))}
          </select>
        </div>
        <button type="submit" className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Register</button>
        {submissionStatus && <p>{submissionStatus}</p>}
      </form>
    </div>
  );
}

export default Register;
