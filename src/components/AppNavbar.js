import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function AppNavbar(){
    const cart = useSelector(state => state.carts);
    return (<>
        <Navbar fixed='top' expand="lg" className="bg-body-tertiary">
        <Container>
          <Link to={'/'} className='navbar-brand'>Cart App</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to={'/'} className='navbar-brand'>Products</Link>
              <Link to={'/Cart'} className='navbar-brand'>Carts - {cart.length}</Link>
                          
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>)
}
export default AppNavbar;