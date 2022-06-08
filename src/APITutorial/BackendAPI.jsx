import React, {Component} from 'react';
import {Card, CardBody, CardHeader, Col, Container, Row} from "reactstrap";
// import data from "bootstrap/js/src/dom/data";
import axios, {Axios} from "axios";

class BackendAPI extends Component {
    state = {
        // user: []
        post: []
    }

    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/photos')
    //         .then((response) => response.json())
    //         .then(data => {
    //             console.log(data)
    //             this.setState({user: data});
    //         })
    // }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                const post = res.data
                console.log(res)
                this.setState({post})
            })
    }

    render() {
        return (
            <>
                {/*<Container>*/}
                {/*    <Row>*/}
                {/*        {this.state.user.map((users) => (*/}
                {/*            <Col md="4">*/}
                {/*                <Card key={users.id}>*/}
                {/*                    <CardHeader>*/}
                {/*                        <img src={users.thumbnailUrl} alt=""/>*/}
                {/*                        <h2>{users.id}</h2>*/}
                {/*                    </CardHeader>*/}
                {/*                    <CardBody>*/}
                {/*                        <h4 className='success'>*/}
                {/*                            Title: {users.title}*/}
                {/*                        </h4>*/}
                {/*                    </CardBody>*/}
                {/*                </Card>*/}
                {/*            </Col>*/}
                {/*        ))}*/}
                {/*    </Row>*/}

                <Container>
                    <Row>
                        {this.state.post.map((posts) => (
                            <Col md="4">
                                <Card key={posts.id}>
                                    <CardHeader>
                                        <h2>{posts.title}</h2>
                                    </CardHeader>
                                    <CardBody>
                                        <h4>{posts.body}</h4>
                                    </CardBody>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </>
        );
    }
}

export default BackendAPI;