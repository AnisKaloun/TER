import React from 'react';
import { Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class HomePage extends React.Component {
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
                <h2 style= {{
                    "margin-bottom": "25px"
                }}>Breaking Bad Scenario Game</h2>
                <p style= {{
                    "margin-bottom": "15px"
                }}>Bienvenue sur notre site. L'objectif de ce jeu est simple : vous choisissez un personnage parmi ceux proposés et vous avancez dans le scénario
                    du personnage en question en faisant des choix parmi des propositions qui vous seront présentées, propositions qui débouchent sur des résultats 
                    différents faisant ainsi varier l'histoire.
                </p>

                <p style= {{
                    "margin-bottom": "25px"
                }}>Il est également important de savoir que nous avons pour objectif de récolter vos résultats à chacunes des fins de parties, résultats qui seront 
                stockés dans notre base de données afin de les analyser ce qui nous permettra d'identifier les choix les plus courants réalisés par les joueurs.
                </p>
                <Link to="/formulaire">
                <Button variant="success">Lancer une partie</Button>
                </Link>
            </div>  
        );
    }
}
