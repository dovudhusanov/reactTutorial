import React, {Component} from 'react';

class Component2 extends Component {
    render() {
        return (
            <>
                {/* Props Tutorial Class Component */}
                <h1>My Profession is {this.props.profession}</h1>
            </>
        );
    }
}

export default Component2;