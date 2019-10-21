import React from 'react';
import { faPalette } from '@fortawesome/free-solid-svg-icons/faPalette';
import { faIndustry } from '@fortawesome/free-solid-svg-icons/faIndustry';
import { faTools } from '@fortawesome/free-solid-svg-icons/faTools';
import { faToolbox } from '@fortawesome/free-solid-svg-icons/faToolbox';
import { faPeopleCarry } from '@fortawesome/free-solid-svg-icons/faPeopleCarry';
import { faHeadset } from '@fortawesome/free-solid-svg-icons/faHeadset';

import { faLocationArrow } from '@fortawesome/free-solid-svg-icons/faLocationArrow';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons/faPhoneAlt';
import { faClock } from '@fortawesome/free-solid-svg-icons/faClock';

const data = [
    {
        title: 'Fountain Design',
        description: `Providing personalized design base on clients' ideas and requests. Effect pictures and animations can be provided if requested (additional charges may apply) . Accomplish design within 2 to 3 days. 3D animations will take 15 days`,
        icon: faPalette,
        imgs: ['d-1', 'd-2', 'd-3', 'd-4', 'd-5', 'd-6', 'd-7', 'd-8', 'd-9', 'd-10']
    },
    {
        title: 'Material supply',
        description: `All TY Fountain products can be customized accorading to customer requirements. If however, you are looking for a unique water effect, nozzle, pump, luminaire or anything related to water, We can provide all kinds of fountain equipment, and we also creates custom products. We introduce and incorporate in the majority of our products the use of stainless steel. A remarkable material with numerous advantages over the other materials used in the fountain industry.`,
        icon: faToolbox,
        imgs: ['ms-1', 'ms-2', 'ms-3', 'ms-4', 'ms-5', 'ms-6']
    },
    {
        title: 'Manufacturing',
        description: `The exceptional quality of stainless steel in combination with precision engineering, specialized CNC machines, Laser cutters and some of the world’s most skilled fountain technicians, result in fountain equipment of unique quality. 
We carefully check the lights, the nozzles, the spray systems, the pumps, the control system and the entire structure. Then we pack it all together and ship it to you. When you open the boxes, apart from the shiny, high-quality equipment.`,
        icon: faIndustry,
        imgs: ['m-1', 'm-2', 'm-3', 'm-4', 'm-5']
    },
    {
        title: 'Installation',
        description: `Even though our products are remarkably easy to install, if installation is asked by the client, our experienced installation & commission teams prepare their luggage and installation gear and fly to the site. They install the entire fountain system, the lights and the control system in the most professional way, keeping always in mind the ease of maintenance and most primarily the safety of the fountain. The supervisors make sure that everything is installed properly, every water stream is fine-tuned, all lights point correctly at the streams and all the little details that matter the most. If it is a dancing fountain the choreographies now run for testing and fine-tuning purposes. Nobody leaves the site until the fountain operates as designed and the client is satisfied. 
We will arrange the shipment according to your request and make sure the product will be delivered to you safely and efficiently. `,
        icon: faPeopleCarry,
        imgs: ['in-1']
    },
    {
        title: 'Maintenance & Repair',
        description: `We provide professional maintenance service, and if your fountain system is not well functional, no mater it’s a mechanical problem or a software problem, we can repair it.`,
        icon: faTools,
        imgs: ['in-1']
    },
    {
        title: 'After sales',
        description: `After purchasing the product from T.Y. Fountain, we provide 24 hours on-line technical support. Our after sales support is renowned for our quick response to any incident. If a problem appears, we will help you fix it as soon as possible. And if for any reason, there is problematic equipment due to production error, the part is replaced right away - no questions asked.`,
        icon: faHeadset,
        imgs: ['as-1']
    }
];

