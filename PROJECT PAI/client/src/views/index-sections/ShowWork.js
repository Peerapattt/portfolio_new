import React, { useState, useEffect } from "react";
import Edit from "./Edit";
import { Form } from "react-bootstrap";
import "assets/css/ShowWork.css";
import SelectStatus from "./SelectStatus";

export default function ShowWork() {
  const [fullname, setfullname] = useState();
  const [phone, setphone] = useState();
  const [email, setemail] = useState();
  const [id, setid] = useState();
  const [list, setList] = useState([]);
  const [ID, setID] = useState([]);
  const [status, setStatus] = useState([]);

  useEffect(() => {
    console.log("Enter useEffect()");
    loadList();
  }, []);
  const loadList = async () => {
    ///รับค่า         ///ไม่มีmodal
    try {
      const resp = await fetch(`http://localhost:6060/showwork/:id`);
      const jsonData = await resp.json();

      setList(jsonData);

      console.log("Resp", resp);
      console.log("List:", list);
    } catch (err) {
      console.error(err.message);
    }
  };
  const onUpdateWork = (e) => {
    /// this is update
    e.preventDefault();
    try {
      const bodyIn = { id, fullname, phone, email, status };
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

  const deleteItem = async (id) => {
    try {
      const del = await fetch(`http://localhost:6060/delete/${id}`, {
        method: "DELETE",
      });
      setList(
        list.filter((elt) => {
          return elt.id !== id;
        })
      );
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    console.log("Enter useEffect()");
    loadList();
  }, [ID]);

  return (
    <div>
      <div className="container">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="color-sw">
          <h1>Resume</h1>
        </div>
        <hr />
      </div>

      <table className="table table-striped table-dark mt-5">
        {/* <form> */}
        <thead>
          <tr>
            <th>ID</th>
            <th>Full Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Work detail</th>
            <th>Work Name</th>
            <th>Date</th>
            <th>Status</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {list.map((elt) => {
            return (
              <tr>
              
                {/* <td>{elt.id}</td> */}
               
                <td>
                  <Form.Control
                    class="form-control mr-sm-2"
                    type="search"
                    placeholder={elt.id}
                    onChange={(e) => {
                      setid(e.target.value);
                    }}
                  />
                </td>
                {/* <td>{elt.fullname}</td> */}

                {/* <td>
                  <Form.Control
                    class="form-control mr-sm-2"
                    type="search"
                    placeholder={elt.fullname}
                    onChange={(e) => {
                      setfullname(e.target.value);
                    }}
                  />
                </td> */}
                {/* <td>{elt.phone}</td> */}

                {/* <td>
                  <Form.Control
                    class="form-control mr-sm-2"
                    type="search"
                    placeholder={elt.phone}
                    onChange={(e) => {
                      setphone(e.target.value);
                    }}
                  />
                </td> */}
                {/* <td>{elt.email}</td> */}

                {/* <td>
                  <Form.Control
                    class="form-control mr-sm-2"
                    type="search"
                    placeholder={elt.email}
                    onChange={(e) => {
                      setemail(e.target.value);
                    }}
                  />
                </td> */}
                <td>{elt.fullname}</td>
                <td>{elt.phone}</td>
                <td>{elt.email}</td>
                <td>{elt.work_detail}</td>
                <td>{elt.work_name}</td>
                <td>{elt.regdate}</td>
                {/* <td>{elt.status}</td> */}
                <td>
                  {/* <Form.Control
                    class="form-control mr-sm-2"
                    type="search"
                    placeholder={elt.status}
                    onChange={(e) => {
                      setstatus(e.target.value);
                    }}
                  /> */}
                  <div
                    className="form-group "
                    onChange={e => {
                      setStatus(e.target.value);
                    }}
                  >
                    <SelectStatus/>
                  </div>
                </td>

                <td>
                  <button
                    type="button"
                    className="btn btn-success "
                    onClick={(e) => {
                      onUpdateWork(e);
                    }}
                  >
                    Save
                  </button>
                </td>

                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteItem(elt.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
        {/* </form> */}
      </table>
    </div>
  );
}
