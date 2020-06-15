import React, {useState} from 'react'
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import { useHistory } from 'react-router-dom'
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import { showMessageWithTimeout } from '../../store/appState/actions'
import { createMyStory } from '../../store/homepageDetails/actions'

export default function MyStoryCreateForm() {
const history = useHistory()
const dispatch = useDispatch()    
const [name, setName] = useState('Enter the name of your story')
const [content, setContent] =useState('Enter your content')
const [imageUrl, setImageUrl] = useState('https://cloudfour.com/examples/img-currentsrc/images/kitten-small.png')
const id = parseInt(history.location.pathname.slice(12,13))


function submitForm(event){
    event.preventDefault();

    
    dispatch(createMyStory(id,name, content, imageUrl));
    dispatch(showMessageWithTimeout("success", false, `You've succesfully created your ${name} story!`, 1500));
}

    return (
    <div>   
        <div>
            <h2>Create a New Story</h2>
        </div>    
     <div>
        
        <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
      
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
          as="textarea"
          aria-label="With textarea"
          placeholder="What is your story about"
          rows="10"
        
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Image Url</Form.Label>
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
    </div>     
    )
}
