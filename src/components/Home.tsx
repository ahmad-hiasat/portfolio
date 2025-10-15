import meImg from '../assets/me.png'
import './styles/Home.css'
import Page from "./Page.tsx";
import InstaLogo from '../assets/insta.svg';
import github from '../assets/github-svgrepo-com.svg'
import linkedin from '../assets/linkedin.svg'
import facebook from '../assets/facebook-svgrepo-com.svg'

export default function Home(){




    return (<>
        <div style={{width: '100%' , height: '100vh' , justifyContent: 'center', alignItems: 'center' , display:'flex'}} id={'Home'}>
    <img src={meImg} className={'img'} />
<div className={'container'}>
            <div className={'Text Hi'}>
            <span >Hi i'm</span><span className={'MyName'}>Ahmad Hiasat</span><span> Full Stack developer</span>
    </div>
            <span className={'info'}>I build fast and SEO-friendly web applications using JavaScript, TypeScript, and React.<br/> I am passionate about creating smooth user interfaces, maintaining excellent UI/UX, and writing clean, maintainable code. I craft modern user experiences while also delivering scalable backend integrations when needed.</span>
</div>
        </div>
        <div className={'pages'}>
            <div className={'pageSingle'}>
            <Page link={'https://www.instagram.com/ahmad._.hyasat0/'} logo={InstaLogo} name={'instagram'}></Page>
            </div>
            <div className={'pageSingle'}>
                <Page link={'https://www.linkedin.com/in/%D8%A7%D8%AD%D9%85%D8%AF-%D8%AD%D9%8A%D8%A7%D8%B5%D8%A7%D8%AA-102610332/'} logo={linkedin} name={'linkedin'}></Page>

            </div>
            <div className={'pageSingle'}>
                <Page link={'https://github.com/ahmad-hiasat'} logo={github} name={'github'}></Page>

            </div>
            <div className={'pageSingle'}>
                <Page link={'https://www.facebook.com/ahmd.hyasat.630423'} logo={facebook} name={'facebook'}></Page>

            </div>

        </div>


    </>)
}