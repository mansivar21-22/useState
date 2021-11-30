//usestate with variable
import React, {useState} from 'react'
function Count()
const[count,setCount] = useState(0)
function increaseCount(){
    setCount(count+1)
}
return(
    <div>
        <p>Count: (count)</p>
<button onClick={increaseCount}>Click</button>
</div>
);



export default App;