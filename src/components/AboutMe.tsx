import './styles/AboutMe.css';
import css from '../assets/css.svg';
import js from '../assets/js.svg';
import ts from '../assets/ts.svg';
import wrench from '../assets/wrench.svg';
import web from '../assets/web.svg';
import express from '../assets/express.svg'
import mongo from '../assets/mongo.svg'
import sql from '../assets/sql.svg'
import react from '../assets/react.svg'
import education from '../assets/education.svg'
import node from '../assets/node.svg'
import html from '../assets/html.svg'
import {useEffect, useState} from "react";
import Element from "./Element.tsx";
import Icon from "./Icon.tsx";
export default function AboutMe() {
    const [isVisible, setVisible] = useState(false);
    const [isVisibleIcon, setVisibleIcon] = useState(false);

    useEffect(() => {
        const Icons = document.querySelector('#icons');

        const ref = new IntersectionObserver((entries) => {
            if(entries[0].isIntersecting){
                setVisibleIcon(true);

            }
        },{ threshold: 0.8 })
        ref.observe(Icons!)
        return () => {
            ref.unobserve(Icons!);

        };
    }, []);


    useEffect(() => {
        const aboutMeDiv = document.querySelector('#aboutme');

        const ref = new IntersectionObserver((entries) => {
            if(entries[0].isIntersecting){
                setVisible(true);

            }
        },{ threshold: 0.1 })
        ref.observe(aboutMeDiv!)
        return () => {
            ref.unobserve(aboutMeDiv!);

        };
    }, []);

    return (
        <>
<div id={'aboutme'}>

    <h4 className={isVisible?'AboutMe':'Hiden' } id={`${isVisible?'fadein':''}`}>About Me</h4>
    <div className={`line ${isVisible?'show':'Hiden'}`} id={`${isVisible?'fadeinDiv':''}`}>
    </div>
    <p id={`${isVisible?'fadein':''}`} className={`WantTo ${isVisible?'show':'Hiden'}`}>Want to know more about me? <br/>Explore my journey, skills, and the projects I’ve built to bring ideas to life on the web and beyond.

       </p>
<Element img={education} text={'Software Engineer at Hashmite University'} index={0}/>
    <Element img={web} text={'Interest in Web Development and UI Design'} index={1}/>
    <Element img={wrench} text={'Personal Projects and Innovative Development '} index={2}/>
    <div className={'divIcons'} id={'icons'}>
        { isVisibleIcon&&<span className={'Icons'} >
        <Icon icon={html} index={0} title={'html'}/>
        <Icon icon={css}  index={1} title={'css'}/>
        <Icon icon={js}   index={2} title={'javaScript'}/>
        <Icon icon={ts}  index={3} title={'typeScript'}/>
        <Icon icon={react}  index={4} title={'react'}/>
        <Icon icon={node}  index={5} title={'nodeJS'}/>
        <Icon icon={express}   index={6} title={'expressJs'}/>
        <Icon icon={mongo}    index={7} title={'mongoDB'}/>
        <Icon icon={sql}    index={8} title={'SQL'}/>

</span>}

    </div>
</div>



        </>
    );
}
