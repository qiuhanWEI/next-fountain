import React from 'react';
import { Row, Col } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import config from '../config.js';

const handleGoService = (title, pageType) => {
    sessionStorage && sessionStorage.setItem(pageType, title);
};

const getPageType = title => {
    switch (title) {
        case 'Products':
            return 'ty-fountain-product';
        case 'Services':
            return 'ty-fountain-service';
        case 'Projects':
            return 'ty-fountain-project';
    }
};

const goNavPage = item => {
    const pageType = getPageType(item.title);
    item.location && handleGoService(item.location, pageType);
    const origin = window.location.origin;
    window.location.href = `${origin}/#/${item.link}`;
};

const Footer = () => {
    return (
        <div className="foot-wrapper">
            <div className="content w1200">
                <Row>
                    <Col span={10}>
                        <h3 className="footer-title">T.Y. Fountain</h3>
                        <div className="nav">
                            <p className="desc ft14">
                                T.Y. Fountain is a professional designing and manufacturing company
                                which is engaged in large fountains & water features with over 15
                                years experience.
                            </p>
                            {config.ContactData.map(item => (
                                <p key={item.title}>
                                    <FontAwesomeIcon icon={item.pic} className="icon" />
                                    {item.desc && <span className="footer-desc">{item.desc}</span>}
                                    {item.render && <span className="footer-desc">{item.render()}</span>}
                                </p>
                            ))}
                        </div>
                    </Col>
                    <Col span={6} />
                    <Col span={8}>
                        <h3 className="footer-title">Navigation</h3>
                        {config.navigation.map(item => (
                            <p key={item.title} className="footer-nav" onClick={() => goNavPage(item)}>
                                <span>> &nbsp;</span>
                                <span>{item.title}</span>
                            </p>
                        ))}
                    </Col>
                </Row>
                <p className="copy-right">T.Y. Fountain</p>
            </div>
            <style jsx>{`
                .content {
                    margin: 0 auto;
                }
                .desc {
                    color: #7f7f7f;
                }
                .copy-right {
                    text-align: center;
                }
            `}</style>
        </div>
    );
};

export default Footer;