const productDatas = [
    {
        title: 'Home Fountain',
        description: `In the field of decorative design, water is one of the most lively and inspiring elements. The yearning towards the nature is growing stronger against modernization. Getting back to simplicity and embracing the nature has become a desire of many people. Home Fountain happens to be a satisfaction of this desire. It becomes the emotional bond people could easily have with the nature. Water brings the spirit of the nature to our home while it becomes an artwork of our life.`,
        imgs: ['hf-1', 'hf-2', 'hf-3', 'hf-4', 'hf-5', 'hf-7', 'hf-11', 'hf-13', 'hf-14']
    },
    {
        title: 'Garden Fountain',
        description: `Water attracts people; Water makes landscape alive. Water can be soft, can be hard; can be virtual, can be real; can be rapid, and can be slow too. In combined garden landscape, water frames different construction environment. By combining other facilities, beauty of water could be presented in different garden designs. Water is the source of life: it makes a garden more than a container of visual feast; it gives a soul; and make the entire garden breath and grow.
        Every fountain consists of a series of nozzles, underwater luminaires, pumps, control systems and various other components, but these parts are not just simple pieces of metal. Every fountain component is a marvelous piece of engineering, design and functionality; elaborately devised, precisely engineered and exhaustively tested under the harshest conditions to make sure it will give the water owing through it the exact form we want – for decades to come. `,
        imgs: [
            'gf-1',
            'gf-3',
            'gf-5',
            'gf-6',
            'gf-8',
            'gf-9',
            'gf-11',
            'gf-12',
            'gf-13',
            'gf-15',
            'gf-16'
        ]
    },
    {
        title: 'Water Fountain',
        description: `In the field of decorative design, water is one of the most lively and inspiring elements. The yearning towards the nature is growing stronger against modernization. Getting back to simplicity and embracing the nature has become a desire of many people. Home Fountain happens to be a satisfaction of this desire. It becomes the emotional bond people could easily have with the nature. Water brings the spirit of the nature to our home while it becomes an artwork of our life.You will find a wide selection of carefully designed fountain shapes, made of the highest quality materials and delivered pre-fabricated, pre-wired, ready for installation. The best part? The feature all new technologies like LED illumination and a set of handy features that will make your life easier. Installation is fast & easy without requiring special experience or skill - it is more like taking the system out of its packaging, putting it inside the basin and plugging the cables. No matter how complex the fountain pattern you choose is, we have simplied the process of installation as much as possible, saving you money, time and effort. Time has changed, water is no longer a silent & secrete existence. We are transforming static water into dynamic, pouring soul into it, and companioning it with multiple lighting effects. In this way, water fountain could "buffer" the solid buildings, "soft" the hard ground, and contribute more vitality to the environment. It satisfies the affection for water in human nature, makes water human's soul mate. With it, cities are not stiff anymore, and life is fulfilled by happiness.
        All standardised products can be customized according to customer requirements (e.g. 316 stainless steel, longer cable lengths, alternate mounting systems or spray patterns). If however, you are looking for a unique water effect, nozzle, luminaire or anything related to water, We also creates custom products. We have designed and manufactured extraordinary fountain equipment numerous times. `,
        imgs: [
            'wf-1',
            'wf-2',
            'wf-3',
            'wf-4',
            'wf-5',
            'wf-7',
            'wf-12',
            'wf-14',
            'wf-8',
            'wf-9',
            'wf-10',
            'wf-15',
            'wf-16'
        ]
    },
    {
        title: 'Water Curtain',
        description: `We are born for creating the art of nature. Water is no longer captured by vessels; it can present the words and patterns with our water curtain. Water curtain is so wonderful that it could attract all the attention. Therefore, it has become a new favorite in commercial promotion; it brings infinite fun and vitality to interior environment, and fashion to plazas and parks.`,
        imgs: [
            'wc-1',
            'wc-2',
            'wc-3',
            'wc-4',
            'wc-5',
            'wc-7',
            'wc-12',
            'wc-6',
            'wc-8',
            'wc-9',
            'wc-10',
            'wc-11'
        ]
    },
    {
        title: 'Water Screen',
        description: `3D Water Screen Show is a feast combined with science and creativity. It has overcome all traditional water screen movie. The most fashionable & shocking glass-free 3D technology and colorful laser light are used in the 3D Water Screen Show. The visual penetrability of water screen makes the projected images stereo; unpredicted laser movement and high-power sound effect integrates the images with the environment. This kind of city art uses buildings and sky as background, and takes people's imagination to the night sky. The wonderful charm it has is enough to make a whole city crazy, and reveals the character and legend of the city. 
       The Water Screen is ideal for Laser or Video Projection with incredible water particles density and therefore projection capabilities. In day-time, the Water Screen is a beautiful, massive water shape but at night even when simply illuminated by the vivid underwater luminaires, it is an awe-inspiring magical spectacle. In low ambient-light conditions, the screen becomes completely transparent and only the spots pointed by the laser / projector are visible creating a holographic-like effect. 
       `,
        imgs: ['ws-1', 'ws-2', 'ws-3', 'ws-4', 'ws-5', 'ws-7', 'ws-6', 'ws-8', 'ws-9']
    },
    {
        title: 'Music Fountain',
        description: `This is what a fountain, actually is. A way to deeply involve with the spectator through the most fundamental and fascinating substance on earth. Every fountain has a unique character; it might convey tranquility, it might be a work of art, it might trigger one’s imagination through its perpetual liquid motion, or it can be a mind-blowing extravaganza with massive volumes of water, impressive light shows and even fire, all dancing to music, following a dramatic choreography. It can essentially be anything – anything that one can imagine of. Our job is to turn extraordinary ideas into marvelous fountains. We have our own proposals but we can also turn your idea into a liquid piece of art. `,
        imgs: [
            'mf-1',
            'mf-2',
            'mf-3',
            'mf-4',
            'mf-5',
            'mf-7',
            'mf-6',
            'mf-8',
            'mf-9',
            'mf-10',
            'mf-11'
        ]
    }
];

