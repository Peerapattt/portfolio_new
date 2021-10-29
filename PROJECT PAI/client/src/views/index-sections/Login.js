// import React, { useState } from "react";
// import "assets/css/Login.css";

// export default function login() {
//   const [Email,setEmail] = useState([])
//   const [password,setpassword]= useState([])

//   const selectlogin = async(e)=>{
//     e.preventDefault();
// try {

//   const bodyData = { Email,password};

//   const resp = await fetch("http://localhost:6060/iflogin", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(bodyData),

//   });
//   console.log(resp)
//   // if(resp.data.err){
//     window.location = "/Home";
//   // }


// } catch (err) {
//   window.location = "/Login";
//   console.error(err.message);
// }
// }
  
//     return (
//         <div>
//             <div className="login">
//   <div className="login-triangle" />
//   <h2 className="login-header">Log in</h2>
//   <form className="login-container">
//     <p><input type="email" placeholder="Email" /></p>
//     <p><input type="password" placeholder="Password" /></p>
//     <p><input type="submit" defaultValue="Log in" /></p>
//   </form>
// </div>
//         </div>
//     )
// }
