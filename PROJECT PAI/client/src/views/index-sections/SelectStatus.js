import React, { useState,useEffect } from "react";
import Form from "react-bootstrap/Form";

export default function SelectStatus() {
    const [Status, setStatus] = useState([]);
    const loadList = async () => {
      try {
        const resp = await fetch(`http://localhost:6060/status`);
        const jsonData = await resp.json();
  
        setStatus(jsonData);
  
        console.log("Response", resp);
        console.log("List: ", Status);
      } catch (err) {
        console.error(err.message);
      }
    };
  
    useEffect(() => {
      console.log("Enter useEffect");
      loadList();
    }, []);
  
    return (
      <div>
        <Form.Select aria-label="Default select" className="form-control">
          <option value="name detail"></option>
          {Status.map((a) => {
            return (
              <>
                <option value={a.status_name} placeholder="Name">
                  {a.status_name}
                </option>
  
              </>
  
            );
          })}
        </Form.Select>
      </div>
    );
  }