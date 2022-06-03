import React, { useState } from 'react';

function Lesson() {

  const [count, setCount] = useState(0);

  return ( 
      <>
        <h3>Count : {count}</h3>
        <h1>Alxamdulillax</h1>
        <p>Zooor</p>
          <p>salom</p>
        <button className='btn btn-success' onClick={() => setCount(count + 1)}>Incr</button>
        <button className='btn btn-danger' onClick={() => setCount(count - 1)}>Decr</button>
        <button className='btn btn-primary' onClick={() => setCount(0)}>cls</button>
      </>
   );
}

export default Lesson;