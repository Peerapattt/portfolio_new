import React, { useState,useEffect } from 'react'


export default function EditWork(props) {
  const [fullname,setfullname] = useState ([])
  const [phone,setphone] = useState ([])
  const [email,setemail] = useState([])
  const [status,setstatus] = useState([])
  const [ id,setid] = useState ([])

  const onUpdateData = (e)=>{
    e.preventDefault();
    try{
        const bodyIn = {fullname,phone,email,status}
      const res = fetch(`http://localhost:6060/updatework/${id}`,{
        method:"put",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(bodyIn)
      })
      window.location="/buy";
    }catch (err){
        console.error(err.message);
    }
}
  

    return (
        <div>
        <div>
                <button
                  type="button"
                  className="btn btn-dark"
                  data-toggle="modal"
                  data-target={`#id${id}`}
                >
                  Edit
                </button>
                {/* The Modal */}
                <div className="modal fade" id={`id${id}`}>
                  <div className="modal-dialog">
                    <div className="modal-content">
                      {/* Modal Header */}
                      <div className="modal-header">
                        <h4 className="modal-title">Edit</h4>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                        >
                          ×
                        </button>
                      </div>
                      {/* Modal body */}
                      <div className="modal-body">
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
                              type="phone"
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
                      </div>
                      {/* Modal footer */}
                      <div className="modal-footer">
                      <button
                          type="button"
                          className="btn btn-success"
                          data-dismiss="modal"
                      onClick={e=>{onUpdateData(e)}}
                        >
                          Save
                        </button>
                        <button
                          type="button"
                          className="btn btn-danger"
                          data-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
     </div>
    )
}
