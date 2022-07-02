import React from 'react';

function MainUseContext({toggle}) {
    return (
      <>
          <h1>Hello from Context</h1>
          <button
              className='btn btn-success'
              onClick={toggle}
          >Show Alert</button>
      </>
    );
}

export default MainUseContext;