const projectsData = [
    {
        title: 'Amazing Musical Dancing Fountain in the Greater Iqbal Park',
        time: 2016,
        location: 'Pakistan',
        feature: '300M',
        thumb: 'thumb-1',
        imgs: ['pj1-1', 'pj1-2', 'pj1-3', 'pj1-4', 'pj1-5', 'pj1-7', 'pj1-6']
    },
    {
        title: 'Laser Musical Fountain Show In Suzhou',
        time: 2014,
        location: 'China',
        feature: '80m length x15m width',
        thumb: 'thumb-2',
        imgs: ['pj2-1', 'pj2-2', 'pj2-3', 'pj2-4', 'pj2-5', 'pj2-6']
    },
    {
        title: 'Laser Musical Fountain Show In Shandong',
        time: 2015,
        location: 'China',
        feature: '130m length X 30m width',
        thumb: 'thumb-3',
        imgs: ['pj3-1', 'pj3-2', 'pj3-3', 'pj3-4', 'pj3-5', 'pj3-6']
    },
    {
        title: 'Musical dancing fountain in Malaysia',
        time: 2017,
        location: 'Malaysia',
        feature: '',
        thumb: 'thumb-4',
        imgs: ['pj4-1', 'pj4-2', 'pj4-3', 'pj4-4', 'pj4-5']
    },
    {
        title: 'Shanghai Bao Lian hotel',
        time: 2017,
        location: 'China',
        feature: '',
        thumb: 'thumb-5',
        imgs: ['pj5-1', 'pj5-2', 'pj5-3', 'pj5-4', 'pj5-5', 'pj5-7', 'pj5-6']
    },
    {
        title: 'Statue Water Fountain In Shanghai',
        time: 2012,
        location: 'China',
        feature: '',
        thumb: 'thumb-6',
        imgs: ['pj6-1', 'pj6-2', 'pj6-3', 'pj6-4', 'pj6-5']
    },
    {
        title: 'Water Fountains Project In China',
        time: 2013,
        location: 'China',
        feature: '',
        thumb: 'thumb-7',
        imgs: ['pj7-1', 'pj7-2', 'pj7-3', 'pj7-4']
    },
    {
        title: 'Water Fountain Project In Shanghai',
        time: 2010,
        location: 'China',
        feature: '',
        thumb: 'thumb-8',
        imgs: ['pj8-1', 'pj8-2', 'pj8-3', 'pj8-4', 'pj8-5']
    },
    {
        title: 'Water Fountains Project In Zhejiang',
        time: 2011,
        location: 'China',
        feature: '',
        thumb: 'thumb-9',
        imgs: ['pj9-1', 'pj9-2', 'pj9-3', 'pj9-4', 'pj9-5', 'pj9-6', 'pj9-7', 'pj9-8']
    },
    {
        title: 'Musical Fountain for 2018 APEC in PNG',
        time: 2018,
        location: 'Papua New Guinea',
        feature: '40M',
        thumb: 'thumb-10',
        imgs: [
            'pj10-1',
            'pj10-2',
            'pj10-3',
            'pj10-4',
            'pj10-5',
            'pj10-6',
            'pj10-7',
            'pj10-8',
            'pj10-9',
            'pj10-10'
        ]
    },
    {
        title: 'Musical Fountain in Nicaragua',
        time: 2018,
        location: 'Nicaragua',
        feature: '50M',
        thumb: 'thumb-11',
        imgs: [
            'pj11-1',
            'pj11-2',
            'pj11-3',
            'pj11-4',
            'pj11-5',
            'pj11-6',
            'pj11-7',
            'pj11-8',
            'pj11-9',
            'pj11-10',
            'pj11-11',
            'pj11-12'
        ]
    }
];

const navigation = [
    {
        title: 'HOME',
        link: ''
    },
    {
        title: 'PRODUCTS',
        link: 'service?products',
        location: productDatas[0].title
    },
    {
        title: 'SERVICES',
        link: 'service?solutions',
        location: data[0].title
    },
    {
        title: 'PROJECTS',
        link: 'project',
        location: projectsData[0].title
    },
    {
        title: 'ABOUT',
        link: 'about'
    },
    {
        title: 'CONTACT US',
        link: 'contact'
    }
];

const ContactData = [
    {
        title: 'ADDRESS',
        pic: faLocationArrow,
        // desc: 'Room 3H, No. 588 Yingkou Rd, Yangpu Dist., Shanghai, China.',
        render: () => (
            <a
                // class="fusion-no-lightbox"
                href="https://goo.gl/maps/mCGrmET79N12"
                target="_blank"
                aria-label="contact-map"
                rel="noopener noreferrer"
            >Room 3H, No. 588 Yingkou Rd, Yangpu Dist., Shanghai, China.</a>
        ),
        ignore: true
    },
    {
        title: 'EMAIL',
        pic: faEnvelope,
        // desc: 'tongyi@mail.com',
        render: () => <a href="mailto:sales@tyfountain.com">sales@tyfountain.com</a>
    },
    {
        title: 'PHONE',
        pic: faPhoneAlt,
        desc: '+86 15901926288'
    },
    {
        title: 'TIME',
        pic: faClock,
        desc: 'Workday 9am ~ 5pm'
    }
];

export default {
    data,
    productDatas,
    navigation,
    projectsData,
    ContactData
};
