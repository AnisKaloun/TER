import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import axios from 'axios';

const Url = 'http://localhost:8888';


function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

function MyVerticallyCenteredModal(props) {

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                <p>
                    {props.text}
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Next</Button>
            </Modal.Footer>
        </Modal>
    );
}


export default class PartieComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state =
        {
            utilisateur: {
                Age: '',
                Sexe: '',
                Profession: ''
            },
            Scenario: [],
            situation: {
            },
            Result: '',
            ShowResult: false,
            FinPartie: false,
            MessageFin: "La Partie c'est finis",
            modalShow: false
        }

        this.handleClick = this.handleClick.bind(this);

    }


    componentDidMount() {

        this.state.utilisateur.Age=this.props.location.state.age;  
        this.state.utilisateur.Sexe=this.props.location.state.sexe;
        this.state.utilisateur.profession=this.props.location.state.profession;

        const self = this;
        axios.get(Url + '/Scenario', {
            params: {
                id_scenario: this.props.location.state.player
            }
        }).then(res => {
            self.setState({ Scenario: res.data, situation: res.data[0] });
        })

    }

    AfficherResult(number) {
        if (number == 1) {
            this.setState({ Result: this.state.situation.text_resultat1 })

        }
        else if (number == 2) {
            this.setState({ Result: this.state.situation.text_resultat2 })

        }
        else if (number == 3) {
            this.setState({ Result: this.state.situation.text_resultat3 })

        }
        this.setState({ ShowResult: true });
        this.setState({ modalShow: true });

    }

    NextSituation(number) {
        //sleep(2000);
        //this.setState({ShowResult:false});
        console.log("je Change de situation du nombre" + number);
        var situationNumber;
        if (number == 1) {
            situationNumber = this.state.situation.id_situation1;
        }
        else if (number == 2) {
            situationNumber = this.state.situation.id_situation2;

        }
        else if (number == 3) {
            situationNumber = this.state.situation.id_situation3;

        }
        var i;
        for (i = 0; i < this.state.Scenario.length; i++) {
            if (this.state.Scenario[i].id_situation === situationNumber) {

                this.setState({
                    situation: this.state.Scenario[i]
                });
                console.log("situation " + this.state.situation.text_situation)
            }

        }

    }

    handleClick(e) {
        this.AfficherResult(e.currentTarget.name);
        if (this.state.situation.id_situation1 && this.state.situation.id_situation2) {
            this.NextSituation(e.currentTarget.name);
        }
        else {
            this.state.FinPartie = true;

            //fonction ou en envoie les choix vers le serveur
        }

    }



    render() {
        console.log("Situation : " + this.state.situation.id_situation + " Situation Choix1: " + this.state.situation.id_situation1 + " Situation Choix2: " + this.state.situation.id_situation2);

        return (
            <div>
                <p>Vous avez choisis le joueur {this.props.location.state.player}</p>
                {this.state.FinPartie &&
                    <p>{this.state.MessageFin}</p>}
                {!this.state.FinPartie && this.state.situation.text_situation &&
                    <p>{this.state.situation.text_situation}</p>
                }
                {!this.state.FinPartie && this.state.situation.text_choix1 &&
                    <Button name="1" onClick={this.handleClick}>{this.state.situation.text_choix1}</Button>
                }
                {!this.state.FinPartie && this.state.situation.text_choix2 &&
                    <Button name="2" onClick={this.handleClick}>{this.state.situation.text_choix2}</Button>
                }
                {!this.state.FinPartie && this.state.situation.text_choix3 &&
                    <Button name="3" onClick={this.handleClick}>{this.state.situation.text_choix3}</Button>
                }

                {!this.state.FinPartie && this.state.ShowResult && this.state.Result &&
                    <MyVerticallyCenteredModal
                        show={this.state.modalShow}
                        text={this.state.Result}
                        onHide={() => this.setState({ modalShow: false })}
                    />
                }



            </div>
        );
    }
}
