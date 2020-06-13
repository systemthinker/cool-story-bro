import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import { selectMyHomePage } from '../../store/homepageDetails/selectors'
import { updateMyStories } from "../../store/homepageDetails/actions";
import './index.css'

export default function MyStoriesEditForm() {
  const homepage = useSelector(selectMyHomePage);
  const stories = homepage.stories
  const dispatch = useDispatch();

  const [names, setNames] = useState(stories.map(story=>story.name));
  
 

  const [name, setName] = useState('');
  const [content, setContent] = useState(stories.map(story=>story.content) || []);
  const [imageUrl, setImageUrl] = useState(
    stories.map(story=>story.imageUrl) || []
  );
  const [storyId, setStoryId] = useState()

  const [filteredStories, setFilteredStories] = useState(null)
  

  function submitForm(event) {
    event.preventDefault();

    
    dispatch(updateMyStories(storyId, name, content, imageUrl));
  }

  function selectFilter(e){
    const storyId = parseInt(e);
    
    setStoryId(storyId);
    let copyOfStories =[...stories]
    setFilteredStories(copyOfStories.filter(story => story.id === storyId))
  };

  function returnForm(){
    return (
      <div>
        <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
      <h1 className="mt-5 mb-5">Edit your Story</h1>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control
          value={name}
          onChange={event => setName(event.target.value)}
          type="text"
          placeholder="Name of your Story"
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Content</Form.Label>
        <Form.Control
          value={content}
          onChange={event => setContent(event.target.value)}
          type="text"
          placeholder="Content of your story"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Background Color</Form.Label>
        <Form.Control
          value={imageUrl}
          onChange={event => setImageUrl(event.target.value)}
          type="text"
        />
      </Form.Group>
    
      <Form.Group className="mt-5">
        <Button variant="primary" type="submit" onClick={submitForm}>
          Save changes
        </Button>
      </Form.Group>
    </Form>
      </div>
    )
  }

  
  return (
    <div>

      
       <h2>Select Which Story To Edit:</h2>
               <select className="selectStory" onChange={e=>selectFilter(e.target.value)}>
                 <option>Select your story</option>
                  {stories.map(story=>{

                      return (
                        <option key={story.id} value={story.id}>{story.name}</option>
                      )
                  })}
             </select>
      {filteredStories ? returnForm() : null}

      <div className="whitespace">

      </div>
 

      
      

    
    
    </div>
  );
}