import React, { useState } from 'react';
import './Container';

const Container = ({ title, children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="container">
      <div className="title" onClick={toggleCollapse}>
        {title}
      </div>
      {!collapsed && (
        <div className="content">
          {children}
        </div>
      )}
    </div>
  );
};

export default Container;
