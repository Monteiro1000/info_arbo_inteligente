import React from 'react';

export default function Toast({ message, isVisible }) {
  return (
    <div
      id="blogToast"
      className={`blog-toast${isVisible ? ' show' : ''}`}
      role="status"
      aria-live="polite"
    >
      {message}
    </div>
  );
}
