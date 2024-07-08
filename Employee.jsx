import React,{useState} from 'react'

const Employee = () => {
  const [data, setData] = useState([]);
  const [empid, setEmpid] = useState('');
  const [name, setName] = useState('');
  const [salary, setSalary] = useState('');
  const [designation, setDesignation] = useState('');
  const [editId, setEditId] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'empid':
        setEmpid(value);
        break;
      case 'name':
        setName(value);
        break;
      case 'salary':
        setSalary(value);
        break;
      case 'designation':
        setDesignation(value);
        break;
      default:
        break;
    }
  };
  const handleAdd = () => {
    const newData = { id: Date.now(), empid, name, salary, designation };
    setData([...data, newData]);
    setEmpid('');
    setName('');
    setSalary('');
    setDesignation('');
  };

  // Edit data
  const handleEdit = (id) => {
    const editData = data.find((item) => item.id === id);
    setEmpid(editData.empid);
    setName(editData.name);
    setSalary(editData.salary);
    setDesignation(editData.designation);
    setEditId(id);
  };

  // Update data
  const handleUpdate = () => {
    const updatedData = data.map((item) =>
      item.id === editId ? { ...item, empid, name, salary, designation } : item
    );
    setData(updatedData);
    setEmpid('');
    setName('');
    setSalary('');
    setDesignation('');
    setEditId(null);
  };

  // Delete data
  const handleDelete = (id) => {
    const filteredData = data.filter((item) => item.id !== id);
    setData(filteredData);
  };

  return (
    <div>
      <h1>EMPLOYEE REGISTERATION</h1>
      <div>
    <label for="empid">Employee ID:</label>
    <input type="text" id="empid" name="empid" value={empid} onChange={handleInputChange} placeholder="Employee ID" /> <br /> <br />

    <label for="name">Name:</label>
    <input type="text" id="name" name="name" value={name} onChange={handleInputChange} placeholder="Name" /> <br /> <br />

    <label for="salary">Salary:</label>
    <input type="text" id="salary" name="salary" value={salary} onChange={handleInputChange} placeholder="Salary" /> <br /> <br />

    <label for="designation">Designation:</label>
    <input type="text" id="designation" name="designation" value={designation} onChange={handleInputChange} placeholder="Designation" /> <br /> <br />

    {editId ? (
          <button onClick={handleUpdate}>Update</button>
        ) : (
          <button onClick={handleAdd}>Add</button>
        )}
      </div>
      <table>
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Salary</th>
            <th>Designation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.empid}</td>
              <td>{item.name}</td>
              <td>{item.salary}</td>
              <td>{item.designation}</td>
              <td>
                <button onClick={() => handleEdit(item.id)}>Edit</button>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  )
}

export default Employee
