import React, {useEffect, useState} from 'react';

function ItemsList({getItems}) {

    const [items, setItems] = useState([])
    useEffect(() => {
        const newItem = getItems(1)
        setItems(newItem)
        console.log('useEffect rendering...')
    }, [getItems])
    return (
        <ul>
            {items.map(i => <li key={i} className='text-white'>{i}</li>)}
        </ul>
    );
}

export default ItemsList;