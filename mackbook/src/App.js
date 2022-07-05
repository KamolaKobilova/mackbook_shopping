import React from 'react';
import Body from './components/Body';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Alert, Navbar , Card, Form} from 'react-bootstrap';
import css from './components/style.css'


function App() {
  return (
    <div>
      <Navbar style={{backgroundColor: "#333333", height:"75px"}}>
        <li style={{color:"#ffff"}}>Store</li>
        <li>Mac</li>
        <li>iPad</li>
        <li>iPhone</li>
        <li>Watch</li>
        <li>AirPods</li>
        <li>Tv & Home</li>
        <li>Only on Apple</li>
        <li>Accessories</li>
        <li>Support</li>
       
        
       
      </Navbar>
      <Card.Title style={{height: "50px", textAlign: "center", fontSize: "40px"}}>Mackbook Air</Card.Title>
      <Card className="mb-3">
        <Card.Img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-midnight-config-20220606?wid=410&hei=249&fmt=jpeg&qlt=95&.v=1654122880566" style={{width: "400px", marginTop: "100px", marginLeft: "100px"}}/>
        <Card.Body>
          <Card.Text>
            This is an example 
          </Card.Text>
        </Card.Body>
      </Card>
      <Alert variant='success'>This is a Button</Alert>
      <Button>Send</Button>
      <Form>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control style={{width: "500px"}} type="email" placeholder='Example@mail.ru'/>
          <Form.Text className='text-muted'>
             We'll never share your email address, trust us!
          </Form.Text>
        </Form.Group>
      </Form>
      <Body/>
    </div>
  )
}

export default App
