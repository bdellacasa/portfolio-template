import React, { useState } from 'react';
import { Badge } from 'reactstrap';
import './portfolioCard.scss';

const PortfolioCard = ({ proyect }) => {
  const { img, name, description, repository, deployLink } = proyect;
  const [contentOpacity, setContentOpacity] = useState(0);

  return (
    <div class="container" onMouseOver={() => setContentOpacity(1)} onMouseLeave={() => setContentOpacity(0)}>
      <div className={"portfolio-card"} style={{ backgroundImage: `url(${img})` }}>
        <div className={"portfolio-card-opacity"}>
          <div className={"portfolio-card-container"} style={{ opacity: contentOpacity }}>
            <p className={"portfolio-card-title"}>{name}</p>
            <p className={"portfolio-card-description"}>{description}</p>
            <div className={"portfolio-card-links-container"}>
              {!!repository && <Badge href={repository} color="info" className={"portfolio-card-link"}>Code</Badge>}
              {!!deployLink && <Badge href={deployLink} style={{ marginLeft: '20px' }} color="info" className={"portfolio-card-link"} >Website</Badge>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;