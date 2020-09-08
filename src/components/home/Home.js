import React from 'react';
import './home.scss';
import { ELEMENTS } from '../../utils/Constants';
import Data from '../../Data';

const Home = () => {
  return (
    <section id={ELEMENTS.HOME} className={"home-section"}>
      <div className={"home-background"} style={{ backgroundImage: `url(${Data.home.background})` }}>
        <div className={"home-opacity"}>
          <div className={"home-content-container"}>
            <div className="content-opacity">
              <h3>Hi, I'm {Data.home.name}.</h3>
              <p className={"home-description"}>{Data.home.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;