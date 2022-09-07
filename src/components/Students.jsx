import React from 'react';

function Students(){
    return(
        <>
        <div className='flex'>
            <h1>Student Details</h1>
            <button>Add new student</button>
        </div>
        
        <table className="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Course</th>
      <th scope="col">Batch</th>
      <th scope="col">Change</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John</td>
      <td>26</td>
      <td>MERN</td>
      <td>October</td>
      <td>Edit</td>
    </tr>
    <tr>
      <td>Doe</td>
      <td>25</td>
      <td>MERN</td>
      <td>November</td>
      <td>Edit</td>
    </tr>
    <tr>
      <td>Biden</td>
      <td>26</td>
      <td>MERN</td>
      <td>September</td>
      <td>Edit</td>
    </tr>
    <tr>
        <td>Barar</td>
        <td>22</td>
        <td>MERN</td>
        <td>September</td>
        <td>Edit</td>
    </tr>
    <tr>
        <td>Christ</td>
        <td>23</td>
        <td>MERN</td>
        <td>October</td>
        <td>Edit</td>
    </tr>
    <tr>
        <td>Elent</td>
        <td>24</td>
        <td>MERN</td>
        <td>November</td>
        <td>Edit</td>
    </tr>
    <tr>
        <td>Harshitha Sharma</td>
        <td>24</td>
        <td>MERN</td>
        <td>October</td>
        <td>Edit</td>
    </tr>
    
  </tbody>
</table>
        </>
    );
}
export default Students;