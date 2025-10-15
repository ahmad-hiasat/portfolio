import './styles/Icon.css'
import {useEffect, useState} from "react";
export default function Icon({icon , index , title}:{icon:string , index:number , title:string}){
    const [isVisible, setVisible] = useState(false);
    useEffect(() => {
        const showIt = setTimeout(()=>{
            setVisible(true);
        },300*index);
        return () => clearTimeout(showIt)
    }, []);
    return <>
    <span className={'iconContainer'}>
       <img src={icon} className={`${isVisible?'icon':'Hide'}`}/>
        <p>{title}</p>
        </span>
    </>

}