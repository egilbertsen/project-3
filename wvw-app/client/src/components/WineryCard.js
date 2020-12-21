import React from "react";
import { Card } from "react-bootstrap";

const WineryCard = props => {
    return (
        <span>
            <Card style={{width: '18rem'}}>
                <Card.Body>
                    <Card.Title> 
                        {props.name}
                    </Card.Title>
                    <Card.Text>
                        <ul>
                            <li> Address: {props.address} </li>
                            <li> Email: {props.email} </li>
                            <li> Website: {props.website} </li>
                            <li> Notes: {props.notes}</li>
                        </ul>
                    </Card.Text>
                </Card.Body>
            </Card>
        </span>    
    )
}

export default WineryCard;