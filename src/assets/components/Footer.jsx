import Logo from './Logo';
import LogoFooter from './LogoFooter';
import Redes from './Redes'

const Footer = () => {
    return (
        <div style={{backgroundColor: "#1F1F1F", height: "100%", width: "100%", padding: "30px 24px 20px 20px", color: "#FFFFFF"}}>
            <LogoFooter/>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <Redes />
            <div style={{marginTop: '3rem'}}>
                <h3 style={{lineHeight: '0.65rem'}}>Contato</h3>
                <p style={{lineHeight: '2rem'}}>Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</p>
                <p className='mt-5'>(85) 3051-3411</p>
            </div>
            <div className='flex justify-content-center' style={{fontSize: ".8rem", borderTop:"1px solid #FFFFFF", marginTop:'40px', paddingTop:'20px'}}>
                <p>@ 2026 Digital College</p>
            </div>
        </div >
    );
}

export default Footer;