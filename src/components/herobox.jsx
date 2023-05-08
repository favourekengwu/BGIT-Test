import React, {Component} from "react";

class HeroBox extends Component {
    constructor(props){
        super(props);
        this.state ={
          prodsInCart: 2,
        };
    }
    // state is an object that stores data/value that changes 
    // setState is a built in function used to change the oginal state value
    // to call function this.state.objectName is used
    // this in Javascript refers back to the root object 
    // increase = () => {
    //     this.setState({prodsInCart:22});
    // };

    specificNum = () => {
        this.setState({prodsInCart: 34});
    }
    
    increaseByOne = () => {
        this.setState({prodsInCart: this.state.prodsInCart + 1});
    };

    decreaseByOne = () => {
        this.setState({prodsInCart: this.state.prodsInCart - 1});
    };

    increaseByFour = () => {
        this.setState({prodsInCart: this.state.prodsInCart + 4});
    };

    render(){
        return( 
            <div className="container"> 
            <button onClick={this.decreaseByOne}>-</button> {this.state.prodsInCart} <button onClick={this.increaseByOne}>+</button>
            <div>
                <button onClick={this.increaseByFour}>Change state</button>
            </div>
            </div>
        );
    }
}

// state is used to store data that can be changed
export default HeroBox;


