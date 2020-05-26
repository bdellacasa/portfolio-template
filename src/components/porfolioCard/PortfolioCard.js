import React from 'react';
import { Badge } from 'reactstrap';
import './portfolioCard.scss';

const PortfolioCard = (props) => {
    return (
        <div class="container">
                <div className={"portfolio-card"} style={{backgroundImage: `url(${props.proyect.img})`}}>
                    <div className={"portfolio-card-opacity"}>
                        <div className={"portfolio-card-container"}>
                            <p className={"portfolio-card-title"}>{props.proyect.name}</p>
                            <p className={"portfolio-card-description"}>{props.proyect.description}</p>
                            <div className={"portfolio-card-links-container"}>
                                {!!props.proyect.repository && <Badge href={props.proyect.repository} color="info" className={"portfolio-card-link"}>Code</Badge>}
                                {!!props.proyect.deployLink && <Badge href={props.proyect.deployLink} style={{marginLeft: '20px'}} color="info" className={"portfolio-card-link"} >Website</Badge>}
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
  };
  
  export default PortfolioCard;