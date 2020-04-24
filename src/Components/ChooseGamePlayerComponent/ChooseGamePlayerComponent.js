import React from 'react';
import { Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
export default class ChooseGamePlayerComponent extends React.Component {
    
    constructor(props)
    {
     super(props);
    }
    componentDidMount(){
        console.log(this.props.location.state.age)
        }
    render() {
        return (
         <div>
             <p>Age : {this.props.location.state.age}</p>
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
                player :'jesse'
               }
            }
            }>
            <Button>Jesse Pinkman</Button>
                    
            </Link>
            
           
           
            <Link to={{
               pathname :'/Game',
               state :
               {
                player :'hank'
               }
            }
            }>
            <Button>Hank Schrader</Button>

            </Link>



            <Link to={{
               pathname :'/Game',
               state :
               {
                player :'saul'
               }
            }
            }>
            <Button>Saul Goodman</Button>

            </Link>



            <Link to={{
               pathname :'/Game',
               state :
               {
                player :'gustavo'
               }
            }
            }>
     
            <Button>Gustavo Fring</Button>
            </Link>
         </div>
        );
    }
}
