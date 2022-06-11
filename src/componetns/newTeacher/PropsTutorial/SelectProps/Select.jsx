import React from 'react';

function Select({options, defaultValue, onChange, value}) {
  return (
    <select
        className="form-select w-auto"
        value={value}
        onChange={e => onChange(e.target.value)}
    >
        <option disabled value="">{defaultValue}</option>
        {options.map(opt => (
          <option key={opt.value} value={opt.value}>
             {opt.name}
          </option>
        ))}
        {/*<option value="Title">Sorted by Title</option>*/}
        {/*<option value="Job">Sorted by Job</option>*/}
    </select>
   );
}

export default Select;