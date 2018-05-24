import React, { Component } from "react";
import { withRouter } from 'react-router';
import { Redirect } from 'react-router-dom'
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

   /*  state = {
        redirect: false
    } */

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
        let items = [];
        let itemObj = [];
        if (this.state === null) {
            /* items = [];
            itemObj = []; */
            items = list.items.split(',');
            console.log("map state is null ", items)
            /* items.map(item => {
                API.getItem(item)
                    .then(res => {
                        if (res.data) {
                            itemObj.push(res.data);
                            console.log("return from item", itemObj)
                        }
                    })
                    .catch(err => console.log(err));
            }); */
        }
        else {
            /* items = [];
            itemObj = []; */
            items = this.state.items.split(',');
            console.log("map state is not  null ", items)
           /*  items.map(item => {
                API.getItem(item)
                    .then(res => {
                        if (res.data) {
                            itemObj.push(res.data);
                            console.log("return from item", itemObj)
                        }
                    })
                    .catch(err => console.log(err));
            }); */
        }
        items.map(item => {
            API.getItem(item)
                .then(res => {
                    if (res.data) {
                        itemObj.push(res.data);
                    }
                })
                .catch(err => console.log(err));
        });
        console.log("return from item", itemObj);
        this.props.history.push({
            pathname: '/home',
            state: { detail: itemObj }
        })
        /* this.setState({
            redirect: true
        }) */
    }

/*     renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/login' />
        }
    } */
            
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
                                {/*<textarea name="items" onChange={this.handleChange}>
                                    {selectedList.items}
                                </textarea>*/}

                                <List>
                                    {selectedList.items}
                                </List>

                                {/*<UpdateBtn onClick={() => this.updateList(selectedList)} />*/}
                                {/* {this.renderRedirect()} */}
                                {/*<FormBtn onClick= {() => this.handleFormSubmit(selectedList)}> Map List </FormBtn>*/}
                            </CardBody>
                        </Card>
                    </Collapse>
                </ListItem>
            </List>
        );
    }
}

export default  withRouter(ListChild);
