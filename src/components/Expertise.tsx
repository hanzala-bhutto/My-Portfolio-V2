import React from "react";
import '@fortawesome/free-regular-svg-icons'
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import {skills} from '../data/skills';

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Expertise</h1>
                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <div className="skill" key={index}>
                            <h3>{skill.title}</h3>
                            <p>{skill.description}</p>
                            <div className="flex-chips">
                                {skill.labels.map((label, index) => (
                                    <Chip
                                        key={index}
                                        className='chip'
                                        icon={label.icon}
                                        label={label.name}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Expertise;
