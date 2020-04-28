import React from 'react';
import { Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
export default class ChooseGamePlayerComponent extends React.Component {
    
    constructor(props)
    {
     super(props);
     this.state=
     {
       Age:null,
       Sexe:null,
       Profession:null 
     }
    }
    componentDidMount(){
       this.setState({Age:this.props.location.state.age,Sexe:this.props.location.state.sexe,Profession:this.props.location.state.profession})
        console.log(this.props.location.state.age)
        }
    render() {
        return (
         <div style={{
            padding: '20px',
            position: 'absolute', left: '50%', top: '50%',
            transform: 'translate(-50%, -50%)',
            border: '1.5px solid',
            'box-shadow': '1px 1px 12px #555',
            'text-align' : 'center',
            'background-color': 'rgb(230,230,230)'
        }}>
            <p>Choisissez le personnage que vous souhaitez jouer : </p>

            <p><strong>Profil : </strong>Ancien professeur de chimie qui se lance dans le milieu de la drogue</p>
            <Link to={{
               pathname :'/Game',
               state :
               {
                player :'walter',
                age:this.state.Age,
                sexe:this.state.Sexe,
                Profession:this.state.Profession
               }
            }
            }>

            <Button style= {{
            "margin-right": "20px",
            "margin-bottom": "20px"
            }} variant="success">Walter White</Button>
            </Link>

            <p><strong>Profil : </strong>Jeune délinquant de petit envergure déscolarisé et baignant dans le monde de la drogue</p>
            <Link to={{
               pathname :'/Game',
               state :
               {
                player :'jesse',
                age:this.state.Age,
                sexe:this.state.Sexe,
                Profession:this.state.Profession
               }
            }
            }>

            <Button style={{
            "margin-right": "20px",
            "margin-bottom": "20px"
            }} variant="success">Jesse Pinkman</Button>
                    
            </Link>
            
            <p><strong>Profil : </strong>Policier membre de la section anti-drogue, beau-frère de Walter White</p>
            <Link to={{
               pathname :'/Game',
               state :
               {
                player :'hank',
                age:this.state.Age,
                sexe:this.state.Sexe,
                Profession:this.state.Profession
               }
            }
            }>

            <Button style={{
            "margin-right": "20px",
            "margin-bottom": "20px"
            }} variant="success">Hank Schrader</Button>

            </Link>

            <p><strong>Profil : </strong>Patron d'une grande ligne de fast-food qu'il utilise afin de dissimuler un immense trafic de drogue</p>
            <Link to={{
               pathname :'/Game',
               state :
               {
                player :'gus',
                age:this.state.Age,
                sexe:this.state.Sexe,
                Profession:this.state.Profession
               }
            }
            }>

            <Button style={{
            "margin-right": "20px"
            }} variant="success">Gustavo Fring</Button>
            </Link>
         </div>
        );
    }
}
