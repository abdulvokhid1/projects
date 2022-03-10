import React, { Component } from "react";
import { students } from "../mock";

export class State extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: students,
      name: "",
      status: "",
    };
  }
  render() {
    const onDelete = (id) => {
      console.log(id);
      let res = this.state.data.filter((value) => value.id !== id);
      this.setState({ data: res });
    };

    const onSearch = (e) => {
      let res = students.filter((value) =>
        value.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      this.setState({ data: res });
    };
    const onChange = (e) => {
      const { name, value } = e.target;
      this.setState({ [name]: value });
    };

    const onSave = () => {
      console.log(this.state.name, this.state.status);
      const newUser = {
        id: Date.now(),
        name: this.state.name,
        status: this.state.status,
      };
      this.setState({ data: [...this.state.data, newUser] });
    };

    return (
      <div>
        <input type="text" placeholder="search" onChange={onSearch} />
        <table border={1}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((value) => (
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
        <input
          onChange={onChange}
          name="status"
          type="text"
          placeholder="status"
        />
        <button onClick={onSave}>add</button>
      </div>
    );
  }
}
