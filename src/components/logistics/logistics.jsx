import React from 'react';
import './logistics.scss';
const Logistics = () => {
  return (
    <div className="logistics">
      <div className="alpha-layer"></div>
      <section className="primary">
        <h1 className="primary-header">Logistics</h1>
        <ul className="primary-rows">
          <li className="row">
            <ul className="primary-columns">
              <li className="column">
                <h2>Official Spring Sale</h2>
              </li>
              <li className="column">
                Everything you need from moisturizing to cleansing
              </li>
            </ul>
          </li>
          <li className="row">
            <ul>
              <li className="column">
                <h2>10 Skincare Tips</h2>
              </li>
              <li className="column">
                Look fresh for a day in the sun or a fun night out
              </li>
            </ul>
          </li>
          <li className="row">
            <ul>
              <li className="column">
                <h2>Health and Beauty Expo</h2>
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

export default Logistics;
