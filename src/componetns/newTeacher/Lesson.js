import React, { useState } from 'react';

const [count, setCount] = useState;

function Lesson() {

  return ( 
      <>
        <h3>Count : {count}</h3>
        <button className='btn' onClick={() => setCount(count + 1)}>Incr</button>
        <button className='btn' onClick={() => setCount(count - 1)}>Decr</button>
      </>
   );
}

export default Lesson;