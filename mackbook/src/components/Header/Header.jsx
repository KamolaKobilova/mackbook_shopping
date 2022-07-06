import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Routes, Route, NavLink, BrowserRouter} from "react-router-dom"
import { Navbar, Card } from 'react-bootstrap';
import css from "../style.css"
import IPhone from '../IPhone/IPhone';

function Header() {
  return (
    <div>
      <Navbar style={{backgroundColor: "#333333", height:"75px"}}>
        <li style={{color:"#ffff"}}>Store</li>
        <li>Mac</li>
        <li>iPad</li>
        <li><NavLink to="/IPhone">iPhone</NavLink></li>
        <li>Watch</li>
        <li>AirPods</li>
        <li>Tv & Home</li>
        <li>Only on Apple</li>
        <li>Accessories</li>
        <li>Support</li>
      </Navbar>

        <Card.Img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-midnight-config-20220606?wid=410&hei=249&fmt=jpeg&qlt=95&.v=1654122880566" style={{width: "400px", marginTop: "100px", marginLeft: "100px"}}/>
        
   
        <Routes>
           <Route path='/iphone'  element={<IPhone/>}/>
        </Routes>
    
        







      {/* <Alert variant='success'>This is a Button</Alert>
      <Button>Send</Button>
      <Form>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control style={{width: "500px"}} type="email" placeholder='Example@mail.ru'/>
          <Form.Text className='text-muted'>
             We'll never share your email address, trust us!
          </Form.Text>
        </Form.Group>
      </Form> */}
      {/* <Body/> */}
    </div>
  )
}

export default Header