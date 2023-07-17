import React from "react";
import axios from "axios";

function NewUser() {
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const userFormData = new FormData(e.currentTarget);
    // const userData = Object.fromEntries(userFormData);
    const userDataToSave = {
      name: userFormData.get("name"),
      password: userFormData.get("password"),
    };
    console.log(userDataToSave);
    try {
      await axios.post(
        "http://localhost:4000/api/users/newuser",
        userDataToSave
      );
    } catch (error) {
      console.log("ERROR : ", error.toString());
    }
    // e.currentTarget.reset();
  };

  return (
    <div>
      <h1>NewUser</h1>
      <form onSubmit={handleFormSubmit}>
        <input type="text" name="userName" />
        <input type="password" name="userPassword" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default NewUser;
