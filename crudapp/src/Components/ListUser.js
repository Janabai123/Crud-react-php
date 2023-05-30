import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

const ListUser = () => {

const[users,setUsers]=useState([]);   

    const getUsers=()=>{

    
    axios.get('http://localhost/api/user/').then(res=>{
        
    
        console.log(res.data);
        
         setUsers(res.data);
    })

     }

    useEffect(()=>{
        getUsers()
    },[]);

    const deleteUser=(id)=>{
        axios.delete(`http://localhost/api/user/${id}/delete`).then((res)=>{
            console.log(res.data);
            getUsers();
            
        })
    }

  return (
    <div>
    <h1>List of Users</h1>
   <table  border={1} cellPadding={20} cellSpacing={10} style={{ borderCollapse: 'collapse', width: '100%' }}>
    <thead>
        <tr >
            <th>
                Id
            </th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Actions</th>
        </tr>
    </thead>
     <tbody>
        {users.map((user,key)=>{
          return(
            <tr key={key}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.mobile}</td>
                <td>
                <button style={{ backgroundColor:'black'}}><Link to={`user/${user.id}/edit`} style={{marginRight:'5px',marginLeft:'10px',textDecoration:'none',color:'white'}}>Edit</Link></button>
                    <button style={{margin:'10px',backgroundColor:'red',color:'white'}} onClick={()=>deleteUser(user.id)}>Delete</button>
                </td>
            </tr>
          )

        })}
    </tbody> 
</table>   
    
    </div>
  )
}

export default ListUser



