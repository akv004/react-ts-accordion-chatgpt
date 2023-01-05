import React, { useState } from 'react';

 export const Accordion = (props) =>  {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  }

  const panels = props.items.map((item, index) => {
    const isActive = index === activeIndex;
    return (
      <div key={item.title}>
        <button onClick={() => handleClick(index)}>
          {item.title}
        </button>
        {isActive && <div>{item.content}</div>}
      </div>
    );
  });

  return (
    <div>
      {panels}
    </div>
  );
}
