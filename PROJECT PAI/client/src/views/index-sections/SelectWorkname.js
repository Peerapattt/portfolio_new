import React, { useState,useEffect } from "react";
import Form from "react-bootstrap/Form";

export default function SelectWorkname() {
  const [work_name, setList] = useState([]);
  const loadList = async () => {
    try {
      const resp = await fetch(`http://localhost:6060/workname`);
      const jsonData = await resp.json();

      setList(jsonData);

      console.log("Response", resp);
      console.log("List: ", work_name);
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
         <label htmlFor="work_detail" className="form-label">Work Name</label>
      <Form.Select aria-label="Default select" className="form-control">
        <option value="name detail">Select Work</option>
        {work_name.map((a) => {
          return (
            <>
              <option value={a.work_name} placeholder="Name">
                {a.work_name}
              </option>

            </>

          );
        })}
      </Form.Select>
    </div>
  );
}