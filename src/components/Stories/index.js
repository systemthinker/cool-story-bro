import React from 'react'
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

export default function Stories(props) {
    return (
        <Jumbotron
          style={{
            backgroundColor: props.backgroundColor,
            color: props.color
          }}
        >
          <h1>{props.name}</h1>
          <p>{props.content}</p>
          <img src={props.imageUrl} height="250" width="300"></img>
          
        </Jumbotron>
      );
}
