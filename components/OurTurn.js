import React from "react";

export default function OurTurn() {
    return (
        <div className="container">
            <p className="page-title-with-txt">This time, it’s our turn</p>
            <p className="title-txt tc">
                We create very exciting moment with our passion and technology
            </p>
            <p className="desc fw-6">
                Sometimes we forget the significance of water. That taught us
                about how we exist.
            </p>
            <p className="desc fw-6">
                Reminds us of the marvels we created. And the impacts that we
                have made.
            </p>
            <p className="desc fw-6">
                Water surrounds all around us. Shaping the world we live. It’s
                not just an element that we relied on.
            </p>
            <p className="desc fw-6">
                It’s the spirit of perfection and beauty. That has always
                inspired the extraordinary.
            </p>
            <p className="desc fw-6">
                This time, it’s our turn to make this world beautiful.
            </p>
            <style jsx>
                {`
                    .container {
                        margin: 0 auto;
                        padding: 80px 80px 10px;
                    }
                    .desc {
                        color: rgba(0, 0, 0, 0.6);
                        font-size: 16px;
                        line-height: 30px;
                        text-align: center;
                    }
                    .page-title-with-txt {
                        font-size: 30px;
                        color: #3080fe;
                        font-weight: 700;
                        text-align: center;
                        position: relative;
                    }
                    .title-txt {
                        color: #999;
                    }

                    .fw-6 {
                        font-weight: 600;
                    }

                    .tc {
                        text-align: center;
                    }
                `}
            </style>
        </div>
    );
}
