import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import { selectMyHomePage } from '../../store/homepageDetails/selectors'
import { updateMyHomePage } from "../../store/homepageDetails/actions";
import { showMessageWithTimeout } from '../../store/appState/actions'
import './index.css'

export default function MyHomePageEditForm() {
  const homepage = useSelector(selectMyHomePage);
  const dispatch = useDispatch();
  const [title, setTitle] = useState(homepage.title);
  const [description, setDescription] = useState(homepage.description || "");
  const [backgroundColor, setBackgroundColor] = useState(
    homepage.backgroundColor
  );
  const [color, setColor] = useState(homepage.color);

  function submitForm(event) {
    event.preventDefault();

    
    dispatch(updateMyHomePage(title, description, backgroundColor, color));
    dispatch(showMessageWithTimeout("success", false, `You've succesfully edited your ${title} Homepage!`, 1500))
  }
  return (
    <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
      <h1 className="mt-5 mb-5">Edit your Homepage</h1>
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control
          value={title}
          onChange={event => setTitle(event.target.value)}
          type="text"
          placeholder="Title of your page"
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control
          value={description}
          onChange={event => setDescription(event.target.value)}
          as="textarea"
          aria-label="With textarea"
       
          bg="bigger"
          placeholder="What is your page about"
          rows="10"
        />
        
      </Form.Group>
      <Form.Group>
        <Form.Label>Background Color</Form.Label>
        <Form.Control
          value={backgroundColor}
          onChange={event => setBackgroundColor(event.target.value)}
          type="color"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Text Color</Form.Label>
        <Form.Control
          value={color}
          onChange={event => setColor(event.target.value)}
          type="color"
        />
      </Form.Group>
      <Form.Group className="mt-5">
        <Button variant="primary" type="submit" onClick={submitForm}>
          Save changes
        </Button>
      </Form.Group>
    </Form>
  );
}