
import React, { useState,useEffect } from 'react'
import SelectWorkname from './SelectWorkname'
import "assets/css/From.css";


export default function From() {
  const [list,setList] = useState ()
  
  const [work_name,setName] = useState ()
  const [work_detail,setworkdetail] = useState ()
  const [fullname,setfullname] = useState ()
  const [phone,setphone] = useState ()
  const [email,setemail] = useState ()

 


  const insertwork =(e) =>{
  e.preventDefault ();
  try {

    const bodyData = {work_name,fullname,phone,email,work_detail};
    const resp = fetch("http://localhost:6060/insertwork", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bodyData),
    });

    window.location = "/";
  } catch (err) {
    console.error(err.message);
  }
  }
  const loadList = async () => {
    try {
      const resp = await fetch(`http://localhost:6060/work`);
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
  }, [work_name]);

  console.log(work_name)

    return (
      <div className="container">
      <br></br>
       <br></br>
        <br></br>
    <div className="color-fr">             
          <h1>Form</h1>

        </div>
        <hr />

      <form onSubmit={insertwork}>
  <div className="form-group mt-5" onChange={e=>{
            setName(e.target.value)
            }}>
          <SelectWorkname/>
    </div>

    <div className="mb-3">
      <label htmlFor="work_detail" className="form-label">Work Detail</label>
      <input type="text" className="form-control" id="work_detail" name="work_detail" required  onChange={(x=>{ setworkdetail(x.target.value)})}
/>
    </div>
    <div className="mb-3">
      <label htmlFor="fullname" className="form-label">Full Name</label>
      <input type="text" className="form-control" id="username" name="fullname" required  onChange={(x=>{ setfullname(x.target.value)})}/>
    </div>
    <div className="mb-3">
      <label htmlFor="phone" className="form-label">Phone</label>
      <input type="text" className="form-control" id="phone" name="phone"  required  onChange={(x=>{ setphone(x.target.value)})}/>
      <span id="usernameavailable" />
    </div>
    <div className="mb-3">
      <label htmlFor="email" className="form-label">Email</label>
      <input type="email" className="form-control" id="email" name="email" required  onChange={(x=>{ setemail(x.target.value)})}/>
    </div>
  
    <button type="submit" name="submit" id="submit" className="btn btn-danger">Submit</button>

  </form>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
</div>


    )
}
