import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button} from 'react-bootstrap';
import BodyJS from './Body'

function Body() {
  return (
    <div className='divs'>
    <Button> 8GB unified memory <span className='first'></span></Button><br />
    <Button variant='danger'>16GB unified memory <span className='second'>+$200.00</span></Button><br />
    <Button variant='success'>24GB unified memory <span className='third'>+$200.00</span></Button><br />
    <Button><span className='total'>$1.499</span></Button>
    </div>
  )
}

export default Body

//
{/* <button style="height:45px; width: 400px" id="we" value="$2.900">8GB unified memory
<span 
  style="margin-left: 100px;" id="costs">
</span>
</button><br><br>
<button style="height:45px; width: 400px" id="word" value="$300" 
onclick="addNum()">16GB unified memory
<span id="span" style="margin-left: 100px">
+ $200.00
</span> </button><br><br>
<button style="height:45px; width: 400px" id="word" value="$300"
onclick="addmMore()">24GB unified memory
<span style="margin-left: 100px;" id="third">
<span id="fourth">$200.00</span> 
</span style="margin-left: 100px;"></button><br><br>
<button id="sum" style="width: 200px; height: 30px">$1,499</button>
//</br> */}