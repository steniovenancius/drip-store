//icones
import 'primeicons/primeicons.css';

//Tema
import "primereact/resources/themes/lara-light-cyan/theme.css";

//Componentes
import MiniCart from "../imgs/mini-cart.svg"
import Logo from "./Logo";
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { InputText } from "primereact/inputtext";
import "primeflex/primeflex.css"

const Header = ()  => {
    return (
        <section style={{padding:'24px 100px 0 100px'}}>
            <header style={{width:'100%', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                <div style={{display:'flex', gap:'27px', width:'100%'}}>
                    <Logo largura={253} altura={44}/>
                    <IconField iconPosition="right">
                        <InputIcon className="pi pi-search"> </InputIcon>
                        <InputText placeholder="Pesquisar produto..." style={{width:'559px'}}/>
                    </IconField>
                </div>
                <div style={{display:'flex', alignItems:'center'}}>
                    <button style={{width:'102px', background:'none',textDecoration:'underline', color:'#474747', marginRight:'30px'}}>Cadastre-se</button>
                    <button style={{borderRadius:'8px', backgroundColor:'#C92071', color:'#FFFFFF', marginRight:'70px'}}>Entrar</button>
                    <button style={{background:'none', width:'47px'}}><img src={MiniCart} alt=""/></button>
                </div>
            </header>
            <nav>
                <ul>
                    <li><button className='btnNav'>Home</button></li>
                    <li><button className='btnNav'>Produtos</button></li>
                    <li><button className='btnNav'>Categorias</button></li>
                    <li><button className='btnNav'>Meus Pedidos</button></li>
                </ul>
            </nav>
        </section>
        
    );
}

export default Header;