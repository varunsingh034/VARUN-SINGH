import React, { useEffect } from 'react';


const CustomMouse = () => {
  useEffect(() => {
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorCircle = document.querySelector('.cursor-circle');

    const moveCursor = (e) => {
      const posX = e.clientX;
      const posY = e.clientY;

      cursorDot.style.left = `${posX}px`;
      cursorDot.style.top = `${posY}px`;

      cursorCircle.animate(
        {
          left: `${posX}px`,
          top: `${posY}px`,
        },
        {
            fill: 'forwards',
          duration: 300,
        }
      );
    };

    const addHover = () => cursorCircle.classList.add('hover');
    const removeHover = () => cursorCircle.classList.remove('hover');

    window.addEventListener('mousemove', moveCursor);

    const interactiveElements = document.querySelectorAll(
      'a, button, input, .skillbox'
    );

    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', addHover);
      el.addEventListener('mouseleave', removeHover);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', addHover);
        el.removeEventListener('mouseleave', removeHover);
      });
    };
  }, []);

  return (
    <>
      <div className="cursor-circle" />
      <div className="cursor-dot" />
    </>
  );
};

export default CustomMouse;
