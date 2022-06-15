import {Navbar, Container, Nav, Button} from "react-bootstrap"

const NavigationBar = () => {
    return (
        <div>
            <Navbar variant="dark">
                <Container>
                        <Navbar.Brand className="mt-2" href="/">DANDIMOVIES</Navbar.Brand>
                        <div className="mt-2">
                        <Nav>
                            <Nav.Link href="#favorite">FAVORITE</Nav.Link>
                            <Nav.Link href="#film">BEST</Nav.Link>
                            <Button type="button" className="btn btn-danger mx-2" >SUBSCRIBE</Button>
                        </Nav>
                        </div>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBar