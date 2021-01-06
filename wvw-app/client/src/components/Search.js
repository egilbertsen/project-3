import { Component } from 'react';
import { Container, Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap';


export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: ""
        }

        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }
  
    handleOnChange(event) {
        let winery = event.target.value;
        this.setState({ searchText: winery });
    }

    handleSearch() {
        this.props.handleClick(this.state.searchText)
    }
    render() {
        return (
            <Container>
                <Row className="justify-content-md-center">
                    <Col lg={4}>
                        <InputGroup className="mb-3">
                            <FormControl id="searchWinery"
                                placeholder="winery name..."
                                aria-label="winery name"
                                aria-describedby="basic-addon2"
                                onChange={e => this.handleOnChange(e)}
                            />
                            <InputGroup.Append>
                                <Button variant="outline-secondary" onClick={this.handleSearch}>Search</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Col>
                </Row>
            </Container>

        )
    }
}