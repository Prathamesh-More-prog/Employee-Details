import React, { useEffect, useState } from "react";
import {Link } from "react-router-dom"
import axios from "axios"



function Home() {
    const [users,setUsers]=useState([])

    useEffect(()=>{
        
        loadUser()
     },[])
  
 async function loadUser(){
  let result=await axios.get("http://localhost:3000/user") 
  console.log(result.data)
  // let res=await result.json()
  setUsers(result.data)
   
}
useEffect(()=>{
  fetch("http://localhost:3000/user").then((result)=>{
    result.json().then((res)=>{
      console.log(res)
      
    })
  })



  },[])

  
 
 
      

 
    return(
    <div className="home">
   
 
    
  
   <table className="table border shadow">
  <caption>Employee Details</caption>
  <thead className="table-dark">
    <tr>
      <td scope="col">Id</td>
      <td scope="col">NAME</td>
      <td scope="col">EMAIL</td>
      <td scope="col">PHONE</td>
      <td scope="col">Opration</td>
      
    </tr>
  </thead>
  <tbody>

  {
    users.map((user,index)=>(
        <tr key={index}>
      <th scope="row">{user.id}</th>
        <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td>
     <Link  class="btn btn-primary mr-2" to="/users/add" >View</Link>
      
      <Link   class="btn btn-outline-primary mr-2" to="/users/add">Edit</Link>
      <Link to="/users/add" class="btn btn-danger">Delete</Link>
      </td>
    </tr>
    
    ))
        
  }
  
    
  </tbody>
</table>
     
    </div>
  );
}

export default Home;
