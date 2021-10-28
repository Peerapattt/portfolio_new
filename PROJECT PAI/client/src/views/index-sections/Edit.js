import React, { useState, useEffect } from "react";

export default function Edit(props) {
  const [fullname, setfullname] = useState(props.fullname);
  const [phone, setphone] = useState(props.phone);
  const [email, setemail] = useState(props.email);
  const [status, setstatus] = useState(props.status);
  const [id, setid] = useState(props.id);

  const onUpdateData = (e) => {
    e.preventDefault();
    try {
      const bodyIn = { id,fullname, phone, email, status };
      const res = fetch(`http://localhost:6060/updatework/${id}`, {
        method: "put",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bodyIn),
      });
      window.location = "/ShowWork";
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <div className="container mt-5">
      
      <h1>EDIT</h1>
      
      <div>
      <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Name"
            id="fullname"
            value={id}
            onChange={(e) => {
              setid(e.target.value);
            }}
          />
        </div>


        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Name"
            id="fullname"
            value={fullname}
            onChange={(e) => {
              setfullname(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Phone"
            id="phone"
            value={phone}
            onChange={(e) => {
              setphone(e.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Email"
            id="email"
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Status"
            id="status"
            value={status}
            onChange={(e) => {
              setstatus(e.target.value);
            }}
          />
        </div>
      </div>
          <div>  
      <button
        type="button"
        className="btn btn-success"
        onClick={(e) => {
          onUpdateData(e);
        }}
      >
        Save
      </button>
      <a className="btn btn-danger ml-3" href="/ShowWork" role="button">Cancel</a>
      </div>
    </div>
  );
}
