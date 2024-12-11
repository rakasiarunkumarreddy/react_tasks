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
      submittedData: null, // To store submitted data
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
    const { name, email, number, password } = this.state;
    this.setState({
      submitted: true, // Update submission status
      submittedData: { name, email, number, password }, // Store submitted data
      name: "", // Reset the name field
      email: "", // Reset the email field
      number: "", // Reset the number field
      password: "", // Reset the password field
    });
  };

  render() {
    const { name, email, number, password, submitted, submittedData } = this.state;

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

        {submitted && submittedData && (
          <div style={{ marginTop: "20px", border: "1px solid #ccc", padding: "10px"}}>
            <h3>Submitted Details</h3>
            <p><h2>Name:</h2> {submittedData.name}</p>
            <p><h2>Email:</h2> {submittedData.email}</p>
            <p><h2>Number:</h2> {submittedData.number}</p>
            <p><h2>Password:</h2> {submittedData.password}</p>
          </div>
        )}
        <h1>Task 8 completed</h1>
        <hr style={{ border: "none", borderTop: "2px dotted #333", margin: "20px 0" }} />
      </div>
    );
  }
}

export default Form;
