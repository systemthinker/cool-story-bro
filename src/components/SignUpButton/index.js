import React  from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Button from "react-bootstrap/Button";
import { selectToken, selectUser } from '../../store/user/selectors'

export default function SignUpButton() {
    const token = useSelector(selectToken);
    const user = useSelector(selectUser);
    

    const isToken = token ? <Link exact="true" to={`/myhomepage/${user.id}`}>
    <Button variant="success">Start Posting </Button>
</Link> : <Link to="/signup">
    <Button variant="success">Click here to make an account and start making your homepage! </Button>
</Link>

    return (
        <div>
            {isToken}
        </div>
    )
}
