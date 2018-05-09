import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class ListItems extends Component {
    state = {
        listItems: []
    };
    componentDidMount() {
        this.loadListItems();
    }
    loadListItems = () => {
        API.getListItems()
            .then(res =>
                {
                    console.log('heres the response ', res)
                    this.setState({ listItems: res.data })
                    console.log(res.data);
                }
            )
            .catch(err => console.log(err));
    };

    generateListItems = () =>
    {  
        if (this.state.listItems.length > 0) {
          const mapped = this.state.listItems.map(item => (
                <tr>
                    <td>
                        {item.name}
                    </td>

                    <td>
                        {item.location}
                    </td>

                    <td>
                        {item.coordinates}
                    </td>

                    <td>
                        {item.price}
                    </td>
                </tr>
                )
    
        )
    return mapped
    }
        
    }

    render(){
        console.log(this.state)
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12 sm-12">
                        <Jumbotron>
                            <h1>Inventory On My List</h1>
                        </Jumbotron>
                            <table>
                                <tbody>
                                    {this.generateListItems()}
                                 </tbody>
                            </table>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ListItems;