import { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../RTK/slices/ProductsSlice';
import { AddToCart } from '../RTK/slices/CartSlice';

function Products(){
    const products = useSelector((state)=>state.products);

    console.log(products);

    
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchProduct())
    },[])
    return(
        <>
        <Container>
            <Row>
            {products.map((prod)=>(
                <Col key={prod.id}>
                    <Card style={{ width: '18rem' , top:'80px' }}>
                    <Card.Img variant="top" style={{height:'300px'}} src={prod.image} />
                    <Card.Body>
                    <Card.Title>{prod.title}</Card.Title>
                    <Card.Text>
                    {prod.description}
                    </Card.Text>
                    <Card.Text>
                    {prod.price}
                    </Card.Text>
                    <Button variant="primary" onClick={()=>dispatch(AddToCart(prod))}>Go somewhere</Button>
                    </Card.Body>
                    </Card>
                </Col>
    ))}
                
            </Row>
        </Container>
        </>
    )
}export default Products;