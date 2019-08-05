import React from 'react'
import { Nav, List, ListItem, SearchContainer, SearchIcon, SearchBar, Title } from './styles/Navbar';

const NavBar = () => {
    return <Nav>
        <List>
            <ListItem>login</ListItem>
            <ListItem>register</ListItem>
        </List>
        <SearchContainer>
            <SearchIcon>
                search:
            </SearchIcon>
            <SearchBar />
        </SearchContainer>
        <Title>tech post</Title>
    </Nav>;
}

export default NavBar;