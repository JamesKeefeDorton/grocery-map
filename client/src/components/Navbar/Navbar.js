import React from "react";
import {Navbar, Nav, NavItem, NavLink, Container} from "reactstrap";

const Navigator = () => {
		return (
      <Container>
        <Navbar>
      		<Nav>
      			<NavItem>
      				<NavLink href="/">Home</NavLink>
      			</NavItem>
      			<NavItem>
      				<NavLink href="/about">About</NavLink>
      			</NavItem>
          </Nav>
          <Nav className="justify-content-end">
      			<NavItem>
      				<NavLink href="/signup">Sign Up</NavLink>
      			</NavItem>
      			<NavItem>
      				<NavLink href="/login">Login</NavLink>
      			</NavItem>
      		</Nav>
        </Navbar>
      </Container>
  	);
}

export default Navigator;