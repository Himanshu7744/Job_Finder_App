import React from 'react'

const CustomButton = ({ title, containerStyles, iconRight,
  type, onClick }) => {
  return (<button
    onClick={onClick}
    type={type || "button"}
    className={`inline-flex item-center ${containerStyles}` }
  >
    {title}

    {iconRight && <div className='ml-2'> {iconRight}
    </div>}
  </button>
  );
};

export default CustomButton
