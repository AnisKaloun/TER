import React from 'react';
import { Button, Form, Col } from 'react-bootstrap';


export default class FormulairePlayer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            Age: '',
            Sexe: 'Homme',
            Profession: 'Etudiant'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        console.log("I'm here")
        event.preventDefault();

        console.log("envoie de :"+this.state.Age);

       

        this.props.history.push({
            pathname: "/StartGame",
            state: 
            {
                
                
                    age: this.state.Age,
                    sexe: this.state.Sexe,
                    profession: this.state.Profession,
            
            }
        });


    }

    render() {
        return (
            <div>
                <Prompt
                 when={!!this.state.Age}
                 message="Etes vous sur de vouloir sortir ? vos informations seront perdu "
                />
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group as={Col} controlId="formAge">
                        <Form.Label>Age</Form.Label>
                        <Form.Control required type="number" name="Age" value={this.state.Age} onChange={this.handleChange} placeholder="Age" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formSexe">
                        <Form.Label>Sexe</Form.Label>
                        <Form.Control name="Sexe" as="select" value={this.state.Sexe} onChange={this.handleChange} >
                            <option defaultValue="Homme">Homme</option>
                            <option value="Femme">Femme</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formProfession">
                        <Form.Label>Profession</Form.Label>
                        <Form.Control name="Profession" as="select" value={this.state.Profession} onChange={this.handleChange}>
                            <option defaultValue="Etudiant">Etudiant</option>
                            <option value="Travailleur">Travailleur</option>
                            <option value="Sans emploi">Sans emploi</option>
                        </Form.Control>
                    </Form.Group>

                    <Button variant="primary" type="submit" >
                        Suivant
                    </Button>
                </Form>
            </div>

        );
    }
}
