import React from 'react';

const Buttons = React.memo(({ onAdd, onDelete }) => {
  console.log('Buttons component rendered');
  return (
    <>
      <button onClick={onAdd}>Add +</button>
      <button onClick={onDelete}>Delete -</button> 
    </>
  )
});

export default Buttons;