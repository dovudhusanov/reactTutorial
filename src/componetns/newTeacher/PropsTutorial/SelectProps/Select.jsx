import React from 'react';

function Select({options, deafaultValue}) {
  return ( 
    <select className="form-select w-auto">
        <option disabled value="">{deafaultValue}</option>
        {options.map(opt => (
          <options key={opt.value} value={opt.value}>
              {opt.name}
          </options>
        ))}
        <option value="Title">Sorted by Title</option>
        <option value="Job">Sorted by Job</option>
    </select>
   );
}

export default Select;