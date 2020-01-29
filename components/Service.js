import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import config from '../config';

export default class Service extends Component {
    static displayName = 'Service';

    static propTypes = {};

    static defaultProps = {};

    constructor(props) {
        super(props);
        this.state = {};
    }

    limitCharts = charts => {
        if (charts.length > 160) {
            charts = charts.substring(0, 160) + '...';
        }
        return charts;
    };

    handleGoService = title => {
        sessionStorage && sessionStorage.setItem('ty-fountain-service', title);
    };

    goServiceDetail = () => {
        this.handleGoService(config.data[0].title);
        const origin = window.location.origin;
        window.location.href = `${origin}/info/solutions`;//todo
    };

    render() {
        return (
            <div className="pt100">
                <p className="page-title" onClick={this.goServiceDetail}>
                    Services & Solutions
                </p>
                <div className="container">
                    <div className="items">
                        <Row gutter={20} wrap>
                            {config.data.map((item, index) => {
                                return (
                                    <Col key={index} xs={24} sm={12} lg={8}>
                                        <div className="item">
                                            <FontAwesomeIcon
                                                icon={item.icon}
                                                className="icon"
                                                size="2x"
                                            />
                                            <h3 className="title">{item.title}</h3>
                                            <p className="description">
                                                {this.limitCharts(item.description)}
                                            </p>
                                            <a
                                                className="link"
                                                href="/info/solutions"
                                                onClick={() => this.handleGoService(item.title)}
                                            >
                                                More
                                            </a>
                                        </div>
                                    </Col>
                                );
                            })}
                        </Row>
                    </div>
                </div>
                <style jsx>{`
                    .container {
                        width: 100%;
                        max-width: 1080px;
                        margin: 0 auto;
                    }
                    .items {
                        display: flex;
                        flex-wrap: wrap;
                    }
                    .item {
                        text-align: center;
                        padding: 0 20px;
                        margin: 20px 0;
                    }
                    .title {
                        font-weight: bold;
                        font-size: 20px;
                    }
                `}</style>
            </div>
        );
    }
}
