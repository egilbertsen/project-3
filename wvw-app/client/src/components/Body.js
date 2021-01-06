import React, { Component } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Search from './Search';
import WineryCard from "../components/WineryCard"
import API from "../utils/api";
import { LoginContext } from './LoginContext';


class Body extends Component {

    static contextType = LoginContext;

    constructor(props) {
        super(props);
        this.state = {
            wineries: [],
            filteredWineries: []
        };


        this.searchWinery = this.searchWinery.bind(this);
        this.loadWineries = this.loadWineries.bind(this);
    }

    componentDidMount = () => {
        this.loadWineries();
    }

    searchWinery(winery) {
        let searchResult = this.state.wineries.filter(currentWinery => {
            return currentWinery.name.toUpperCase().includes(winery.toUpperCase());
        });
        this.setState({ filteredWineries: searchResult });
    }

    loadWineries() {
        API.loadWineries().then(res => {
            this.setState({
                wineries: res.data
            })
        }).catch(err => console.log(err))
    }

    handleSave = wineryData => {
        console.log(wineryData);
        const { isLoggedIn, userID } = this.context
        API.loadUsersList(userID).then(res => {
            console.log("UserList", res)
            if (!res.data) {
                API.firstPostRoute(wineryData).then(res => {
                    console.log("1st Winery Data Added: " + wineryData)
                })
            } else {
                let currentList = res.data
                currentList.push(wineryData);
                API.listUpdate(currentList).then(res => {
                    console.log("Additional Winery Data Added: " + wineryData)
                })
            }
        })
    }

    render() {
        return (
            <main>
                <Search handleClick={this.searchWinery} />
                <Container fluid className="main-content">
                    <Row className="d-flex">
                        <Col lg={3} className="left-column">
                            <div>
                                {this.state.filteredWineries.length ? (
                                    <div>
                                        {this.state.filteredWineries.map(winery => (
                                            <WineryCard
                                                key={winery.id}
                                                name={winery.name}
                                                address={winery.address}
                                                email={winery.email}
                                                website={winery.website}
                                                notes={winery.notes}
                                                handleSave={() => this.handleSave(winery.id)}
                                            />))}
                                    </div>
                                ) : <div>
                                        {this.state.wineries.map(winery => (
                                            <WineryCard
                                                key={winery.id}
                                                name={winery.name}
                                                address={winery.address}
                                                email={winery.email}
                                                website={winery.website}
                                                notes={winery.notes}
                                                handleSave={() => this.handleSave(winery.id)}
                                            />))}
                                    </div>}
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