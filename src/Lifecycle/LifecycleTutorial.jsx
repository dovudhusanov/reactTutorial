// import React, {Component} from 'react';
// import {Button} from "reactstrap";
//
// class LifecycleTutorial extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {user: {name: '', img: ''}, num: 0}
//
//         console.log("[Constructor] is ...")
//     }
//
//     componentDidMount() {
//         console.log("[componentDidMount] is ...");
//         this.setState({user: {name: "Dovudhon", img: "na"}});
//     }
//
//     updateNumber = () => {
//         this.setState(oldState => {
//             return {
//                 num: oldState.num + 1
//             }
//         })
//     }
//
//     render() {
//         console.log("[Render] is ...")
//         const {num} = this.state
//         return (
//             <>
//                 <h1>Hello World {num} </h1>
//                 <Button color='success' onClick={this.updateNumber} >Click</Button>
//             </>
//         );
//     }
// }

import React, {Component} from 'react';

class LifecycleTutorial extends Component {

    constructor(props) {
        super(props);
        console.log("Constructor is working...")
        this.state = {favouriteColor: "red"};
    }

    componentDidMount() {
        console.log("Mounting is working...")
        setTimeout(() => {
            this.setState({favouriteColor: "yellow"})
        }, 1000)
    }

    render() {
        console.log("Render is working...")
        return (
            <div>
                <h1>My favourite Color is {this.state.favouriteColor}</h1>
            </div>
        );
    }
}

export default LifecycleTutorial;
