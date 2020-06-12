import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import { selectMyHomePage } from '../../store/homepageDetails/selectors'
import { updateMyHomePage } from "../../store/homepageDetails/actions";

export default function MyStoriesEditForm() {
  const homepage = useSelector(selectMyHomePage);
  const stories = homepage.stories
  const dispatch = useDispatch();

  const [names, setNames] = useState(stories.map(story=>story.name));
  const [content, setContent] = useState(stories.map(story=>story.content) || []);
  const [imageUrl, setImageUrl] = useState(
    stories.map(story=>story.imageUrl) || []
  );
  

  function submitForm(event) {
    event.preventDefault();

    
    // dispatch(updateMyStories(names, content, imageUrl));
  }
  return (
    <div>

      <h2>Select Your Story to Edit:</h2>
      <select>
      {stories.map(story=>{

          return (
            <option key={story.id} value={story.name}>{story.name}</option>
          )
      })}

      </select>

    {/* <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
      <h1 className="mt-5 mb-5">Edit your page</h1>
      <Form.Group>
        <Form.Label>Name</Form.Label>
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
          type="text"
          placeholder="What is your page about"
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
    </Form> */}
    
    </div>
  );
}