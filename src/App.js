import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavigationBar from './Components/NavigationBar/NavigationBar'
import HomePage from './Components/HomePage/HomePage'
import About from './Components/About/About'
import FormulairePlayer from './Components/FormulairePlayer/FormulairePlayer'
import ChooseGamePlayerComponent from './Components/ChooseGamePlayerComponent/ChooseGamePlayerComponent'
import PartieComponent from './Components/PartieComponent/PartieComponent'
class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
        <NavigationBar/>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={About} />
          <Route path="/formulaire" component={FormulairePlayer}/>
          <Route path="/StartGame" component={ChooseGamePlayerComponent}/>
          <Route path ="/Game" component={PartieComponent}/>
        </div>
      </Router>
    );
  }
}
export default App;
