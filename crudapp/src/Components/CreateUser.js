import React, { useState } from 'react'
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';

const CreateUser = () => {

    const navigate=useNavigate();

    const[inputs,setInputs]=useState({});



    const handleChange=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setInputs(values=>({...values,[name]:value}))

    }

    const handleSubmit=(e)=>{
        e.preventDefault();

        axios.post('http://localhost/api/user/save',inputs)
        .then(res=>{
            console.log(res.data);
               navigate('/');
             
        })
        .catch(err=>{
            console.log(err);
        })
       
    }

  return (
    <>
            <h1>Create Users</h1>
    <div className='create-user'>

        <form onSubmit={handleSubmit}>
            <table cellSpacing={30}>
                <tbody>
                    <tr>
                        <th>
                            <label>Name:</label>
                        </th>
                        <td>
                            <input type='text' name='name'  onChange={handleChange}></input>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <label>Email:</label>
                        </th>
                        <td>
                            <input type='email' name='email' onChange={handleChange}></input>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <label>Mobile:</label>
                        </th>
                        <td>
                            <input type='number' name='mobile' onChange={handleChange}></input>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2} align='right'>
                        <button style={{color:'white',backgroundColor:'blue'}}>Save</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            
        </form>
    </div>
    </>
  )
}

export default CreateUser;