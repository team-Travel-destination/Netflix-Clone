import { Navbar, Nav, Container } from 'react-bootstrap';


export default function NavBar() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Netflix</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="favlist">FavList</Nav.Link>
                </Nav>
            </Container>
        </Navbar>

    )
}
