import React, { useState } from "react";

const Hook = () => {
  let [info, setInfo] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    // setInfo(e.target.value)
    let { value, name } = e.target;
    setInfo((spread) => ({
      ...spread,
      [name]: value,
    }));
  };
  let [store, setStore] = useState("");
  let showData = () => setStore(info);

  return (
    <div>
      <input
        onChange={handleChange}
        type="text"
        placeholder="Enter your name :"
        name="userName"
      />
      <input
        onChange={handleChange}
        type="email"
        placeholder="Enter your email :"
        name="email"
      />
      <input
        onChange={handleChange}
        type="password"
        placeholder="Enter your password :"
        name="password"
      />
      <br />
      <button onClick={showData}>Click here</button>
      <br />
      <br />
      <br />

      {/* {store.userName == "" || store.email == "" ? (
        <>
          
        </>
      ) : store ? (
        <>
          <p>User Name: {store.userName}</p>
          <p>User Email: {store?.email}</p>
        </>
      ) : (
        ""
      )} */}

      {store.userName == "" ? (
        <></>
      ) : store ? (
        <>
          <p>User Name : {store.userName}</p>
        </>
      ) : (
        ""
      )}
      {store.email == "" ? (
        <></>
      ) : store ? (
        <>
          <p>User Email : {store.email}</p>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Hook;
