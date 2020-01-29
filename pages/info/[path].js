import React, { Component } from 'react';
import { withRouter } from 'next/router';
import { Tabs } from 'antd';
import SwipeableViews from 'react-swipeable-views';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Layout from '../../components/Layout';
import config from '../../config';
const { TabPane } = Tabs;

class DetailInfoPage extends Component {
    static displayName = 'DetailInfoPage';

    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            activeKey: ''
        };
    }

    setActiveKey = isServicePage => {
        const pageType = isServicePage ? 'ty-fountain-service' : 'ty-fountain-product';
        const defaultKey = isServicePage ? 'Fountain Design' : 'Home Fountain';
        return (sessionStorage && sessionStorage.getItem(pageType)) || defaultKey;
    };

    isServicePage = path => {
        return path.indexOf('solutions') > -1;
    };

    componentDidMount() {
        console.log('this.props', this.props);
        // this.ref.scrollIntoView();
        const path = this.props.router.query.path;
        path && this.setDataByPath(path);
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        console.log('nextProps', nextProps);

        if (nextProps.router.query.path !== this.props.router.query.path) {
            this.setDataByPath(nextProps.router.query.path);
            this.ref.scrollIntoView();
        }
    }

    setDataByPath = path => {
        const isServicePage = this.isServicePage(path);
        this.setState({
            index: 0,
            activeKey: this.setActiveKey(isServicePage),
            configData: this.getData(isServicePage)
        });
    };
    renderPagination = total => {
        const { index } = this.state;
        if (total === 1) return;
        return Array.from({ length: total }).map((x, ind) => {
            const active = index === ind ? 'active' : '';
            return (
                <span
                    className={`page-dot ${active}`}
                    key={ind}
                    onClick={() => this.setState({ index: ind })}
                />
            );
        });
    };

    onChange = activeKey => {
        this.setState({ index: 0, activeKey });
    };

    toNext = len => {
        const { index } = this.state;
        if (index === len - 1) {
            this.setState({ index: 0 });
        } else {
            this.setState({ index: index + 1 });
        }
    };

    toPre = len => {
        const { index } = this.state;
        if (index === 0) {
            this.setState({ index: len - 1 });
        } else {
            this.setState({ index: index - 1 });
        }
    };

    getData = isServicePage => {
        return isServicePage ? config.data : config.productDatas;
    };

    render() {
        const { index, activeKey, configData = [] } = this.state;

        return (
            <Layout>
                <div className="service-detail-wrapper" ref={el => (this.ref = el)}>
                    <div className="tab-wrapper">
                        <Tabs
                            tabPosition="left"
                            shape="wrapped"
                            animation={false}
                            onChange={this.onChange}
                            activeKey={activeKey}
                            size="large"
                        >
                            {configData.map(item => (
                                <TabPane
                                    tab={item.title}
                                    key={item.title}
                                    className="custom-tab-item"
                                >
                                    <div className="slider-wrapper">
                                        <SwipeableViews
                                            index={index}
                                            containerStyle={{ height: '100%' }}
                                            className="service-detail-slider"
                                        >
                                            {item.imgs.map(img => (
                                                <div
                                                    key={img}
                                                    className={`service-detail-img ${img}`}
                                                />
                                            ))}
                                        </SwipeableViews>
                                        <div
                                            className="pre-icon"
                                            onClick={() => this.toPre(item.imgs.length)}
                                        />
                                        <div
                                            className="next-icon"
                                            onClick={() => this.toNext(item.imgs.length)}
                                        />
                                    </div>

                                    <div className="pagination">
                                        {this.renderPagination(item.imgs.length)}
                                    </div>
                                    <div>
                                        <p className="page-title">{item.title}</p>
                                        <p className="description p16 ft16">{item.description}</p>
                                    </div>
                                </TabPane>
                            ))}
                        </Tabs>
                        <div className="contact-wrapper">
                            {config.ContactData.map((item, ind) => {
                                return (
                                    !item.ignore && (
                                        <p key={ind}>
                                            <FontAwesomeIcon icon={item.pic} className="icon mr8" />
                                            {item.desc && (
                                                <span className="contact-desc">{item.desc}</span>
                                            )}
                                            {item.render && (
                                                <span className="contact-render">
                                                    {item.render()}
                                                </span>
                                            )}
                                        </p>
                                    )
                                );
                            })}
                        </div>
                    </div>
                </div>
                <style jsx>{`
                    .tab-wrapper {
                        margin: 0 auto;
                        width: 1200px;
                        min-height: 700px;
                        position: relative;
                    }

                    .slider-wrapper {
                        position: relative;
                    }

                    .contact-wrapper {
                        position: absolute;
                        left: 10px;
                        top: 450px;
                        width: 200px;
                    }
                `}</style>
            </Layout>
        );
    }
}
const WithRouteDetailInfoPage = withRouter(DetailInfoPage);
export default WithRouteDetailInfoPage;
