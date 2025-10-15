import './styles/NavBar.css';
import Hamburger from 'hamburger-react'
import {useEffect, useState} from "react";
export default function NavBar(){

    const ar = [{title : 'Home' , Link:'#' , id:0},{title : 'About Me' , Link:'#aboutme' , id:1}, {title : 'Experience' , Link:'#' , id:2}, {title : 'Projects' , Link:'#' , id:3},{title : 'Contact' , Link:'#' , id:4}]
    const [isOpen, setOpen] = useState(false)
    const [isClicked, setClicked] = useState(false)

    const setHamburger = () => {
        setOpen(!isOpen);
        setClicked(true);}
    useEffect(() => {
        if(isOpen){
            document.body.classList.add('is-active');
        }else{
            document.body.classList.remove('is-active');
        }
    },[isOpen])
    useEffect(() => {
        const div = document.querySelector('#Home');
        const ref = new IntersectionObserver((entries) => {
            if(entries[0].isIntersecting){
                window.history.pushState(null, "", "#home");
            }
        },{threshold: 0.5 })

        ref.observe(div!)
    }, []);
    useEffect(() => {
        const aboutMeDiv = document.querySelector('#aboutme');

        const ref = new IntersectionObserver((entries) => {
            if(entries[0].isIntersecting){
                window.history.pushState(null, "", "#aboutme");
                setOpen(false);
            }
        },{ threshold: 0.5 })
        ref.observe(aboutMeDiv!)
    }, []);


    return (<>

        <div  className="HamburgerBtn">
            <Hamburger toggled={isOpen} toggle={setHamburger} />
        </div>
<div className={`DivNav ${isClicked?isOpen?'DivNavShow':'DivNavHide':'HideAllTime'}`}>
            <ul className="nav">
                <h1 className={'MenuNav'}>Menu</h1>
                {ar.map(a => <li key={a.id} className={'liLinks'} ><a href={a.Link} className={'links'}>{a.title}</a></li>)}
            </ul>
</div>

    </>)
}