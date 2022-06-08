import React, {Component} from 'react';
import button from "bootstrap/js/src/button";
import {Button} from "reactstrap";

class StateTutorial1 extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            isLoading: true,
            number: 0,
            date: [{name: 'Dovudhon'}, {name: 'Developer'}],
            role: {
                admin: true,
                isNew: false
            }
        }
    }

    clickNum = () => {
        this.setState({number: this.state.number + 1}, () => this.alertHandler())
        console.log('Clicked to +1')
    }

    alertHandler = () => {
        const {number}  = this.state;
        if (number === 5){
            alert("number is 5");
        }
    }

    clickDec = () => {
        console.log('Clicked to -1')
        this.setState({number: this.state.number - 1})
    }

    remove = () => {
        console.log('Clicked to 0')
        this.setState({number: this.state.number = 0})
    }

    render() {
        const number  = this.state.number

        return (
            <>
                <h1>Number: { number } </h1>
                <Button color='primary' onClick={this.clickNum}>Click</Button>
                <Button color='success' onClick={this.clickDec}>Dec</Button>
                <Button color='danger' onClick={this.remove}>Remove</Button>
            </>
        );
    }
}

export default StateTutorial1;