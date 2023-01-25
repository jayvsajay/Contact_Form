
import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import AddContact from './components/Add/AddContact';
import Navbar from './components/Navbar';
import { useEffect } from 'react';
import Edit from './components/Editable/Edit';

function App() {
  let dummydata = 
  [
    {
    fullName:"Suresh",
    email:"jay@gmail.com",
    phone:"84749038304"
    },
    {
    fullName:"Ramesh",
    email:"jayvsajay@gmail.com",
    phone:"9901040223"
    }
  ]
    useEffect(()=>{
     
      localStorage.setItem('contacts',JSON.stringify(dummydata))
    },[])
  
  return (
    <div >
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/newcontact' element={<AddContact/>}/>
          <Route path='/editContact/:item' element={<Edit/>}/>
        </Routes>
      </Router>
   
    </div>
  );
}

export default App;
