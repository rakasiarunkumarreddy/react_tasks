import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Productcard(props) {
  return (            
    <div>
      <Card style={{ width: '18rem',height:"350px",marginTop:"10px",marginLeft:"10px"}}>
        <Card.Img 
          variant="top" 
          src={props.img} style={{height:"180px"}} />
        <Card.Body 
            style={{  height: '150px', overflowY:"scroll" }}>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.desc}</Card.Text> 
        </Card.Body>
         
          <Card.Footer className="text-muted">  <Button variant="secondary">{props.categ}</Button></Card.Footer>
      </Card>

 


      </div>
  );
}

export default Productcard;