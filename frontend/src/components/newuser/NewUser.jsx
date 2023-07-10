import React from "react";

function NewUser() {
  return (
    <div>
      <h1>NewUser</h1>
      <form>
        <input type="text" name="userName" />
        <input type="password" name="userPassword" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default NewUser;
