import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      number: "",
      password: "",
      submitted: false, // To track form submission
    };
  }

  // Handle input changes
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  // Handle form submission
  handleSubmit = (event) => {
    event.preventDefault(); // Prevent page refresh
    this.setState({ submitted: true }); // Update submission status
  };

  render() {
    const { name, email, number, password, submitted } = this.state;

    return (
      <div style={{ width: "400px", margin: "20px auto" }}>
        <h2>React Form</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label>Number:</label>
            <input
              type="tel"
              name="number"
              value={number}
              onChange={this.handleChange}
              placeholder="Enter your number"
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>

        {submitted && (
          <div style={{ marginTop: "20px", border: "1px solid #ccc", padding: "10px" }}>
            <h3>Submitted Details</h3>
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Number:</strong> {number}</p>
            <p><strong>Password:</strong> {password}</p>
          </div>
        )}
        <h1>Task 8 completed</h1>
        <hr style={{ border: "none", borderTop: "2px dotted #333", margin: "20px 0" }} />
      </div>
    );
  }
}

export default Form;
