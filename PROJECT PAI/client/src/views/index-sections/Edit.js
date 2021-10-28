import React, { useState,useEffect } from 'react'

export default function Edit(props) {
 const [fullname,setfullname] = useState (props.fullname)
  const [phone,setphone] = useState (props.phone)
  const [email,setemail] = useState(props.email)
  const [status,setstatus] = useState(props.status)
  const [ id,setid] = useState (props.id)

  const onUpdateData = (e)=>{
    e.preventDefault();
    try{
        const bodyIn = {fullname,phone,email,status}
      const res = fetch(`http://localhost:6060/updatework/${id}`,{
        method:"put",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(bodyIn)
      })
      window.location="/";
    }catch (err){
        console.error(err.message);
    }
}
    return (
        
        <div>
            <button
                  type="button"
                  className="btn btn-dark"
                  data-toggle="modal"
                  data-target={`#id${id}`}
                >
                  Edit
                </button>

                

    <div>
                        <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              id="fullname"
                            value = {fullname}
                              onChange={e=>{setfullname(e.target.value)}}
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              id="phone"
                               value = {phone}
                             onChange={e=>{setphone(e.target.value)}}
                            />
                          </div>

                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              id="email"
                               value = {email}
                               onChange={e=>{setemail(e.target.value)}}
                            />
                            </div>

                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              id="status"
                               value = {status}
                               onChange={e=>{setstatus(e.target.value)}}
                            />
                            </div>
                          
                        </div>
    
    <button type="submit" name="submit" id="submit" className="btn btn-success">Submit</button>

        </div>
    )
}
