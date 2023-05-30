
import './App.css';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import CreateUser from './Components/CreateUser';
import ListUser from './Components/ListUser';
import UpdateUser from './Components/UpdateUser';

function App() {

  return (
    
    <div className="App">
    
<BrowserRouter>
  <nav>
    <ul>
      <li>
        <Link to='/' style={{ color:'white',fontSize:'larger',textDecoration:'none'}}>List Users</Link>
      </li>
      <li>
        <Link to='/create' style={{color:'white',fontSize:'larger',textDecoration:'none'}}>Create User</Link>
      </li>
      
    </ul>
  </nav>
  <Routes>
    <Route  path='/' element={<ListUser/>}/>
    <Route   path='/create' element={<CreateUser />}/>
    <Route path='/user/:id/edit' element={<UpdateUser />}/>
   
  </Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
