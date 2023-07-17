import React from "react";
import axios from "axios";

function LoginUser() {
  const handleLogin = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const credentials = {
      name: formData.get("userName"),
      password: formData.get("userPassword"),
    };

    try {
      axios.post("http://localhost:4000/api/users/userLogin", credentials, {
        withCredentials: true,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input type="text" name="userName" />
        <input type="password" name="userPassword" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default LoginUser;
