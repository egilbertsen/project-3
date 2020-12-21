import React, { Component } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Search from './Search';
import WineryCard from "../components/WineryCard"
import API from "../utils/api";

class Body extends Component {
    state = {
        wineries: [],
        username: "",
        userId: ""
    };

    componentDidMount = () => {
        this.loadWineries();
        this.checkUserStatus();
    }

    loadWineries = () => {
        API.loadWineries().then(res => {
            this.setState({
                wineries: res.data
            })
        }).catch(err => console.log(err))
    }

    checkUserStatus = () => {
        API.checkUserStatus().then(res => {
            this.setState({
                username: res.data.email,
                userId: res.data.id
            })

            console.log(this.state.userId)
        })
    }

    render() {
        return (
            <main>
                <Search />
                <Container fluid className="main-content">
                    <Row className="d-flex">
                        <Col lg={3} className="left-column">
                            <div>
                                {this.state.wineries.map(winery => (
                                    <WineryCard
                                        key={winery.id}
                                        name={winery.name}
                                        address={winery.address}
                                        email={winery.email}
                                        website={winery.website}
                                        notes={winery.notes}
                                    />
                                ))}
                            </div>
                        </Col>
                        <Col lg={9} className="right-column">
                            right column
                    </Col>
                    </Row>
                </Container>

            </main>
        )
    }
}

export default Body;