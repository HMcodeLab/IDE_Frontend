// SkeletonSpinner.js
import React from 'react';
import './spinner.css'; // Create a separate CSS file for styling

const SkeletonSpinner = () => {
  return (
    <div className="skeleton-spinner">
      <div className="spinner"></div>
    </div>
  );
};

export default SkeletonSpinner;
