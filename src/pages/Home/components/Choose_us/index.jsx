import React from 'react';
import './Choose_us.scss';
import { Col, Row } from 'react-bootstrap';

import BadgeIcon from 'components/icons/BadgeIcon';
import CrownIcon from 'components/icons/CrownIcon';
import DatabaseIcon from 'components/icons/DatabaseIcon';
import DiamondIcon from 'components/icons/DiamondIcon';
import EarthIcon from 'components/icons/EarthIcon';
import HeartIcon from 'components/icons/HeartIcon';

export default function ChooseUs() {
    return (
        <div className="choose-container">
            <h4 className="choose-title">Why our clients choose Nova Designs London?</h4>
            <Row>
                <Col xs="12" md="6" lg="4">
                    <DiamondIcon className="choose_us-icon" />
                    <div className="choose-descr">High standards and competitive pricing</div>
                </Col>
                <Col xs="12" md="6" lg="4">
                    <HeartIcon className="choose_us-icon" />
                    <div className="choose-descr">Free designs and consultations</div>
                </Col>
                <Col xs="12" md="6" lg="4">
                    <DatabaseIcon className="choose_us-icon" />
                    <div className="choose-descr">Unigue design</div>
                </Col>
                <Col xs="12" md="6" lg="4">
                    <EarthIcon className="choose_us-icon" />
                    <div className="choose-descr">Many testimonials from previous clients</div>
                </Col>
                <Col xs="12" md="6" lg="4">
                    <CrownIcon className="choose_us-icon" />
                    <div className="choose-descr">Prompt delivery and quality installation</div>
                </Col>
                <Col xs="12" md="6" lg="4">
                    <BadgeIcon className="choose_us-icon" />
                    <div className="choose-descr">Individual approach to every project</div>
                </Col>
            </Row>
        </div>
    );
}
