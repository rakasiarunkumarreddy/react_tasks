import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Cards = (props) => {
  return (
    <div>
      <Card
  style={{
    width: "18rem", // Increased width for more content space
    height: "400px", // Increased height to balance larger image and content
    border: "2px solid black",
    borderRadius: "8px",
    backgroundColor: "pink",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden", // Ensures no overflow outside the card
    margin: "16px",
  }}
>
  <Card.Img
    style={{
      width: "100%",
      height: "150px", // Larger image area
      objectFit: "cover", // Keeps image proportional
      borderBottom: "2px solid black",
    }}
    variant="top"
    src={props.images}
  />
  <Card.Body
    style={{
      padding: "16px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      overflow: "hidden", // Prevents content overflow
    }}
  >
    <Card.Title
      style={{
        fontSize: "1.25rem",
        fontWeight: "bold",
        marginBottom: "12px",
        height: "100px", // Fixed height for titles
        overflow: "auto", // Prevents long titles from breaking layout
      }}
    >
      {props.titles}
    </Card.Title>
    <Card.Text
      style={{
        fontSize: "1rem",
        color: "#333",
        maxHeight: "100px", // Fixed height for visible content
        overflowY: "auto", // Adds scrolling if text overflows
        marginBottom: "16px",
        paddingRight: "8px", // Prevents scroll from overlapping text
      }}
    >
      {props.data}
    </Card.Text>
    <Button
      variant="primary"
      style={{
        backgroundColor: "#007bff",
        border: "none",
        borderRadius: "4px",
        padding: "8px 16px",
        fontSize: "1rem",
        color: "white",
        cursor: "pointer",
        alignSelf: "center",
        width: "auto",
      }}
      onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
      onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
    >
      Go somewhere
    </Button>
  </Card.Body>
</Card>
    </div>
  )
}

export default Cards
