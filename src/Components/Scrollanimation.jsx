import React, { useEffect } from 'react';


function ScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      // Cleanup or disconnect the IntersectionObserver if needed
      observer.disconnect();
    };
  }, []);

  return (
    <div>
      {/* Your component JSX here */}
      <div className="hidden">
        {/* Content to be animated */}
        <p>This content will be animated when it enters the viewport.</p>
      </div>
    </div>
  );
}

export default ScrollAnimation;
