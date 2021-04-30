import React from 'react';
import './story.scss';
const Story = () => {
  return (
    <div className="story">
      <div className="alpha-layer"></div>
      <section className="primary">
        <div className="primary-area">
          <h2 className="primary-header">Andrew's Story</h2>
          <p className="primary-description">Saturday September 18th, 2021</p>
        </div>
        <div className="primary-area">
          <h2 className="primary-header">Deborah's Story</h2>
          <p className="primary-description">Saturday September 18th, 2021</p>
        </div>
      </section>
    </div>
  );
};

export default Story;
