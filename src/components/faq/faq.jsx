import React from 'react';
import './faq.scss';
const FAQ = () => {
  return (
    <div className="faq">
      <div className="alpha-layer"></div>
      <div className="beta-layer"></div>
      <section className="primary">
        <h1 className="primary-header">Frequently Asked Questions</h1>
        <ul className="primary-rows">
          <li className="row">
            <p className="question">By when do I need to RSVP?</p>
            <p className="answer">Test</p>
          </li>
          <li className="row">
            <p className="question">By when do I need to RSVP?</p>
            <p className="answer">Testteststs</p>
          </li>
          <li className="row">
            <p className="question">By when do I need to RSVP?</p>
            <p className="answer">Testtestsetstsets</p>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default FAQ;
