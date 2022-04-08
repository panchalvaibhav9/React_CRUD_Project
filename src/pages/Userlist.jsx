import React from 'react';

const Userlist = () => {

  const records = JSON.parse(localStorage.getItem('userDetail')) || [];
  console.log(records);
  return (
    <div className="table-container">
      <h3 id="heading">List of Registared User Details</h3>
      <table className="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email address</th>
            <th>Mobile Number</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {
            records.map((record) => {
              return (
                <tr className="show-data">
                  <td>{record.fname}</td>
                  <td>{record.lname}</td>
                  <td>{record.email}</td>
                  <td>{record.phone}</td>
                  <td>{record.password}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Userlist
