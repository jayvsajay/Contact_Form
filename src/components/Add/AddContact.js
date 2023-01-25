import React, { useState } from 'react'

function AddContact() {

    const [fullName,setFullname] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState(0);

    const handlesubmit = () => {
      let data = { fullName: fullName, email: email, phone: phone };
      const contacts = JSON.parse(localStorage.getItem('contacts'));
      let filtercontacts = contacts.find((contact) => contact.email=== email || contact.phone === phone) ;
      if (fullName === '' || email === '' || phone === '') {
        alert("Please fill all the fields")
      } else if (filtercontacts) {
        alert("Details exists")
      } else{
          contacts.push(data);
          localStorage.setItem('contacts',JSON.stringify(contacts));
     
        }
    }

    const handleCancel = () => {
      setFullname('')
      setEmail('');
      setPhone('')
    }
  return (
    <div className='container border mt-4 p-4 w-50'  >
      
      <form>
      <div className="form-group row">
    <label for="inputFullName" className="col-sm-3 col-form-label">FullName <span className='text-danger'>*</span></label>
    <div className="col-sm-9">
      <input type="text" className="form-control w-50" id="inputEmail" value={fullName} name="fullName" placeholder='Enter Full Name'
      required onChange={(e)=>setFullname(e.target.value)} />
    </div>
  </div>
  <div className="form-group row">
    <label for="inputEmail" className="col-sm-3 col-form-label">Email<span className='text-danger'>*</span></label>
    <div className="col-sm-9">
      <input type="email"className="form-control w-50" id="inputEmail" value={email} name="email" required placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)} />
    </div>
  </div>
  <div className="form-group row">
    <label for="inputPhone" className="col-sm-3 col-form-label">Phone <span className='text-danger'>*</span></label>
    <div className="col-sm-9">
      <input type="number" className="form-control w-50" id="inputPhone" value={phone} placeholder="Enter Phone Number" name="phone" onChange={(e)=>setPhone(e.target.value)}/>
    </div>
  </div>
</form>
<div className=''>
<button type="button" className="btn btn-outline-danger m-3" onClick={handleCancel}> <i className="bi-x m-2"></i>Cancel</button>
<button type="button" className="btn btn-success m-3 " onClick={handlesubmit}><i className="bi-save m-2"></i>Save</button>

</div>
        </div>
        
    
  )
}

export default AddContact