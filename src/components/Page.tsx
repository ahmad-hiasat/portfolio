import './styles/Page.css'
type PageProps = {
    link: string;
    logo: string;
    name:string;
};
export default function Page({link , logo , name}: PageProps) {
    function openSite() {
        window.open(`${link}`, '_blank');
    }
    return <>
        <div onClick={ () => openSite()}>
        <img src={logo} alt={name} className={'logo'}/>
        </div>
    </>
}
