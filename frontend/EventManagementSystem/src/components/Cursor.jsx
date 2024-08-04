import React, { useEffect } from 'react';
import './Cursor.css'; // Ensure you have the necessary CSS

const Cursor = () => {
  useEffect(() => {
    const cursor = document.querySelector('.cursor');

    const animateCursor = (e) => {
      const { clientX: x, clientY: y } = e;
      cursor.style.left = `${x}px`;
      cursor.style.top = `${y}px`;
    };

    const scaleCursor = (e) => {
      if (
        e.target.matches('button, a, .nav-button, .edit-button, .delete-button, .cardArrow')
      ) {
        cursor.style.transform = 'translate(-50%, -50%) scale(4)';
      } else {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
      }
    };

    window.addEventListener('mousemove', animateCursor);
    window.addEventListener('mouseover', scaleCursor);

    return () => {
      window.removeEventListener('mousemove', animateCursor);
      window.removeEventListener('mouseover', scaleCursor);
    };
  }, []);

  return <div className="cursor"></div>;
};

export default Cursor;
