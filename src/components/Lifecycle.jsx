import React, {Component} from "react";

export default class Lifecycle extends Component {
    constructor(props){
        super(props)
        this.state ={
            showModal:false,
            name:"User(Default)",
            adminLoggIn: false,
            number:20,
        }
    } 
   
    componentDidMount() {
        // actions occurs when the component is mounted 
        // alert("component is mouted");
        // ! means not 

        this.setState({showModal:true})
    }

    componentDidUpdate(){
        // alert("Component is being updated ");
    }
        // triggers when ever there is an update on your website
        updateName = () => {
            this.setState({name: "Favour"});
        };
    componentWillUnmount(){
        // is triggered when a componemt is about to be deleted or removed
    }

    // conditional rendering, conditions are checked before the page/component is shown(rendered)
    
    render(){
       return (
        <div>
            Lifecycle
            <div className={`custom_modal shadow-lg ${!this.state.showModal && "d-none" }`}>
            Show when the page is mounted
            {/* <p>Change your name to remove modal</p> */}
            <div>{this.state.name}</div>
            <button onClick={this.updateName}>Change Name</button>
            </div>
            {this.state.adminLoggIn ? <Admin/> : <User/>}
                <button onClick={() => this.setState({adminLoggIn: true})}>Change to Admin</button>
        </div>
       )
    }
}


// state is used to store data that can be changed

class User extends Component {
     componentWillUnmount(){
        // is triggered when a componemt is about to be deleted or removed
    // alert("I am being removed");
    }

    // conditional rendering, conditions are checked before the page/component is shown(rendered)
    render(){
        return <div className="user">Hello User</div>;
    }
}

class Admin extends Component {
    // conditional rendering, conditions are checked before the page/component is shown(rendered)
    
    render(){
        return <div className="admin">I have Admin Rights</div>;
    }
}

