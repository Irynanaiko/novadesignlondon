import React from 'react';
import './Choose_us.scss';
import { Col, Row } from 'react-bootstrap';

import BadgeIcon from '../icons/BadgeIcon';
import CrownIcon from '../icons/CrownIcon';
import DatabaseIcon from '../icons/DatabaseIcon';
import DiamondIcon from '../icons/DiamondIcon';
import EarthIcon from '../icons/EarthIcon';
import HeartIcon from '../icons/HeartIcon';

function ChooseUs() {
    return (
        <div className="choose-container">
            <h4 className="choose-title">Why our clients choose Nova Designs London?</h4>
            <Row>
                <Col xs="12" md="6" lg="4">
                    <DiamondIcon />
                    <div className="choose-descr">High standards and competitive pricing</div>
                </Col>
                <Col xs="12" md="6" lg="4">
                    <HeartIcon />
                    <div className="choose-descr">Free designs and consultations</div>
                </Col>
                <Col xs="12" md="6" lg="4">
                    <DatabaseIcon />
                    <div className="choose-descr">Unigue design</div>
                </Col>
                <Col xs="12" md="6" lg="4">
                    <EarthIcon />
                    <div className="choose-descr">Many testimonials from previous clients</div>
                </Col>
                <Col xs="12" md="6" lg="4">
                    <CrownIcon />
                    <div className="choose-descr">Prompt delivery and quality installation</div>
                </Col>
                <Col xs="12" md="6" lg="4">
                    <BadgeIcon />
                    <div className="choose-descr">Individual approach to every project</div>
                </Col>
            </Row>
        </div>
    );
}

export { ChooseUs };
