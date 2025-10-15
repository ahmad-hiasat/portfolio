import {useEffect, useState} from "react";
import './styles/Element.css'
export default function Element({img , text , index}:{img:string , text:string , index:number}) {

    const [isVisibleEdu, setVisibleEdu] = useState(false);
    useEffect(() => {
        const icon = document.querySelector('#iconcontainer');

        const ref = new IntersectionObserver((entries) => {
            if(entries[0].isIntersecting){


               setTimeout(()=>{
                    setVisibleEdu(true)
                },300*index)


            }
        },{ threshold: 1 })
        ref.observe(icon!)
        return () => {

            ref.unobserve(icon!);
        };
    }, []);

    return (<>


        <div id='iconcontainer' className={`${isVisibleEdu?'AnimationElement':'Hiden'}`}>

            <img src= {img}  className={`ElementImg ${isVisibleEdu?'showScreen':'Hiden'} `} />
            <p className={'theText'}>{text}</p>

        </div>
    </>)
}