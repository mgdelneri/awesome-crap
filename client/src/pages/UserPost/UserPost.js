import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import Auth from '../../utils/auth'
import { ADD_SALE } from "../../utils/mutations";
import "./UserPost.css";


const UserPost = (props) => {
  const [formState, setFormState] = useState({
    street: '',
    city: '',
    state: '',
    zip: '',
    startTime: '',
    endTime: '',
    startDate: '',
    endDate: '',
    description: '',
    image: ''
  })
  const [addSale] = useMutation(ADD_SALE)

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const location = `${formState.street}+${formState.city}+${formState.state}+${formState.zip}`.replaceAll(' ', '+')
    const { data } = await addSale({
      variables: {
        location: location,
        startTime: formState.startTime,
        endTime: formState.endTime,
        startDate: formState.startDate,
        endDate: formState.endDate,
        description: formState.description,
        image: formState.image
      }
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  // if (!Auth.loggedIn) {
  //   return (
  //     <h2>You need to be logged in to post!</h2>
  //   )
  // }

  return (
    <div>
      <h2>Add A Sale</h2>
      <form onSubmit={handleFormSubmit}>
        <h3>Adress</h3>
        <label htmlFor="street">Street:</label>
        <input
          placeholder="street"
          name="street"
          type="street"
          id="street"
          onChange={handleChange}
        />
        <label htmlFor="city">City:</label>
        <input
          placeholder="city"
          name="city"
          type="city"
          id="city"
          onChange={handleChange}
        />
        <label htmlFor="state">State:</label>
        <input
          placeholder=""
          name="state"
          type="state"
          id="state"
          onChange={handleChange}
        />
        <label htmlFor="Zip">Zip:</label>
        <input
          placeholder="zip"
          name="zip"
          type="zip"
          id="zip"
          onChange={handleChange}
        />
        <label htmlFor="startTime">Start Time:</label>
        <input
          placeholder="startTime"
          name="startTime"
          type="startTime"
          id="startTime"
          onChange={handleChange}
        />
        <label htmlFor="endTime">End Time:</label>
        <input
          placeholder="endTime"
          name="endTime"
          type="endTime"
          id="endTime"
          onChange={handleChange}
        />
        <label htmlFor="startDate">Start Date:</label>
        <input
          placeholder="startDate"
          name="startDate"
          type="startDate"
          id="startDate"
          onChange={handleChange}
        />
        <label htmlFor="endDate">End Date:</label>
        <input
          placeholder="endDate"
          name="endDate"
          type="endDate"
          id="endDate"
          onChange={handleChange}
        />
        <label htmlFor="description">Description:</label>
        <input
          placeholder="description"
          name="description"
          type="description"
          id="description"
          onChange={handleChange}
        />
        <label htmlFor="image">Image:</label>
        <input
          placeholder="image"
          alt={formState.description}
          name="image"
          type="image"
          id="image"
          onChange={handleChange}
        />
      </form>
     
    </div>
  );
};

export default UserPost;
