import React from 'react';
import './experienceCard.scss';

const ExperienceCard = ({ company }) => {
  const { companyLogo, positions, description } = company;
  return (
    <div class="container">
      <div className={"experience-card"}>
        <div className={"image-container"}>
          <img className={"experience-icon"} src={companyLogo} />
          <p className={"card-date"}>1 year, 10 months</p>
        </div>
        <div className={"content-container"}>
          {positions.map(position => {
            return (
              <div>
                <p className={"card-position"} style={{ paddingTop: '20px' }}>{position.name}</p>
                <p className={"card-date"}>{position.dates}</p>
              </div>
            )
          })}
          <p className={"card-description"}>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;