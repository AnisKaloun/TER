import React from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';

const Url = 'http://localhost:8888';

export default class PartieComponent extends React.Component {


    constructor(props) {
        super(props);
        this.state =
        {
            Scenario: [],
            situation:{
            }
        }

        axios.get(Url + '/Scenario', {
            params: {
                id_scenario: this.props.location.state.player
            }
        }).then(res => {
            console.log(res.data);
            this.state.Scenario=res.data;
            this.state.situation=res.data[0];
        })
        
    }

 

/*

    findSituationwithId(number) {
        this.state.Scenario.filter(function (situation, number) {
            return situation.id_situation == number;
        })
    }


    findArrayElementByid(array, id_situation) {

        console.log("je suis dans la fonction");
        array.map((element) => {
            if (element.id_situation === 0) {
                console.log(element.text_situation);
                return element;
            }
        });
    }
*/

    render() {
        return (
            <div>
                <p>Vous avez choisir le joueur {this.props.location.state.player}</p>

               <p>situation :{this.state.situation.text_situation}</p>
                <Button name="Choix 1">Choix 1 :{this.state.situation.text_choix1}</Button>
                <Button name="Choix 2">Choix 2: {this.state.situation.text_choix2}</Button>
                <Button name="Choix 3">Choix 3: {this.state.situation.text_choix3}</Button>
            </div>
        );
    }
}
