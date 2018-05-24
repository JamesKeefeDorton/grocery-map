import React, { Component } from "react";
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import DeleteBtn from "../../components/DeleteBtn";
import UpdateBtn from "../../components/UpdateBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import ListChild from "./NewListChild";
class Lists extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
    }

    state = {
        list: [],
        name: "",
        items: ""
    };

    componentDidMount() {
        this.loadList();
    }

    deleteList = id => {
        API.deleteList(id)
            .then(res => this.loadList())
            .catch(err => console.log(err));
    };

    loadList = () => {
        API.getLists()
            .then(res =>
                this.setState({ list: res.data, name: "", items: "" })
            )
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.name) {
            console.log("call api handle submit ",this.state);
            API.saveList({
                name: this.state.name,
                items: this.state.items
            })
                .then(res => this.loadList())
                .catch(err => console.log(err));
        }
    };

    toggle = list => {
        console.log("from parent ", list);
        /* this.setState({ collapse: !this.state.collapse }); */
        console.log(this.state.collapse);
        this.setState({ collapse: this.state.collapse === list ? null : list });
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    {/*<Col size="md-6">
                        <Jumbotron>
                            <h1>Want To Add A New List</h1>
                        </Jumbotron>
                        <form>
                            <Input
                                value={this.state.name}
                                onChange={this.handleInputChange}
                                name="name"
                                placeholder="Name (required)"
                            />
                            <TextArea
                                value={this.state.items}
                                onChange={this.handleInputChange}
                                name="items"
                                placeholder="Items (required)"
                            />
                            <FormBtn
                                disabled={!(this.state.name)}
                                onClick={this.handleFormSubmit}
                            >
                                Submit List
              </FormBtn>
                        </form>
                    </Col>*/}
                    <Col size="md-12 sm-12">
                        <Jumbotron>
                            <h1>Items On My List</h1>
                        </Jumbotron>
                        {this.state.list.length ? (
                            <List>
                                {this.state.list.map((selectedList, index) => (
                                    <ListItem key={selectedList._id}>
                                        <ListChild {...this.props}
                                            cat={this.state.list[index]}
                                            selectedList={selectedList}
                                            key={index}
                                            toggle={this.toggle}
                                            isOpen={this.state.collapse === this.state.list[index]}
                                        />
                                        <DeleteBtn onClick={() => this.deleteList(selectedList._id)} />
                                    </ListItem>
                                ))}
                            </List>
                        ) : (
                                <h3>No Results to Display</h3>
                            )}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Lists;
