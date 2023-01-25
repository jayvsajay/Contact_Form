import React, { useEffect, useState } from 'react'
import {  useNavigate, useParams } from 'react-router-dom';

function Edit() {
    const [fullName,setFullname] = useState('');
    const [email,setEmail] = useState('');
  const [phone, setPhone] = useState();
  const { item }  = useParams()
  const navigate = useNavigate();
  const emailId = item;
  const contacts = JSON.parse(localStorage.getItem('contacts'));
    useEffect(()=>{
    
        const contact = JSON.parse(localStorage.getItem('contacts'))
      const filterdata = contact.find(item => item.email === emailId)
      setFullname(filterdata.fullName);
      setEmail(filterdata.email);
      setPhone(filterdata.phone);
      
    },[])
   
 
    const handleCancel = () => {
        navigate('/')
    }
  const handleEditsubmit = () => {
    if (window.confirm('Are you sure you want to edit this contact?')) {
      const contactsData = contacts.filter((contact) => contact.email !== email)
      let filtercontacts = contactsData.find((contact) => contact.email === email || contact.phone === phone);
      if (filtercontacts) {
        alert("Your not able to modify because duplicate exists")
      }else{
        let pushdata = contacts.map((item) => {
          if (item.email === emailId) {
            return { fullName, email, phone };
          }
          else {
            return item;
          }
      })
      localStorage.setItem('contacts', JSON.stringify(pushdata));
    }
  }
  }
  return (
    <div className='container border mt-4 p-4 w-50'  >
      
    <form>
    <div className="form-group row">
  <label for="inputFullName" className="col-sm-3 col-form-label">FullName <span className='text-danger'>*</span></label>
  <div className="col-sm-9">
    <input type="text" className="form-control w-50" id="inputEmail" defaultValue={fullName} name="fullName" placeholder='Enter Full Name'
    required onChange={(e)=>setFullname(e.target.value)} />
  </div>
</div>
<div className="form-group row">
  <label for="inputEmail" className="col-sm-3 col-form-label">Email<span className='text-danger'>*</span></label>
  <div className="col-sm-9">
    <input type="email"className="form-control w-50" id="inputEmail" defaultValue={email} name="email" required placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)} />
  </div>
</div>
<div className="form-group row">
  <label for="inputPhone" className="col-sm-3 col-form-label">Phone <span className='text-danger'>*</span></label>
  <div className="col-sm-9">
    <input type="number" className="form-control w-50" id="inputPhone" defaultValue={phone} placeholder="Enter Phone Number" name="phone" onChange={(e)=>setPhone(e.target.value)}/>
  </div>
</div>
</form>
<div className=''>
<button type="button" className="btn btn-outline-danger m-3" onClick={handleCancel}> <i className="bi-x m-2"></i>Cancel</button>
<button type="button" className="btn btn-success m-3 " onClick={handleEditsubmit}><i className="bi-save m-2"></i>Update</button>

</div>
      </div>
  )
}

export default Edit