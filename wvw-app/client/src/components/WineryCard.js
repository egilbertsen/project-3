import React, { Component } from "react";
import ReactTooltip from 'react-tooltip'
import { Card, Button } from "react-bootstrap";


class WineryCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { isLoggedIn, userID } = this.context;
        let cardButton;
        if (isLoggedIn) {
            cardButton = <div>
                <Button className = "addButton" data-tip = "Save Winery to Favorites" id = {userID}> + </Button>
                <Button  className = "muted addButton"> + </Button>
                <ReactTooltip effect="solid" place ="bottom" />
            </div>
        } else {
            cardButton = <div >
                <Button data-tip = "Sign in to Save Winery" className = "muted addButton"> + </Button>
                <ReactTooltip effect="solid" place ="bottom" />
            </div>
        }

        return (
            <span>
            <Card style={{width: '18rem'}}>
                <Card.Body>
                    <Card.Title> 
                        {this.props.name}
                    </Card.Title>
                    <Card.Text>
                        <ul>
                            <li> Address: {this.props.address} </li>
                            <li> Email: {this.props.email} </li>
                            <li> Website: {this.props.website} </li>
                            <li> Notes: {this.props.notes}</li>
                        </ul>
                    </Card.Text>
                    {cardButton}
                </Card.Body>
            </Card>
        </span>
        )
    }
}

export default WineryCard;