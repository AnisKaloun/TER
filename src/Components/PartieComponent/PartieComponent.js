import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import axios from 'axios';

const Url = 'http://localhost:8888';



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

var indice = 1;
export default class PartieComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state =
        {
            utilisateur: {
                Age: null,
                Sexe: null,
                Profession: null
            },
            Scenario: [],
            situation: {
            },
            Result: '',
            ShowResult: false,
            FinPartie: false,
            MessageFin: "La Partie c'est finis",
            modalShow: false,
            hideB2:false,
            hideB3:false,
            row_insertion:
            {
                id_utilisateur: '',
                id_scenario: "scenario_" + this.props.location.state.player,
                id_choix1: null,
                id_choix2: null,
                id_choix3: null,
                id_choix4: null,
                id_choix5: null,
                id_choix6: null,
                id_choix7: null,
                id_choix8: null,
                id_choix9: null,
                id_choix10: null,
                id_choix11: null,
                id_choix12: null,
                id_choix13: null
            }

        }

        this.handleClick = this.handleClick.bind(this);

    }


    componentDidMount() {

        this.state.utilisateur.Age = this.props.location.state.age;
        this.state.utilisateur.Sexe = this.props.location.state.sexe;
        this.state.utilisateur.Profession = this.props.location.state.Profession;
        const self = this;
        axios.get(Url + '/Scenario', {
            params: {
                id_scenario: this.props.location.state.player
            }
        }).then(res => {
            self.setState({ Scenario: res.data, situation: res.data[0] });
        })

    }

    InsererChoix(choix) {
        if (this.state.row_insertion.id_choix1 == null) {
            this.state.row_insertion.id_choix1 = choix;
        }
        else if (this.state.row_insertion.id_choix2 == null) {
            this.state.row_insertion.id_choix2 = choix;
        }
        else if (this.state.row_insertion.id_choix3 == null) {
            this.state.row_insertion.id_choix3 = choix;
        }
        else if (this.state.row_insertion.id_choix4 == null) {
            this.state.row_insertion.id_choix4 = choix;
        }
        else if (this.state.row_insertion.id_choix5 == null) {
            this.state.row_insertion.id_choix5 = choix;
        }
        else if (this.state.row_insertion.id_choix6 == null) {
            this.state.row_insertion.id_choix6 = choix;
        }
        else if (this.state.row_insertion.id_choix7 == null) {
            this.state.row_insertion.id_choix7 = choix;
        }
        else if (this.state.row_insertion.id_choix8 == null) {
            this.state.row_insertion.id_choix8 = choix;
        }
        else if (this.state.row_insertion.id_choix9 == null) {
            this.state.row_insertion.id_choix9 = choix;
        }
        else if (this.state.row_insertion.id_choix10 == null) {
            this.state.row_insertion.id_choix10 = choix;
        }
        else if (this.state.row_insertion.id_choix11 == null) {
            this.state.row_insertion.id_choix11 = choix;
        }
        else if (this.state.row_insertion.id_choix12 == null) {
            this.state.row_insertion.id_choix12 = choix;
        }
        else {
            this.state.row_insertion.id_choix13 = choix
        }

    }

    AfficherResult(number) {
        console.log("je rentre içi")
        if (number == 1) {
            console.log("choix 1: " + this.state.situation.id_choix1)
            this.setState({ Result: this.state.situation.text_resultat1 })
            this.InsererChoix(this.state.situation.id_choix1);
        }
        else if (number == 2) {
            console.log("choix2: " + this.state.situation.id_choix2)
            this.setState({ Result: this.state.situation.text_resultat2 })
            this.InsererChoix(this.state.situation.id_choix2);

        }
        else if (number == 3) {
            console.log("choix3: " + this.state.situation.id_choix3)
            this.setState({ Result: this.state.situation.text_resultat3 })
            this.InsererChoix(this.state.situation.id_choix3);

        }
        this.setState({ ShowResult: true });
        this.setState({ modalShow: true });

    }

    NextSituation(number) {

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
        this.CasParticulierJesse(situationNumber);
        this.CasParticulierHank(situationNumber);
        for (i = 0; i < this.state.Scenario.length; i++) {
            console.log(" id dans le scenario : "+this.state.Scenario[i].id_situation+" id envoyé "+situationNumber)
            if (this.state.Scenario[i].id_situation === situationNumber) {
               
                this.setState({ situation: this.state.Scenario[i]});
                console.log("B2 : "+this.state.hideB2+"B3 : "+this.state.hideB3)
            }

        }

    }

    CheckNextSituation(number)
    {
        if (number == 1 && this.state.situation.id_situation1) {
            return true;
        }
        else if (number == 2 && this.state.situation.id_situation2) {
            return true;

        }
        else if (number == 3 && this.state.situation.id_situation3) {
            return true;
        }

        return false;


    }

    CasParticulierJesse(situationNumber)
    {
        if (situationNumber == 6 && this.state.situation.id_scenario == "scenario_hank") {
            if (this.state.row_insertion.id_choix1 == "C1") {

                this.setState({hideB3:true});
            }
            else if (this.state.row_insertion.id_choix1 == "C2") {
                this.setState({hideB2:true});

            }

        }
    }


    CasParticulierHank(situationNumber)
    {
        if (situationNumber == 9 && this.state.situation.id_scenario == "scenario_jesse") {
            if (this.state.row_insertion.id_choix1 == "C1") {

                this.setState({hideB2:true});
            }
            else if (this.state.row_insertion.id_choix1 == "C2") {
                this.setState({hideB3:true});

            }

        }
    }

    handleClick(e) {
        console.log("number of choice" + indice);
        indice++;
        this.AfficherResult(e.currentTarget.name);
        if (this.CheckNextSituation(e.currentTarget.name)) {
            this.NextSituation(e.currentTarget.name);
        }
        else {


            this.setState({FinPartie:true});
            console.log()
            axios.post(Url + '/InsertionUser', {
                age: this.state.utilisateur.Age,
                sexe: this.state.utilisateur.Sexe,
                profession: this.state.utilisateur.Profession
            })
                .then((response) => {
                    console.log(response.data);
                    this.state.row_insertion.id_utilisateur = response.data;
                    axios.post(Url + '/InsertionResultat', {
                        id_utilisateur: response.data,
                        id_scenario: this.state.row_insertion.id_scenario,
                        id_choix1: this.state.row_insertion.id_choix1,
                        id_choix2: this.state.row_insertion.id_choix2,
                        id_choix3: this.state.row_insertion.id_choix3,
                        id_choix4: this.state.row_insertion.id_choix4,
                        id_choix5: this.state.row_insertion.id_choix5,
                        id_choix6: this.state.row_insertion.id_choix6,
                        id_choix7: this.state.row_insertion.id_choix7,
                        id_choix8: this.state.row_insertion.id_choix8,
                        id_choix9: this.state.row_insertion.id_choix9,
                        id_choix10: this.state.row_insertion.id_choix10,
                        id_choix11: this.state.row_insertion.id_choix11,
                        id_choix12: this.state.row_insertion.id_choix12,
                        id_choix13: this.state.row_insertion.id_choix13
                    }).then((response) => {
                        console.log(response);
                    }, (error) => {
                        console.log(error);
                    });

                }, (error) => {
                    console.log(error);
                });

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
                {!this.state.FinPartie && !this.state.hideB2 && this.state.situation.text_choix2 &&
                    <Button name="2" onClick={this.handleClick}>{this.state.situation.text_choix2}</Button>
                }
                {!this.state.FinPartie && !this.state.hideB3 && this.state.situation.text_choix3 &&
                    <Button name="3" onClick={this.handleClick}>{this.state.situation.text_choix3}</Button>
                }

                { this.state.ShowResult && this.state.Result &&
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
