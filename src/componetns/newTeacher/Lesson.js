import React, { useState } from 'react';
import Style from '../../style/style.css'

function Lesson() {
    // let company = prompt(`how old are you ??`);
    // let message = (company < 3) ? "hi baby ;)" : (company < 18) ? "hi man ;)" : (company < 100) ? "Greetings ;)" : "what's unusual number";
    // alert(message);
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false)
  const [value, setValue] = useState('dev')

  return ( 
      <>
          <div className='app w-50 mx-auto'>
            <h3>Count : {count}</h3>
              <button className='btn btn-success' onClick={() => setCount(count + 1)}>Incr</button>
              <button className='btn btn-danger' onClick={() => setCount(count - 1)}>Decr</button>
<<<<<<< HEAD
              <button className='btn btn-primary' onClick={() => setCount(0)}>cls</button>
              <br/><br/>
              <button className='btn btn-secondary' onClick={() => setToggle(!toggle)}>Toggle Btn</button>
                <hr/>

              <p>Value: {value}</p>
              <input
                  type="text"
                  className='form-control'
                  onChange={event => console.log(event)}
              />

              {toggle
                ? <p className="lead">
                    Youtube Content
                  </p>
                : null
              }
=======
              <button className='btn btn-primary' onClick={() => setCount(0)}>remove</button>
>>>>>>> c923337c1fbedc72f193129731720017477c44df
          </div>
      </>
   );
}

export default Lesson;