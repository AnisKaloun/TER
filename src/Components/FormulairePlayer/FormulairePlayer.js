import React from 'react';
import { Button, Form, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
        alert("L'utilisateur a était soumis " + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <Form>
                    <Form.Group as={Col} controlId="formAge">
                        <Form.Label>Age</Form.Label>
                        <Form.Control type="number" name="Age" value={this.state.Age} onChange={this.handleChange} placeholder="Age" required={true} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formSexe">
                        <Form.Label>Sexe</Form.Label>
                        <Form.Control name="Sexe" as="select" value={this.state.Sexe} onChange={this.handleChange} >
                            <option selected value="Homme">Homme</option>
                            <option value="Femme">Femme</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formProfession">
                        <Form.Label>Profession</Form.Label>
                        <Form.Control name="Profession" as="select" value={this.state.Profession} onChange={this.handleChange}>
                            <option selected value="Etudiant">Etudiant</option>
                            <option value="Travailleur">Travailleur</option>
                            <option value="Sans emploi">Sans emploi</option>
                        </Form.Control>
                    </Form.Group>
                    <Link
                        to={{
                            pathname: `/StartGame`,
                           state:{
                            age: this.state.Age,
                            sex: this.state.Sexe,
                            Profession:this.state.Profession
                              }
                        }}
                    >
                        <Button variant="primary" type="submit">
                            Suivant
                    </Button>
                    </Link>
                </Form>
                <p>Age:{this.state.Age}</p>
                <p>Sexe:{this.state.Sexe}</p>
                <p>emploi:{this.state.Profession}</p>

            </div>

        );
    }
}
