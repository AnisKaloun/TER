import React from 'react';
import { Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default class HomePage extends React.Component {
    render() {
        return (
            <div>
            <h2>Welcome to Our Website!</h2>
            <p>içi on met la description de notre site et tout</p>
            <Link to="/formulaire">
            <Button >Start</Button>
            </Link>

            </div>
       
        );
    }
}
