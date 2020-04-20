import React from 'react';

export default class ChooseGamePlayerComponent extends React.Component {
   
    componentDidMount(){
        console.log(this.props.location.state)
        }
    render() {
        return (
         <div>
            <p>Age:{this.props.location.state.age}</p> 
         </div>
        );
    }
}
