
import {useNavigate}  from "react-router-dom";
import React, {  useState } from "react";
import axios from 'axios'



    const AddUser = () => {
      const[countries,setCountries]=useState([])
        let history = useNavigate();
        const [user, setUser] = useState({
          name: "",
          username: "",
          email: "",  
          phone: "",
          website: ""
        });
        const { Upload_file,name, username, email, phone,Data, selectedCountry,selectedState } = user;
        const onInputChange = e => {
            setUser({ ...user, [e.target.name]: e.target.value });
          };
          const onSubmit = async e => {
            e.preventDefault();
            await axios.post("http://localhost:3000/users", user);
            history.push("/");
           
          };

     


         

    return(
        <div className="container">
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-center mb-4">Add A User</h2>
          <form onSubmit={e => onSubmit(e)}>
          <div className="form-grop">
            <label className="text-white"> Select Image:</label>
            <input type="file" className="form-control form-control-lg"  name="Upload_file"  value={Upload_file}  onChange={e => onInputChange(e)} />  
          </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Name"
                name="name"
                value={name}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Username"
                name="username"
                value={username}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control form-control-lg"
                placeholder="Enter Your E-mail Address"
                name="email"
                value={email}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Phone Number"
                name="phone"
                value={phone}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="Date"
                className="form-control form-control-lg"
                placeholder="Date of birth"
                name="Date"
                value={Data}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="form-group">
                    
                    <select className="form-select" placeholder="Country" value={selectedCountry} onChange={onInputChange}>
                        <option>Country</option>
                        {countries.map((e, key) => {
                            return <option key={key}>{e.name}</option>;
                        })}
                    </select>
              
               </div>
              
               <div>
               <button className="btn btn-primary btn-block">Add User</button>
               </div>
       
          </form>
        </div>
      </div>
    )
}




export default AddUser