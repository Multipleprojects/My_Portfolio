import dione from '../assets/dione.png';
import peek from '../assets/fiver.svg';
import react from '../assets/react.webp';
import node from '../assets/nodejs.webp';
import express from '../assets/express.webp';
import html from '../assets/images.png';
import css from '../assets/css.webp';
import bootstrap from '../assets/bootstrap.jpeg';
import tourism from '../assets/tourism.png';
import tutor from '../assets/tutor.jpg';
import islamichub from '../assets/islamichub.jpeg';
import ecommerce from '../assets/ecommerce.webp';
import movie from '../assets/moviesite.webp';
import gym from '../assets/gym.jpeg';
import tailwind from '../assets/tailwind.png'
const experince=[
    {
    company:"Dione",
    duration:"7 month",
    role:"Web Developer",
Location:"Rawalpindi",
Logo:dione,
description:"I worked as a web developer at Dione, focusing on full-stack development. I developed the frontend using React.js and handled the backend with Node.js, building APIs and server-side logic. My role involved creating responsive interfaces and ensuring seamless integration between client and server",
},
{
    company:"Fiverr",
    duration:"Current",
    role:"Web Developer",
Location:"Rawalpindi",
Logo:peek,
description:"As a freelancer, I work closely with a friend who shares MERN stack projects with me. I handle the full development process, from front-end to back-end, using MongoDB, Express, React, and Node.js. This collaboration has helped me deliver quality projects while sharpening my technical skills",
},
]

const skills=[{image:html,title:"Html"},
    {image:css,title:"Css"},
    {image:bootstrap,title:"Bootstrap"},
    {image:tailwind,title:"Tailwind"}
    ,{image:react,title:"React.JS"},
    {image:node,title:"Node.JS"},
    {image:express,title:"Express.JS"}
]

const projects=[
    {
        image:tourism,
        link:'https://www.tripwaly.com/',
        title:"Tourism  Website",
        description:"This is a tourism website that provides information about different tourist destinations The website is built using React with Nodejs." 
    },
    {

        image:tutor,
        link:'https://houseoftutor-fyp-git-main-mudassirs-projects-ed5cdfb1.vercel.app/',
        title:"House Of Tutor Website",
    description:"A website for House of Tutor, a tutoring service. The website is built using React with Nodejs."
},
{
    image:islamichub,
    link:'https://github.com/Multipleprojects/islamichub_backend',
    title:"Islamichub Website",
    description:"A website for Islamic Hub, a religious website. The website is built using React with Nodejs."
},
{
    image:ecommerce,
    link:'https://delightful-brigadeiros-df5443.netlify.app/',
    title:"ECommerce Website",
    description:"A website for ECommerce, a shopping website. The website is built using React"
},
{
    image:movie,
    link:'https://unique-sable-ecc25a.netlify.app/',
    title:"Movie Website",
    description:"A website for Movie, a movie website. The website is built using React"
},
{
    image:gym,
    link:'https://gym-feature-react-site.netlify.app/',
    title:"GYM Advertisement Website",
    description:"A website for GYM Advertisement, a GYM website. The website is built using React"
},
]
export {skills, experince, projects}
