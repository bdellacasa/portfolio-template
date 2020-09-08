import React, { useState } from 'react';
import { ELEMENTS } from '../../utils/Constants';
import Card from '../porfolioCard/PortfolioCard';
import Data from '../../Data';
import './portfolio.scss';

const Portfolio = () => {
  return (
    <section id={ELEMENTS.PORTFOLIO} className={"portfolio-section"}>
      <div className={"portfolio-text-container"}>
        <h1 className={"portfolio-text"}>My projects</h1>
      </div>
      <div className={"portfolio-content-container"}>
        {!!Data.portfolio &&
          Data.portfolio.map(proyect => {
            return (
              <div className={"portfolio-data-container"}>
                <Card key={proyect.name} proyect={proyect} />
              </div>
            )
          })
        }
      </div>
    </section>
  );
}

export default Portfolio;