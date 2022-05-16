import { Navbar, Nav, Container } from 'react-bootstrap';

export default function NavBar() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Netflix</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Movies</Nav.Link>
                    <Nav.Link href="#pricing">Fav Movies</Nav.Link>
                </Nav>
            </Container>
        </Navbar>

    )
}
