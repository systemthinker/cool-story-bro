import React from 'react'
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

export default function HomepageDetails(props) {
    return (
        <Jumbotron
          style={{
            backgroundColor: props.backgroundColor,
            color: props.color
          }}
        >
          <h1>{props.title}</h1>
          <p>{props.description}</p>
          
        </Jumbotron>
      );
}



