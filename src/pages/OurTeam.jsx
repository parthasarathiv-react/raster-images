import React from 'react';
import { Link } from 'react-router-dom';
import TiltedCard from '../components/reactbits/TiltedCard';

const TEAM = {
    'Management Team': [
        { name: 'Dr. Suresh Kumaran V', role: 'CEO', img: '/img/team/team.jpg' },
        { name: 'Soma Nanda', role: 'CEO', img: '/img/team/team.jpg' },
    ],
    'Business Team': [
        { name: 'Gowthaman R', role: 'Business Development Manager', img: '/img/team/team.jpg' },
        { name: 'Krishna Kumar L', role: 'Business Development Manager (South)', img: '/img/team/team.jpg' },
        { name: 'Magudeshwaran S', role: 'Business Executive', img: '/img/team/team.jpg' },
    ],
    'Project Management Team': [
        { name: 'Ranjith Kumar K', role: 'Chief Mentor', img: '/img/team/team.jpg' },
        { name: 'Prakash J', role: 'Project Manager', img: '/img/team/team.jpg' },
        { name: 'Asgar Hussain', role: 'Project Lead', img: '/img/team/team.jpg' },
    ],
};

const MemberCard = ({ member }) => (
    <div className="tilted-team-card">
        <TiltedCard
            imageSrc={member.img}
            altText={member.name}
            captionText={member.name}
            containerHeight="280px"
            containerWidth="100%"
            imageHeight="280px"
            imageWidth="100%"
            rotateAmplitude={12}
            scaleOnHover={1.05}
            showTooltip
            displayOverlayContent
            overlayContent={
                <div className="tilted-team-overlay">
                    <h6>{member.name}</h6>
                    <span>{member.role}</span>
                </div>
            }
        />
    </div>
);

const OurTeam = () => {
    return (
        <>
            <div className="container-fluid sub-page-heading">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-8">
                            <h4> Our Team </h4>
                            <p> <Link to="/"> Home </Link> / Our Team </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container our-team pb-30">
                {Object.entries(TEAM).map(([section, members]) => (
                    <React.Fragment key={section}>
                        <h5 className="mt-30 mb-15"> {section} </h5>
                        <div className="row team-center">
                            {members.map((member) => (
                                <div key={member.name} className="col-sm-12 col-md-6 col-lg-4 mb-20">
                                    <MemberCard member={member} />
                                </div>
                            ))}
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </>
    );
};

export default OurTeam;
