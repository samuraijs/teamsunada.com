import React from 'react';
import './schedule.scss';
const Schedule = () => {
  return (
    <div className="schedule">
      <div className="alpha-layer"></div>
      <section className="primary">
        <h1 className="primary-header">Party Schedule!</h1>
        <ul className="primary-rows">
          <li className="row">
            <ul className="primary-columns">
              <li className="column">
                <h2>Friday, 17 September 2021</h2>
              </li>
              <li className="column">
                Everything you need from moisturizing to cleansing
              </li>
            </ul>
          </li>
          <li className="row">
            <ul>
              <li className="column">
                <h2>Saturday, 18 September 2021</h2>
              </li>
              <li className="column">
                Look fresh for a day in the sun or a fun night out
              </li>
            </ul>
          </li>
          <li className="row">
            <ul>
              <li className="column">
                <h2>Sunday, 19 September 2021</h2>
              </li>
              <li className="column">
                Make your beauty routine as smooth as possible
              </li>
            </ul>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Schedule;
