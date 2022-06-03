import React, { useState } from 'react';

function Lesson() {

  const [count, setCount] = useState(0);

  return ( 
      <>
          <div className='app w-50 mx-auto'>
            <h3>Count : {count}</h3>
            <lata>Abdulbosit lata</lata>
              <button className='btn btn-success' onClick={() => setCount(count + 1)}>Incr</button>
              <button className='btn btn-danger' onClick={() => setCount(count - 1)}>Decr</button>
              <button className='btn btn-primary' onClick={() => setCount(0)}>cls</button>
          </div>
      </>
   );
}

export default Lesson;