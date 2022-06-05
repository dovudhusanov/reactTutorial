import React from 'react';
import '../../style/style.css';
import BtnIncrDecr from "./BtnIncrDecr/BtnIncrDecr";
import IfElse from "./IfElse/IfElse";
import ValueUseState from "./ValueUseState/ValueUseState";

function Lesson() {
    // let company = prompt(`how old are you ??`);
    // let message = (company < 3) ? "hi baby ;)" : (company < 18) ? "hi man ;)" : (company < 100) ? "Greetings ;)" : "what's unusual number";
    // alert(message);
  return ( 
      <>
          <div className='app w-50 mx-auto'>
              <BtnIncrDecr />
              <br/><br/>
              <IfElse />
              <ValueUseState />
          </div>
      </>
   );
}

export default Lesson;