import React, { Component } from "react";
import {Button, Card, CardText, CardTitle} from "reactstrap"

class MyApp extends Component{
    render() {
        return(
            <>
                <Card body>
                    <CardTitle tag="h5">
                        Special Title Treatment
                    </CardTitle>
                    <CardText>
                        With supporting text below as a natural lead-in to additional content.
                    </CardText>
                    <Button>
                        Go somewhere
                    </Button>
                </Card>
                <Card
                    body
                    className="text-center"
                >
                    <CardTitle tag="h5">
                        Special Title Treatment
                    </CardTitle>
                    <CardText>
                        With supporting text below as a natural lead-in to additional content.
                    </CardText>
                    <Button>
                        Go somewhere
                    </Button>
                </Card>
                <Card
                    body
                    className="text-right"
                >
                    <CardTitle tag="h5">
                        Special Title Treatment
                    </CardTitle>
                    <CardText>
                        With supporting text below as a natural lead-in to additional content.
                    </CardText>
                    <Button>
                        Go somewhere
                    </Button>
                </Card>
            </>
        )
    }
}

export default MyApp