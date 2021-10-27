import React, { useState,useEffect } from 'react'
import EditWork from './EditWork';
import Edit from './Edit';

export default function ShowWork() {

    const [list,setList] = useState ([])
    const [ID,setID] = useState ([])
     useEffect(() => {
    console.log("Enter useEffect()");
    loadList();
  }, []);
    const loadList = async () => {
        try {
          const resp = await fetch(`http://localhost:6060/showwork`);
          const jsonData = await resp.json();
    
          setList(jsonData);
    
          console.log("Resp", resp);
          console.log("List:", list);
        } catch (err) {
          console.error(err.message);
        }
      };

      useEffect(() => {
        console.log("Enter useEffect()");
        loadList();
      }, [ID]);

    return (
        <div className="">
      <h1>RESUME</h1>
      <table className="table table-striped table-dark">
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
          </tr>
        </thead>
        <tbody>
          {list.map((elt) => {
            return (
              <tr>
                <td>{elt.id}</td>
                <td>{elt.fullname}</td>
                <td>{elt.phone}</td>
                <td>{elt.email}</td>
                <td>{elt.work_detail}</td>
                <td>{elt.work_name}</td>
                <td>{elt.regdate}</td>
                <td>{elt.status}</td>
                <td><EditWork
                id = {elt.id}
                fullname = {elt.fullname}
                phone = {elt.phone}
                email = {elt.email}
                status = {elt.status}
                /></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
    )
}
