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

//useState with objects

import React, {useState} from 'react'
function useStateforobject(){
    const [name, setName] = useState({firstname:'',lastname:''})
    return(
        <div>
        <form>
        <input 
         type="text"
         value={name,firstname}
             onChange={e => setName({...name, firstname: e.target.value})}
            />

<input 
         type="text"
         value={name,lastname}
             onChange={e => setName({...name, lastname: e.target.value})}
            />

            <h2>Your first name is .(name.firstname)</h2>
            <h2>Your first name is .(name.lastname)</h2>
            
            </form>
            </div>
            export default form; 

    