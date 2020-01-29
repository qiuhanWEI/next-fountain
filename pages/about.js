import React from 'react';
import Layout from '../components/Layout';

export default () => (
    <Layout>
        <div className="service-detail-wrapper">
            <div className="para-wrapper">
                <iframe
                    src="https://zao.taobao.com/vrimage/preview?userId=17381151964&amp;bizId=23148568&amp;type=cgs"
                    allowFullScreen
                    data-rocket-lazyload="fitvidscompatible"
                    data-lazy-src="https://zao.taobao.com/vrimage/preview?userId=17381151964&amp;bizId=23148568&amp;type=cgs"
                    data-was-processed="true"
                    className="banner-img"
                />
            </div>
            <div>
                <p className="page-title">About T.Y. FOUNTAIN</p>
                <p className="description p16 ft16">
                    When T.Y. Fountain made our first fountain many years ago, it was something
                    spectacular, something that attracted people just to stand and watch. By today’s
                    standards, it was nothing special, it wasn’t even illuminated at night, but
                    still, it was something worth admiring. Next, to this fountain, a passion took
                    form, a hobby transitioned to a profession and a brilliant history was just
                    starting.
                </p>
                <p className="description p16 ft16">
                    Skilled engineers, talented artists, and fountain technicians were added
                    exponentially throughout the years in the T.Y. Fountain family, and we all share
                    a rather twisted perception of water. We don’t see, taste or sense water the way
                    everybody else does. We see water as a medium to create emotions.
                </p>
                <p className="description p16 ft16">
                    This is what a fountain, actually is. A way to deeply involved with the
                    spectator through the most fundamental and fascinating substance on earth. Every
                    fountain has a unique character; it might convey tranquility, it might be a work
                    of art, it might trigger one’s imagination through its perpetual liquid motion,
                    or it can be a mind-blowing extravaganza with massive volumes of water,
                    impressive light shows and even re, all dancing to music, following a dramatic
                    choreography. It can essentially be anything – anything that one can imagine of.
                    Our job is to turn extraordinary ideas into marvelous fountains. T.Y. Fountain
                    Canada have our proposals, but we can also turn your idea into a liquid piece of
                    art.
                </p>
                <p className="description p16 ft16">
                    We have some of the most advanced gear, from design and simulation software to a
                    state-of-the-art production line with laser cutters, CNC machines and some of
                    the world’s most talented fountain engineers and technicians. These, combined
                    with our 20-year experience in fountain projects of all scales, partnerships
                    with leading companies and numerous innovations make us a worldwide pioneer in
                    fountain design and manufacture.
                </p>
                <p className="description p16 ft16">
                    Apart from fountain design and manufacture, we can assist you in every aspect of
                    your fountain project.
                </p>
            </div>
        </div>
        <style jsx>{`
            .para-wrapper {
                width: 800px;
                height: 600px;
                margin: 0 auto;
            }
        `}</style>
    </Layout>
);
