import React from 'react';
import { ELEMENTS } from '../../utils/Constants';
import './experience.scss';
import Data from '../../Data';
import Card from '../experienceCard/ExperienceCard';

const Experience = () => {
    return (
        <section id={ELEMENTS.EXPERIENCE} className={"experience-section"}>
            <div class="container" className={"experience-content-container"}>
                <div class="row">
                    <div class="col-lg-2 col-sm-2" className={"experience-text-container"}>
                        <h1 className={"experience-text"}>Experience</h1>
                    </div>
                    <div class="col-lg-2 col-sm-2" className={"experience-cards-container"}>
                        {!!Data.experience && 
                            Data.experience.map(company => {
                                return(
                                    <div style={{ paddingBottom: '50px' }}>
                                        <Card key={company.name} company={company}/>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;