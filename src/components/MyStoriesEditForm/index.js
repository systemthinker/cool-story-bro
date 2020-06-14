import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import { selectMyHomePage } from '../../store/homepageDetails/selectors'
import { updateMyStories,deleteMyStory } from "../../store/homepageDetails/actions";
import { showMessageWithTimeout } from '../../store/appState/actions'
import './index.css'

export default function MyStoriesEditForm() {
  const homepage = useSelector(selectMyHomePage);
  const stories = homepage.stories
  const dispatch = useDispatch();

  const [names, setNames] = useState(stories.map(story=>story.name));

  
  
 

  const [name, setName] = useState('Your name here');
  const [content, setContent] = useState(stories.map(story=>story.content) || "Your Story here");
  const [imageUrl, setImageUrl] = useState(
    stories.map(story=>story.imageUrl) || "Your image here"
  );
  const [storyId, setStoryId] = useState()

  const [filteredStories, setFilteredStories] = useState(null)
  

  function submitForm(event) {
    event.preventDefault();

    
    dispatch(updateMyStories(storyId, name, content, imageUrl));
    dispatch(showMessageWithTimeout("success", false, `You've succesfully edited your ${name} story!`, 1500));
  }

  function submitFormDelete(event){
    event.preventDefault();
    dispatch(deleteMyStory(storyId))
    dispatch(showMessageWithTimeout("success", false, `You've succesfully deleted your ${name} story!`, 1500));
  }

  function selectFilter(e){
    const storyId = parseInt(e);
   
    
    setStoryId(storyId);
    let copyOfStories =[...stories]
    setFilteredStories(copyOfStories.filter(story => story.id === storyId))
    copyOfStories.filter(story => story.id === storyId).map(s => {
      
      setName(s.name)
      setContent(s.content)
      setImageUrl(s.imageUrl)
      
      
    })
  };

  function returnForm(){
    return (
      <div>
        <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
      <h1 className="mt-5 mb-5">Edit your {name} Story</h1>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control
          value={name}
          onChange={event => setName(event.target.value)}
          type="text"
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Content</Form.Label>
        <Form.Control
          value={content}
          onChange={event => setContent(event.target.value)}
          type="text"
          placeholder={`${filteredStories.content}`}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Image Url</Form.Label>
        <Form.Control
          value={imageUrl}
          onChange={event => setImageUrl(event.target.value)}
          type="text"
          placeholder={`${filteredStories.imageUrl}`}
        />
      </Form.Group>
    
      <Form.Group className="mt-5">
        <Button variant="primary" type="submit" onClick={submitForm}>
          Save changes
        </Button>
      </Form.Group>
    </Form>

    <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
      
      <Form.Group>
      <Button variant="danger" type="submit" onClick={submitFormDelete}>
          Delete This Story
        </Button>
        <div>
        <Form.Label>Warning: deleting this story will remove it forever</Form.Label>
        </div>
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