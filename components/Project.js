import React, { Component } from 'react';
import config from '../config';

export default class Project extends Component {
    static displayName = 'Project';

    constructor(props) {
        super(props);
        this.state = {};
    }

    handleGoService = title => {
        sessionStorage && sessionStorage.setItem('ty-fountain-project', title);
    };

    goServiceDetail = title => {
        this.handleGoService(title || config.projectsData[0].title);

        const { setProps } = this.props;
        if (setProps) {
            setProps(title);
        } else {
            const origin = window.location.origin;
            window.location.href = `${origin}/#/project`;
        }
    };

    render() {
        const dataSource = config.projectsData;
        return (
            <div className="pt100">
                <p className="page-title" onClick={() => this.goServiceDetail()}>
                    Recent Projects
                </p>
                <div className="container">
                    <div className="w1200 main-wrapper silder">
                        {dataSource.map((item, index) => {
                            return (
                                <span className="dib wrapper" key={index}>
                                    <div
                                        className={`item ${item.thumb}`}
                                        onClick={() => this.goServiceDetail(item.title)}
                                    />
                                    <h3 className="title">{item.title}</h3>
                                </span>
                            );
                        })}
                    </div>
                </div>
                <style jsx>{`
                    .container {
                        padding: 80px 0;
                        background: #f6f7f9;
                    }
                    .wrapper {
                        width: 260px;
                        margin: 10px;
                        vertical-align: top;
                        cursor: pointer;
                    }
                    .title {
                        white-space: normal;
                        font-weight: 400;
                    }
                    .item {
                        width: 260px;
                        height: 220px;
                    }
                    .silder {
                        overflow-x: auto;
                        white-space: nowrap;
                    }
                    .dib {
                        display: inline-block;
                    }
                `}</style>
            </div>
        );
    }
}
