/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [search, setSearch] = useState("");
  const [disData, setData] = useState([]);
  const navigate = useNavigate();
  let data = JSON.parse(localStorage.getItem("contacts"));
  useEffect(() => {
    setSearch(data);
    setData(data)
  }, []);
  const handleSearch = (e) => {
    const { value } = e.target;
    let fildata =
      search.filter((item) =>
        item.fullName.toLowerCase().includes(value.toLowerCase())
      ||
        item.email.toLowerCase().includes(value.toLowerCase())
      ||
      item.phone.toString().includes(value.toString()));
    setData(fildata);

  };

  const handleClick = () => {
    navigate("/newcontact");
  };

  const handleDelete = (item) => {
    if (window.confirm(`Are you sure wnat to delete ${item.fullName}`)) {
      let contacts = JSON.parse(localStorage.getItem('contacts'));
      let filtercontacts = contacts.filter((contact) => contact.email !== item.email)
      setData(filtercontacts)
      localStorage.setItem('contacts', JSON.stringify(filtercontacts));
    }
  };

  const handleEdit = (item) => {
    navigate(`/editContact/${item}`);
  };
  return (
    <div>
      <div className="p-2 border container ">
        <div className="container row d-flex justify-content-center m-4 p-4 ">
          <input
            type="text"
            className="form-control w-50"
            onChange={handleSearch}
            placeholder="Search details"
          />
          <button
            type="button"
            className="btn-success my-2 my-sm-0 m-4"
            onClick={handleClick}
          >
            <i class="bi-plus-lg"></i> New Contact
          </button>
        </div>
        {disData.length >0 ? 
          
          (
            <div>
              {disData.map(item => (
                <div className="card w-30 mx-auto">
                  <div className="card-body">
                    <div className=" d-flex  row justify-content-between">
                      <div className="ml-5">
                        <h5 className="card-title">{item.fullName}</h5>
                        <p className="card-text">{item.email}</p>
                        <p className="card-text">{item.phone}</p>
                      </div>
                      <div className="">
                        <button
                          className="btn btn-outline-danger my-2 my-sm-0 m-2"
                          onClick={() => handleDelete(item)}
                        >
                          {" "}
                          <i className="bi-trash m-2"></i>Delete
                        </button>
                        <button
                          className="btn btn-warning my-2 my-sm-0 m-2"
                          onClick={() => handleEdit(item.email)}
                        >
                          <i class="bi-pencil-square m-2"></i>Edit
                        </button>
                      </div>
                    </div>
                    <div>
                    </div>
                  </div>
                </div>))}
            </div>) :
          (
            <div className="d-flex justify-content-center"><div class="alert alert-primary w-50" role="alert">
            <i class="bi-info-circle-fill m-2 h4"></i>You Have no contacts currently
            </div>
          </div>) }
      </div>
    </div>
  )
}

export default Home;
