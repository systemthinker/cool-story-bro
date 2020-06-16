import React from "react";
import { useSelector } from 'react-redux' 
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { selectToken } from '../../store/user/selectors'

export default function Homepages(props) {
  
  
  return (
    <Jumbotron
      style={{
        backgroundColor: props.backgroundColor,
        color: props.color
      }}
    >
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      {props.showLink ? (
        <Link to={`/homepages/${props.id}`}>
          <Button>Visit page</Button>
        </Link>
      ) : null}
    </Jumbotron>
  );
}