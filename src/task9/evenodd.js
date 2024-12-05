import React, { Component } from 'react';

class EvenOddChecker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: '', // Default empty state
    };
  }

  handleInputChange = (event) => {
    this.setState({ number: event.target.value }); // Update state on input change
  };

  render() {
    const { number } = this.state;
    const isEven = number && number % 2 === 0; // Check if number is even
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2>Check Even or Odd</h2>
        <input
          type="number"
          placeholder="Enter a number"
          value={number}
          onChange={this.handleInputChange}
          style={{ padding: '10px', marginBottom: '10px' }}
        />
        <div>
          {number !== '' && (
            <h3>
              The number {number} is {isEven ? 'Even' : 'Odd'}.
            </h3>
          )}
        </div>
        <h1>Task 9 Completed</h1>
        <hr style={{ border: "none", borderTop: "2px dotted #333", margin: "20px 0" }} />
      </div>
    );
  }
}

export default EvenOddChecker;
