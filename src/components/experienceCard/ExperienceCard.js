import React from 'react';
import './experienceCard.scss';

const ExperienceCard = (props) => {
    return (
        <div class="container">
                <div className={"experience-card"}>
                    <div className={"image-container"}>
                            <img style={{ width: '10vh', height: '10vh' }} src={props.company.companyLogo}/>
                            <p className={"card-date"}>1 year, 10 months</p>
                    </div>
                    <div className={"content-container"}>
                        {props.company.positions.map(position => {
                            return(
                                <div>
                                    <p className={"card-position"} style={{paddingTop: '20px'}}>{position.name}</p>
                                    <p className={"card-date"}>{position.dates}</p>
                                </div>
                            )
                        })}            
                        <p className={"card-description"}>{props.company.description}</p>
                    </div>
                </div>
        </div>
    );
  };
  
  export default ExperienceCard;