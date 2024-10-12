import './App.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addData, deleteData, editData, sortData, searchData } from './Actions';

function App() {

  const [person, setPerson] = useState({ fname: "", age: "", address: "", phoneno: "", birthdate: "", city: "", gender: "" })
  console.log(person);

  const selector = useSelector((selector) => selector);

  const [search, setsearch] = useState();

  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(-1)

  const handleOnchange = (e) => {
    console.log(e.target.name);
    setPerson({ ...person, [e.target.name]: e.target.value })

  }
  console.log(selector.formReducer);
  const handleSubmit = () => {

    if (isEdit === -1) {
      dispatch(addData(person))
    }
    else {
      dispatch(editData(isEdit, person));
    }
  }

  const handleDElete = (index) => {
    dispatch(deleteData(index))
  }

  const handleEdit = (idx, record) => {
    dispatch(editData(person))
    setPerson(record);
    setIsEdit(idx)
  }
  const handleSort = () => {
    console.log("sortt");
    dispatch(sortData())
  }

  const handleSearch = () => {
    console.log("searchh");
    dispatch(searchData(search))
  }


  return (
    <>
      <div className="container">
        <h1> Form</h1>
        <div>
          <label htmlFor="fname">First name:</label>
          <input type="text" id="fname" name="fname" value={person.fname} onChange={(e) => handleOnchange(e)} />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input type="number" id="age" name="age" value={person.age} onChange={(f) => handleOnchange(f)} />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input type="address" id="address" name="address" value={person.address} onChange={(g) => handleOnchange(g)} />
        </div>
        <div>
          <label htmlFor="phone">Phone no.:</label>
          <input type="tel" id="phone" name="phoneno" value={person.phoneno} onChange={(h) => handleOnchange(h)} />
        </div>
        <div>
          <label htmlFor="birthdate">Birthdate:</label>
          <input type="date" id="bdate" name="birthdate" value={person.birthdate} onChange={(i) => handleOnchange(i)} />
        </div>
        <div>
          <label htmlFor="city">City:</label>
          <select id="city" name="city" value={person.city} onChange={(j) => handleOnchange(j)}>
            <option value="Rajkot">Rajkot</option>
            <option value="Morbi" >Morbi</option>
            <option value="Surat">Surat</option>
          </select>
        </div>
        <div>
          <label htmlFor="gender">Gender:</label>
          <input type="radio" id="male" name="gender" value="male" onChange={(k) => handleOnchange(k)} />Male
          <input type="radio" id="female" name="gender" value="female" onChange={(k) => handleOnchange(k)} />Female
        </div>
        <div>
          <button onClick={handleSubmit}>Submit</button>
        </div>
        <div className='buttonn'>
          <input type="text" onChange={(ab) => setsearch(ab.target.value)} value={search} id="myInput" placeholder="Search for names.." />
          <button onClick={handleSearch}>Search</button>
          <button onClick={handleSort}>Sort</button>
        </div>
        <table className="table table-bordered" >
          <thead>
            <tr>
              <th>Firstname</th>
              <th>Age</th>
              <th>Address</th>
              <th>phone No.</th>
              <th>Birthdate</th>
              <th>City</th>
              <th>Gender</th>
              <th>Button</th>
            </tr>
          </thead>
          <tbody>
            {selector?.formReducer?.map((item, index) => {
              return (
                <tr>
                  <td>{item.fname}</td>
                  <td>
                    {item.age}
                  </td>
                  <td>
                    {item.address}
                  </td>
                  <td>
                    {item.phoneno}
                  </td>
                  <td>
                    {item.birthdate}
                  </td>
                  <td>
                    {item.city}
                  </td>
                  <td>
                    {item.gender}
                  </td>
                  <td>
                    {<button onClick={() => handleEdit(index, item)}>Edit</button>}
                    {<button onClick={() => handleDElete(index)}>Delete</button>}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;