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

class ListChild extends Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);

        this.handleChange = this.handleChange.bind(this);
    }


    toggle = () => {
        console.log("from child ", this.props.cat);
        this.props.toggle(this.props.cat);
    }

    updateList = (list) => {
        if(this.state === null)
        {   
            this.state = { "items": list.items }
            console.log("state is null ", this.state)
            API.updateList(list._id, this.state)
                .then(res => console.log("this works"))
                .catch(err => console.log(err));
        }
        else{
            console.log("the list ",list);
            console.log("child ", this.state)
            API.updateList(list._id, this.state)
                .then(res => console.log("this works"))
                .catch(err => console.log(err));
        }
    }

    handleChange(e) {
        /* this.setState({ synopsis: event.target.value }); */
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleFormSubmit = (list) => {
        if (this.state === null) {
            var items = list.items.split(',');
            console.log("map state is null ", items[0])
            API.getItem(items[0])
                .then(res => console.log("return from item", res.data))
                .catch(err => console.log(err));
        }
        else {
            var items = this.state.items.split(',');
            console.log("map state is not  null ", items[0])
            API.getItem(items[0])
                .then(res => console.log("return from item", res.data))
                .catch(err => console.log(err));
        }
    }

    render() {
        const { selectedList } = this.props;
        return (
            <List>
                <ListItem key={selectedList._id}>
                    <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>{`${selectedList.name}`}</Button>
                    {/* <Collapse isOpen={this.state.collapse}> */}
                    <Collapse isOpen={this.props.isOpen}>
                        <Card>
                            <CardBody>
                                <textarea name="items" onChange={this.handleChange}>
                                    {selectedList.items}
                                </textarea>
                                <UpdateBtn onClick={() => this.updateList(selectedList)} />
                                <FormBtn onClick= {() => this.handleFormSubmit(selectedList)}> Map List </FormBtn>
                            </CardBody>
                        </Card>
                    </Collapse>
                </ListItem>
            </List>
        );
    }
}

export default ListChild;
