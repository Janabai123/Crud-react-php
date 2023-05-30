
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {  useNavigate,useParams } from 'react-router-dom';

const UpdateUser = () => {

  const{id}=useParams();
    const navigate=useNavigate();
  

    const[inputs,setInputs]=useState([]);


    const getUsers=()=>{
      
      axios.get(`http://localhost/api/user/${id}`)
      .then(res=>{
        setInputs(res.data);
        console.log(res.data);
           
      })
      .catch(err=>{
          console.log(err);
      })

    }

    useEffect(()=>{
      getUsers()
    },
    [])
    const handleChange=(e)=>{
        const{name,value}=e.target;
        setInputs(values=>({...values,[name]:value}))

    }

    const handleSubmit=(e)=>{
        e.preventDefault();

        axios.put(`http://localhost/api/user/${id}/edit`,inputs)
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
    <h1>Edit User</h1>
    <div className='create-user'>
        
        <form onSubmit={handleSubmit}>
            <table cellSpacing={10}>
                <tbody>
                    <tr>
                        <th>
                            <label>Name:</label>
                        </th>
                        <td>
                            <input type='text' value={inputs.name} name='name'  onChange={handleChange}></input>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <label>Email:</label>
                        </th>
                        <td>
                            <input type='email' value={inputs.email} name='email' onChange={handleChange}></input>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <label>Mobile:</label>
                        </th>
                        <td>
                            <input type='number' value={inputs.mobile} name='mobile' onChange={handleChange}></input>
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

export default UpdateUser;