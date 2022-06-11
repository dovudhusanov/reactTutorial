import React from 'react';
import Input from './Input/Input';
import Select from './SelectProps/Select';

function SearchAndFilter({filter, setFilter}) {
  return ( 
    <>
    <div className="d-flex justify-content-between my-2">
        <Input 
            className="form-control"
            placeholder='Search...'
            value={filter.query}
            onChange={e => setFilter({...filter, query: e.target.value})}
        />
        <Select
            value={filter.sort}
            onChange={selected => setFilter({...filter, sort: selected})}
            defaultValue="Sorted by"
            options={[
                { value: "title", name: "Programming" },
                { value: "stack", name: "Stack" }
            ]}
        />                    
    </div>
    </>
   );
}

export default SearchAndFilter;