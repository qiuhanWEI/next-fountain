import React, { Component } from "react";
import "../slider.scss";

export default class SlideBanner extends Component {
    static displayName = "SlideBanner";

    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 0
        };
    }

    isSelected = selected => (selected ? " selected" : "");

    onMouseEnter = event => {
        const { index } = event.currentTarget.dataset;
        const selectedIndex = parseInt(index, 10);
        if (!isNaN(selectedIndex)) {
            this.setState({
                selectedIndex
            });
        }
    };

    handleGoService = title => {
        sessionStorage && sessionStorage.setItem("ty-fountain-product", title);
    };

    goServiceDetail = () => {
        this.handleGoService("Home Fountain");
        const origin = window.location.origin;
        window.location.href = `${origin}/#/service?products`;
    };

    render() {
        const { selectedIndex } = this.state;
        return (
            <div className="pt100">
                <p className="page-title" onClick={this.goServiceDetail}>
                    What We Can Do
                </p>
                <div className="light-bg">
                    <div className="hy-friends-list">
                        <a
                            href="#service?products"
                            className={`hy-friends-item ${
                                selectedIndex === 0 ? "selected" : ""
                            }`}
                            data-index="0"
                            onMouseEnter={this.onMouseEnter}
                            onClick={() => this.handleGoService("Water Screen")}
                        >
                            <div className="hy-friends-img pro1" />
                            <h4>Water Screen</h4>
                            <p>
                                3D Water Screen Show is a feast combined with
                                science and creativity.
                            </p>
                        </a>

                        <a
                            href="#service?products"
                            className={`hy-friends-item ${
                                selectedIndex === 1 ? "selected" : ""
                            }`}
                            data-index="1"
                            onMouseEnter={this.onMouseEnter}
                            onClick={() =>
                                this.handleGoService("Water Curtain")
                            }
                        >
                            <div className="hy-friends-img pro2" />
                            <h4>Water Curtain</h4>
                            <p>
                                it brings infinite fun and vitality to interior
                                environment, and fashion to plazas and parks.
                            </p>
                        </a>

                        <a
                            href="#service?products"
                            className={`hy-friends-item ${
                                selectedIndex === 2 ? "selected" : ""
                            }`}
                            data-index="2"
                            onMouseEnter={this.onMouseEnter}
                            onClick={() =>
                                this.handleGoService("Water Fountain")
                            }
                        >
                            <div className="hy-friends-img pro3" />
                            <h4>Water Fountain</h4>
                            <p>
                                We are transforming static water into dynamic,
                                pouring soul into it, and companioning it with
                                multiple lighting effects.
                            </p>
                        </a>
                        <a
                            href="#service?products"
                            className={`hy-friends-item ${
                                selectedIndex === 3 ? "selected" : ""
                            }`}
                            data-index="3"
                            onMouseEnter={this.onMouseEnter}
                            onClick={() =>
                                this.handleGoService("Music Fountain")
                            }
                        >
                            <div className="hy-friends-img pro4" />
                            <h4>Music Fountain</h4>
                            <p>
                                A way to deeply involve with the spectator
                                through the most fundamental and fascinating
                                substance on earth.
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}
