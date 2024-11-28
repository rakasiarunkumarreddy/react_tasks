import React from 'react'
import Table from 'react-bootstrap/Table';


const Tables = () => {
  return (
    <div>
       <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>sl.no</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Bhanu</td>
          <td>Reddy</td>
          <td>@bhanu</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Venu</td>
          <td>Reddy</td>
          <td>@venu</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Rakasi Arun Reddy</td>
          <td>@arun</td>
        </tr>
      </tbody>
    </Table>
    <h1>Task 6 Completed</h1>
    <hr style={{ border: "none", borderTop: "2px dotted #333", margin: "20px 0" }} />
    </div>
  )
}

export default Tables
