import React, { Component } from "react";
import ReactTooltip from 'react-tooltip'
import { Card, Button } from "react-bootstrap";
import { LoginContext } from './LoginContext';

export default class WineryCard extends Component {
    static contextType = LoginContext;

    constructor(props) {
        super(props);
    }

    render() {
        const { isLoggedIn, userID } = this.context;
        let cardButton;
        if (isLoggedIn) {
            cardButton = <div className = "addButtonContainer">
                <Button className = "addButton" data-tip = "Save Winery to Favorites" onClick = {this.props.handleSave}> + </Button>
                <ReactTooltip effect="solid" place ="bottom" />
            </div>
        } else {
            cardButton = <div className = "addButtonContainer">
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
                    {/* <Card.Text> */}
                        <ul>
                            <li> Address: {this.props.address} </li>
                            <li> Email: {this.props.email} </li>
                            <li> Website: {this.props.website} </li>
                            <li> Notes: {this.props.notes}</li>
                        </ul>
                    {/* </Card.Text> */}
                    {cardButton}
                </Card.Body>
            </Card>
        </span>
        )
    }
}

// export default WineryCard;