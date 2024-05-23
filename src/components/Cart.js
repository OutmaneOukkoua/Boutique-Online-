import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { Clear, RemoveFromCart } from '../RTK/slices/CartSlice';


function Cart (){
    const cart = useSelector(state=>state.carts);
    const dispatch = useDispatch();
    const totalPrice = cart.reduce((acc,product)=>{
        return acc += product.price * product.quantity
    },0)
    return(
        <>
        <Container>
        <div className='py-5'></div>
        <center><h3>Total Price : {totalPrice.toFixed(2)}</h3></center>
        <Button variant="warning" className="mb-3" onClick={()=>dispatch(Clear())}>Clear All Products</Button>
        <Row>
            {cart.map((prod)=>(
                <Col key={prod.id}>
                <Card style={{ width: '18rem' }}>
                <Card.Title>
                    <center>Quantity : {prod.quantity} </center>
                    </Card.Title><br></br>
                <Card.Img variant="top" src={prod.image} />
                    <Card.Body>
                    <Card.Title>{prod.title}</Card.Title>
                    <Card.Text>
                        {prod.description}
                    </Card.Text>
                    <Card.Text>
                        {prod.price}
                    </Card.Text>
                    
                    <Button variant="danger" onClick={()=>dispatch(RemoveFromCart(prod))}>Delete</Button>
                    </Card.Body>
                    </Card>
                </Col>
    ))}
                
            </Row>
        </Container>
        </>
    )
}export default Cart;