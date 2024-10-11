import React from 'react';

const StatProgressBar = ({ img, value, variant, width, height, heightbar, fontSize }) => {
  // Map variant to Tailwind color classes
  const variantColors = {
    primary: 'bg-blue-500',
    secondary: 'bg-gray-500',
    success: 'bg-green-500',
    danger: 'bg-red-500',
    warning: 'bg-yellow-500',
    info: 'bg-cyan-500',
  };

  const barColor = variantColors[variant] || 'bg-blue-500';

  return (
    <div className="mb-4">
      <div className="flex items-center mb-2">
        <img 
          src={img} 
          alt="Stat icon" 
          className="mr-2"
          style={{ width: `${width}px`, height: `${height}px` }}
        />
        <span style={{ fontSize: `${fontSize}px` }}>{value}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full overflow-hidden" style={{ height: `${heightbar}px` }}>
        <div 
          className={`${barColor} transition-all duration-500 ease-out`} 
          style={{ width: `${value}%`, height: '100%' }}
        ></div>
      </div>
    </div>
  );
};

export default StatProgressBar;