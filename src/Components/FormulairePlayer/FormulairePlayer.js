import React from 'react';
import { Button, Form, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class FormulairePlayer extends React.Component {



    render() {
        return (
            <div>  
             <p>AgeString</p>
                <Form>
                    <Form.Group as={Col} controlId="formAge">
                        <Form.Label>Age</Form.Label>
                        <Form.Control type="number" name="Age" placeholder="Age" required="true" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formSexe">
                        <Form.Label>Sexe</Form.Label>
                        <Form.Control name="formSexe" as="select" >
                            <option>Homme</option>
                            <option>Femme</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formProfession">
                        <Form.Label>Profession</Form.Label>
                        <Form.Control name="formProfession" as="select">
                            <option>Etudiant</option>
                            <option>Travailleur</option>
                            <option>Sans emploi</option>
                        </Form.Control>
                    </Form.Group>
                    <Link to="/StartGame">
                        <Button variant="primary" type="submit">
                            Suivant
                    </Button>
                    </Link>
                </Form>
            </div>

        );
    }
}
