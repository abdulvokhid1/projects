import React, { useState } from "react";
import { students } from "../mock";

const Students = () => {
  const [name, setName] = useState(students);

  const [item, setItem] = useState("");
  //   const [status, setStatus] = useState("");

  // DELETE
  const onDelete = (id) => {
    let res = name.filter((value) => value.id !== id);
    setName(res);
  };
  // READ
  const onSearch = (e) => {
    let res = students.filter((value) =>
      value.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setName(res);
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    setItem();
  };
  const onSave = () => {
    const newUser = {
      id: Date.now(),
      name: item.name,
      status: item.status,
    };
    setItem({ data: [item, newUser] });
  };

  return (
    <div>
      <input type="text" placeholder="search" onChange={onSearch} />
      <table border={1}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {name.map((value) => (
            <tr key={value.id}>
              <td>{value.id}</td>
              <td>{value.name}</td>
              <td>{value.status}</td>
              <td>
                <button onClick={() => onDelete(value.id)}>delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <input onChange={onChange} name="name" type="text" placeholder="name" />
      {/* <input
        onChange={onChange}
        name="status"
        type="text"
        placeholder="status"
      /> */}
      <button onClick={onSave}>add</button>
    </div>
  );
};

export default Students;
