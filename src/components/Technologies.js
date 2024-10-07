import React from 'react';

const Technologies = () => {
  return (
    <section id="technologies">
      <div className="technology">
        <h3>HTML, CSS, JavaScript</h3>
        <p>HTML structures your content, serving as the foundation of any web page.</p>
        <p>CSS adds style and visual appeal, making your web pages beautiful and responsive.</p>
        <p>JavaScript brings your web pages to life with dynamic content and interactivity.</p>
      </div>
      <div className="technology">
        <h3>Front-End Technologies</h3>
        <p>Front-End tools simplify and enhance the development of complex user interfaces.</p>
        <p>Examples: React, Angular</p>
      </div>
      <div className="technology">
        <h3>Back-End Technologies</h3>
        <p>Back-End technologies handle server-side operations, including databases, authentication, and business logic.</p>
        <p>Examples: Node.js, Django</p>
      </div>
    </section>
  );
};

export default Technologies;
