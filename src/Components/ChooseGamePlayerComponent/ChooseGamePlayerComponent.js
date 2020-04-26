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
         <div>
             <p>Age : {this.state.Age}</p>
             <p>Sexe :{this.state.Sexe}</p>
             <p>Profession:{this.state.Profession}</p>
            <p>ici vous allez choisir quel Personnage Vous jouez</p>
            <Link to={{
               pathname :'/Game',
               state :
               {
                player :'walter'
               }
            }
            }>
            <Button>Walter White</Button>
            </Link>

 
 
 
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
            <Button>Jesse Pinkman</Button>
                    
            </Link>
            
           
           
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
            <Button>Hank Schrader</Button>

            </Link>



            <Link to={{
               pathname :'/Game',
               state :
               {
                player :'saul',
                age:this.state.Age,
                sexe:this.state.Sexe,
                Profession:this.state.Profession
               }
            }
            }>
            <Button>Saul Goodman</Button>

            </Link>



            <Link to={{
               pathname :'/Game',
               state :
               {
                player :'gustavo',
                age:this.state.Age,
                sexe:this.state.Sexe,
                Profession:this.state.Profession
               }
            }
            }>
     
            <Button>Gustavo Fring</Button>
            </Link>
         </div>
        );
    }
}
