import React, { useState } from "react";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <>
    <h1 className ="center">Đăng nhập</h1>
    <div className ="login-container ">
        
        <form onSubmit={handleSubmit}>
        <div>   
            {/* <label htmlFor="username">Username:</label> */}
            <input
            type="text"
            id="username"
            value={username}
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            />
        </div>
        <div>
            {/* <label htmlFor="password">Password:</label> */}
            <input
            type="password"
            id="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            />
        </div>
        <button className="btn btn-primary"type="submit">Submit</button>
        </form>
    </div>
    </>
  );
};

export default LoginPage;