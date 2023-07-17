import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SecureData() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [errorMessage, setErrorMesage] = useState("");

  const getUserData = async () => {
    return await axios.get("http://localhost:4000/api/users/allusers", {
      withCredentials: true,
    });
  };

  useEffect(() => {
    getUserData()
      .then((response) => {
        console.log(response.data);
      })
      .catch(() => {
        console.log("An error occurred");
        setErrorMesage("You are unuthorized");
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      });
  }, []);

  return <div>{errorMessage}</div>;
}

export default SecureData;
